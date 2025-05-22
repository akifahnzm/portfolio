document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (!toggleButton) return; // Prevent errors on pages without the button

  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    toggleButton.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
  });
});
