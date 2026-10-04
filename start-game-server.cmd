@echo off
setlocal

start "Plate-o-Guessr local server" powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve-game.ps1" -Root "%~dp0" -Port 8788
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8788/game.html"
