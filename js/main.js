const roles = [
  "land surveyor",
  "GIS specialist",
  "research assistant",
  "web developer",
  "friendly networker",
];

const typingEl = document.getElementById("typingText");

let roleIndex = 0;
let charIndex = 0;
let baseText = "I am a ";
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = baseText + currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      setTimeout(() => deleting = true, 1200);
    }
  } else {
    typingEl.textContent = baseText + currentRole.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 90);
}

typeLoop();
// Simulate backend not connected
showToast("Payment failed. M-Pesa service not connected.", "error");
function openLandSurveyModal() {
  document.getElementById("landSurveyModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLandSurveyModal() {
  document.getElementById("landSurveyModal").style.display = "none";
  document.body.style.overflow = "";
}
// ================= WEB MAP MODAL =================

function openWebMapModal() {
  document.getElementById("webMapModal").style.display = "flex";
}

function closeWebMapModal() {
  document.getElementById("webMapModal").style.display = "none";
}
