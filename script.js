
// VYORA DIGITAL - Website Interactions

// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatic footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact Form - WhatsApp Integration
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !service || !message) {
    alert("Please complete all fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // IMPORTANT: Replace with your actual WhatsApp number.
  // Include country code without + or spaces.
  const whatsappNumber = "91XXXXXXXXXX";

  if (whatsappNumber.includes("X")) {
    alert("Website setup required: Add your WhatsApp number in script.js first.");
    return;
  }

  const whatsappMessage =
`Hello VYORA DIGITAL!

My name: ${name}
My email: ${email}
Service required: ${service}

Project details:
${message}

I would like to discuss working together.`;

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".value-card, .service-card, .work-card, .process-grid article"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
