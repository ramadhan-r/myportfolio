const roles = [
  "land surveyor",
  "GIS specialist",
  "research assistant",
  "web developer",
  "architectural designer",
  "friendly networker",
];

const typingEl = document.getElementById("typingText");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function getArticle(word) {
  const firstLetter = word.trim().charAt(0).toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a";
}

function typeLoop() {
  const currentRole = roles[roleIndex];
  const article = getArticle(currentRole);
  const prefix = "I am " + article + " ";

  if (!deleting) {
    typingEl.textContent = prefix + currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      setTimeout(() => deleting = true, 400);
    }
  } else {
    typingEl.textContent = prefix + currentRole.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 25 : 40);
}

typeLoop();

// Simulate backend not connected
showToast("Payment failed. M-Pesa service not available.", "error");


function openLandSurveyModal() {
  document.getElementById("landSurveyModal").style.display = "flex";
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeLandSurveyModal() {
  document.getElementById("landSurveyModal").style.display = "none";
  document.body.style.overflow = "";  // Restore page scroll
}

function openWebMapModal() {
  document.getElementById("webMapModal").style.display = "flex";
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeWebMapModal() {
  document.getElementById("webMapModal").style.display = "none";
  document.body.style.overflow = "";  // Restore page scroll
}

function openResearchModal() {
  document.getElementById("researchModal").style.display = "flex";
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeResearchModal() {
  document.getElementById("researchModal").style.display = "none";
  document.body.style.overflow = "";  // Restore page scroll
}

function openLandCoverModal() {
  document.getElementById("landCoverModal").style.display = "flex";
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeLandCoverModal() {
  document.getElementById("landCoverModal").style.display = "none";
  document.body.style.overflow = "";  // Restore page scroll
}

function openRiskAssessmentModal() {
  document.getElementById('riskAssessmentModal').style.display = 'flex';
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeRiskAssessmentModal() {
  document.getElementById('riskAssessmentModal').style.display = 'none';
  document.body.style.overflow = "";  // Restore page scroll
}

function openSpatialModellingModal() {
  document.getElementById('spatialModellingModal').style.display = 'flex';
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeSpatialModellingModal() {
  document.getElementById('spatialModellingModal').style.display = 'none';
  document.body.style.overflow = "";  // Restore page scroll
}

function openWebDevModal() {
  document.getElementById("webDevModal").style.display = "flex";
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeWebDevModal() {
  document.getElementById("webDevModal").style.display = "none";
  document.body.style.overflow = "";  // Restore page scroll
}

function openEnvironmentModal() {
  document.getElementById('environmentModal').style.display = 'flex';
  document.body.style.overflow = "hidden";  // Prevent page scroll
}

function closeEnvironmentModal() {
  document.getElementById('environmentModal').style.display = 'none';
  document.body.style.overflow = "";  // Restore page scroll
}
const toggleTips = document.getElementById('toggleTips');
const tipItems = document.querySelectorAll('#tipModal .tip-item'); // tip-item = elements you want to hide/show

function updateTipVisibility() {
  const limit = 3;
  tipItems.forEach((item, index) => {
    if (toggleTips.checked) {
      item.style.display = index < limit ? 'block' : 'none';
    } else {
      item.style.display = 'block';
    }
  });
}

toggleTips.addEventListener('change', updateTipVisibility);
updateTipVisibility(); // initialize on modal open
document.addEventListener("DOMContentLoaded", function () {
  const servicesGrid = document.getElementById("servicesGrid");
  const merchGrid = document.getElementById("merchGrid");

  if (!servicesGrid.classList.contains("collapsed")) {
    servicesGrid.classList.add("collapsed");
  }
  if (!merchGrid.classList.contains("collapsed")) {
    merchGrid.classList.add("collapsed");
  }
});
// Counter animation starts immediately on page load
(function() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    let current = 0;
    const duration = 1500; // total animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      current += 1;
      counter.innerText = current;
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  });
})();
