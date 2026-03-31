export function initHeader() {
  const header = document.getElementById("site-header");
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
    },
    { passive: true },
  );
}

export function initScrollTop() {
  const scrollBtn = document.getElementById("scroll-top");
  window.addEventListener(
    "scroll",
    () => {
      scrollBtn.classList.toggle("visible", window.scrollY > 150);
    },
    { passive: true },
  );
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function initFadeIn() {
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  fadeEls.forEach((el) => observer.observe(el));
}

export function initBurger() {
  const burgerBtn = document.getElementById("burger-btn");
const headerNav = document.getElementById("header-nav");

burgerBtn.addEventListener("click", () => {
  const isOpen = headerNav.classList.toggle("open");
  burgerBtn.classList.toggle("open", isOpen);
  burgerBtn.setAttribute("aria-expanded", isOpen);
});

// Fermer le menu au clic sur un lien
headerNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    headerNav.classList.remove("open");
    burgerBtn.classList.remove("open");
    burgerBtn.setAttribute("aria-expanded", "false");
  });
});
}

