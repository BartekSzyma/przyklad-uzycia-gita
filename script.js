// ===== Biezacy rok w stopce =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Licznik commitow =====
const commitBtn = document.getElementById("commit-btn");
const commitCount = document.getElementById("commit-count");
let count = 0;

commitBtn.addEventListener("click", () => {
  count += 1;
  commitCount.textContent = count;
});

// ===== Przelacznik motywu jasny/ciemny =====
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
