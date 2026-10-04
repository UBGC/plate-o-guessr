param(
    [Parameter(Mandatory = $true)]
    [string]$Root,

    [ValidateRange(1024, 65535)]
    [int]$Port = 8787
)

$ErrorActionPreference = "Stop"

$rootPath = [System.IO.Path]::GetFullPath($Root).TrimEnd('\') + '\'
if (-not [System.IO.Directory]::Exists($rootPath)) {
    throw "Folder gry nie istnieje: $Root"
}

$mimeTypes = @{
    ".css"  = "text/css; charset=utf-8"
    ".gif"  = "image/gif"
    ".html" = "text/html; charset=utf-8"
    ".ico"  = "image/x-icon"
    ".jpeg" = "image/jpeg"
    ".jpg"  = "image/jpeg"
    ".js"   = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".webp" = "image/webp"
    ".xml"  = "application/xml; charset=utf-8"
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Start()

Write-Host "Gra jest dostępna pod: http://127.0.0.1:$Port/game.html"
Write-Host "Naciśnij Ctrl+C, aby zatrzymać serwer."

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $relativePath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))
        if ([string]::IsNullOrWhiteSpace($relativePath)) {
            $relativePath = "index.html"
        }

        $filePath = [System.IO.Path]::GetFullPath((Join-Path $rootPath $relativePath))
        if (-not $filePath.StartsWith($rootPath, [System.StringComparison]::OrdinalIgnoreCase) -or
            -not [System.IO.File]::Exists($filePath)) {
            $context.Response.StatusCode = 404
            $context.Response.Close()
            continue
        }

        $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
        $context.Response.ContentType = $mimeTypes[$extension]
        if (-not $context.Response.ContentType) {
            $context.Response.ContentType = "application/octet-stream"
        }
        $context.Response.Headers["Cache-Control"] = "no-store"

        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $context.Response.ContentLength64 = $bytes.Length
        if ($context.Request.HttpMethod -ne "HEAD") {
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $context.Response.Close()
    }
}
finally {
    $listener.Close()
}
