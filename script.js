// ========== DARK MODE ==========
const body = document.body;
const toggle = document.getElementById("theme-toggle");

// Aplica tema salvo
function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    body.classList.remove("dark");
    toggle.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Alternar tema
toggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});


// ========== MENU MOBILE ==========
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});