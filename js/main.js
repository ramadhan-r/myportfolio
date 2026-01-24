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
const reports = {
  "land-survey": `
    <h2>Land Survey – Detailed Report</h2>
    <p>
      This work involved cadastral, topographic, and engineering surveys
      using RTK GNSS and Total Station instruments.
    </p>
    <ul>
      <li>Boundary re-establishment and parcel verification</li>
      <li>Topographic mapping for land development</li>
      <li>Control establishment and coordinate referencing</li>
      <li>AutoCAD and GIS map production</li>
    </ul>
    <p>
      Deliverables supported land registration, planning approvals,
      and infrastructure layout.
    </p>
  `,

  "gis-analysis": `
    <h2>GIS & Spatial Analysis</h2>
    <p>
      Advanced spatial analysis integrating remote sensing,
      vector datasets, and statistical modeling to support
      environmental and urban planning decisions.
    </p>
  `
};

const modal = document.getElementById("reportModal");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".project-card.tappable").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.report;
    modalBody.innerHTML = reports[key];
    modal.style.display = "block";
  });
});

document.querySelector(".close-btn").onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
