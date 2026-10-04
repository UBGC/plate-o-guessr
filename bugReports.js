const DATABASE_VERSION = window.DATABASE_VERSION || "v2";
const GAME_VERSION = window.GAME_VERSION || "0.1.1";

function getBugReportText(key, fallback) {
    return window.t && typeof window.t[key] === "string"
        ? window.t[key]
        : fallback;
}

async function sendBugReport(category, description) {
    try {
        if (typeof window.getRemoteDb !== "function" || typeof window.ensureAuth !== "function") {
            return false;
        }

        const db = window.getRemoteDb();
        if (!db) return false;

        await window.ensureAuth();

        const firebase = window.firebase;
        const auth = firebase && typeof firebase.auth === "function" ? firebase.auth() : null;
        const user = auth && auth.currentUser;
        if (!user || !user.uid) {
            throw new Error("Firebase user is not authenticated.");
        }

        const currentPlate = window.currentPlate || null;
        const savedNick = document.getElementById("nick")?.value || "";
        const nick = typeof window.getEffectiveNick === "function"
            ? window.getEffectiveNick(savedNick)
            : savedNick.trim();

        const report = {
            uid: user.uid,
            nick,
            status: "new",
            category,
            description,
            databaseVersion: DATABASE_VERSION,
            version: GAME_VERSION,
            language: localStorage.getItem("language"),
            browser: navigator.userAgent,
            page: location.pathname,
            plate: currentPlate && currentPlate.text ? currentPlate.text : null,
            country: currentPlate && currentPlate.country ? currentPlate.country : null,
            score: window.currentScore ?? null,
            createdAt: Date.now()
        };

        await db.ref(`${DATABASE_VERSION}/bugReports`).push(report);
        return true;
    } catch (error) {
        console.error("Nie udało się wysłać zgłoszenia błędu:", error);
        return false;
    }
}

function updateBugReportTranslations() {
    const setText = (id, key, fallback) => {
        const element = document.getElementById(id);
        if (element) element.textContent = getBugReportText(key, fallback);
    };

    setText("bugModalTitle", "bugModalTitle", "Report a bug");
    setText("bugCategoryLabel", "bugCategoryLabel", "Category");
    setText("bugDescriptionLabel", "bugDescriptionLabel", "Description");
    setText("sendBugReportBtn", "bugSendBtn", "Send report");
    setText("closeBugModal", "bugCancelBtn", "Cancel");

    const description = document.getElementById("bugDescription");
    if (description) {
        description.placeholder = getBugReportText(
            "bugDescriptionPlaceholder",
            "Describe the problem..."
        );
    }

    const category = document.getElementById("bugCategory");
    const categoryKeys = [
        ["bugCategoryGameplay", "Gameplay"],
        ["bugCategoryPlate", "License plate"],
        ["bugCategoryTranslation", "Translation"],
        ["bugCategoryMap", "Map"],
        ["bugCategoryPerformance", "Performance"],
        ["bugCategoryOther", "Other"]
    ];

    if (category) {
        categoryKeys.forEach(([key, fallback], index) => {
            if (category.options[index]) {
                category.options[index].textContent = getBugReportText(key, fallback);
            }
        });
    }
}

const reportBugBtn = document.getElementById("reportBugBtn");
const bugModal = document.getElementById("bugModal");
const closeBugModal = document.getElementById("closeBugModal");
const sendBugReportBtn = document.getElementById("sendBugReportBtn");
const bugCategory = document.getElementById("bugCategory");
const bugDescription = document.getElementById("bugDescription");
const bugReportStatus = document.getElementById("bugReportStatus");

reportBugBtn?.addEventListener("click", () => {
    if (bugReportStatus) bugReportStatus.textContent = "";
    if (bugModal) bugModal.hidden = false;
});

closeBugModal?.addEventListener("click", () => {
    if (bugModal) bugModal.hidden = true;
});

sendBugReportBtn?.addEventListener("click", async () => {
    const description = bugDescription ? bugDescription.value.trim() : "";

    if (description.length < 10) {
        if (bugReportStatus) {
            bugReportStatus.textContent = getBugReportText(
                "bugTooShort",
                "Description is too short."
            );
        }
        return;
    }

    sendBugReportBtn.disabled = true;
    try {
        const ok = await sendBugReport(
            bugCategory ? bugCategory.value : "Other",
            description
        );

        if (bugReportStatus) {
            bugReportStatus.textContent = getBugReportText(
                ok ? "bugSuccess" : "bugFailed",
                ok ? "Thank you for your report!" : "Could not send the report."
            );
        }

        if (ok) {
            if (bugDescription) bugDescription.value = "";
            setTimeout(() => {
                if (bugModal) bugModal.hidden = true;
            }, 1200);
        }
    } finally {
        sendBugReportBtn.disabled = false;
    }
});

window.sendBugReport = sendBugReport;
window.updateBugReportTranslations = updateBugReportTranslations;
