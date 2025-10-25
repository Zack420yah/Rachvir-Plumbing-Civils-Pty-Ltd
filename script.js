// ====== NAVIGATION ======
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

// ====== YEAR IN FOOTER ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== WHATSAPP BUTTON ======
const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.addEventListener("click", () => {
  window.open("https://wa.me/27600000000?text=Hi! I'm interested in your plumbing and civil services.", "_blank");
});

// ====== INTERACTIVE CARD ======
const interactiveCard = document.getElementById("interactiveCard");
const tips = [
  "💧 Tip: Regularly check your geyser valve for leaks.",
  "🚿 Tip: Clean your drains monthly to prevent clogging.",
  "🔧 Tip: A dripping tap can waste over 20L per day — fix it early!",
  "🏗️ Tip: Schedule preventive maintenance for better durability."
];
interactiveCard.addEventListener("click", () => {
  const cardCta = interactiveCard.querySelector(".card-cta");
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  cardCta.textContent = randomTip;
});

// ====== PROJECT GALLERY MODAL ======
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.getAttribute("data-src");
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

// ====== CONTACT FORM ======
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const clearBtn = document.getElementById("clearBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulated form success animation
  formNote.textContent = "✅ Message sent successfully!";
  formNote.style.color = "#59b8ff";

  contactForm.reset();

  // Pulse animation
  formNote.animate(
    [
      { transform: "scale(1)", opacity: 1 },
      { transform: "scale(1.1)", opacity: 0.8 },
      { transform: "scale(1)", opacity: 1 }
    ],
    { duration: 600, iterations: 1 }
  );

  // Auto clear message
  setTimeout(() => {
    formNote.textContent = "";
  }, 4000);
});

clearBtn.addEventListener("click", () => {
  contactForm.reset();
  formNote.textContent = "";
});

// ====== ANIMATION ON SCROLL ======
const animElements = document.querySelectorAll("[data-anim]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

animElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
