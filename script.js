const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Think of the snacks!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const confettiBits = ["💌", "💘", "✨", "🌹", "💖"];

let messageIndex = 0;
let yesScale = 1;
let noClicks = 0;

const MAX_SCALE = 2.6;
const SCALE_STEP = 1.2;
const MAX_RUNAWAY = 6;

function handleNoClick(noButton, yesButton, status) {
    const message = messages[messageIndex];
    noButton.textContent = message;
    status.textContent = message;
    messageIndex = (messageIndex + 1) % messages.length;
    noClicks += 1;

    yesScale = Math.min(yesScale * SCALE_STEP, MAX_SCALE);
    yesButton.style.transform = `scale(${yesScale})`;

    if (noClicks >= messages.length - 1) {
        convertNoToYes(noButton, status);
    }
}

function handleYesClick(status) {
    status.textContent = "Yay! I owe you a date, a dessert, and a cute playlist.";
    burstConfetti(status);
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 650);
}

function convertNoToYes(noButton, status) {
    if (!noButton.classList.contains("no-button")) return;
    noButton.textContent = "Yes";
    noButton.classList.add("is-yes");
    noButton.classList.add("yes-button");
    noButton.classList.remove("no-button");
    noButton.classList.remove("runaway");
    noButton.setAttribute("aria-label", "Yes");
    noButton.addEventListener("click", () => handleYesClick(status), { once: true });
}

function moveNoButton(noButton, container) {
    if (!noButton.classList.contains("no-button")) return;
    if (noClicks >= MAX_RUNAWAY) {
        convertNoToYes(noButton, container.querySelector("#status"));
        return;
    }
    noButton.classList.add("runaway");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = Math.max(0, containerRect.width - buttonRect.width);
    const maxY = Math.max(0, 120);

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function burstConfetti(anchor) {
    const container = document.createElement("div");
    container.className = "confetti";
    confettiBits.forEach((bit, index) => {
        const span = document.createElement("span");
        span.textContent = bit;
        span.style.left = `${20 + index * 16}%`;
        span.style.animationDelay = `${index * 0.06}s`;
        container.appendChild(span);
    });
    anchor.parentElement.insertBefore(container, anchor.nextSibling);
    setTimeout(() => container.remove(), 1200);
}

document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const status = document.getElementById("status");
    const buttonWrap = document.querySelector(".buttons");

    if (!yesButton || !noButton || !status || !buttonWrap) {
        console.warn("Required elements not found.");
        return;
    }

    yesButton.addEventListener("click", () => handleYesClick(status));
    noButton.addEventListener("click", () => handleNoClick(noButton, yesButton, status));
    noButton.addEventListener("mouseenter", () => moveNoButton(noButton, buttonWrap));
    noButton.addEventListener("touchstart", () => moveNoButton(noButton, buttonWrap), { passive: true });
});
