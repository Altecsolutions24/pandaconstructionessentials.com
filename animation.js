document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-left, .animate-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
        } else {
          entry.target.classList.remove("animate-show"); // Reset animation
        }
      });
    },
    { threshold: 0.3 }
  );

  animatedElements.forEach(el => observer.observe(el));
});
