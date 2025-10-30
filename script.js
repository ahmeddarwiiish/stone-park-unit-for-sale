// script.js - Basic interactions and form validation

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Form validation before submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[name='email']").value;
    const phone = form.querySelector("input[name='phone']").value;

    if (!email.includes("@") || phone.length < 7) {
      alert("Please enter a valid email and phone number.");
      e.preventDefault();
    }
  });
});
