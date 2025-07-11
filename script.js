// Smooth scroll for older browsers (fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Back-to-top button logic (if you add one later)
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "backToTop";
topBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background: #2dd6a7;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  display: none;
  z-index: 10;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
