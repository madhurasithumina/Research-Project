(function () {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function setElevated() {
    if (!header) return;
    const elevated = window.scrollY > 8;
    header.setAttribute("data-elevated", elevated ? "true" : "false");
  }

  window.addEventListener("scroll", setElevated, { passive: true });
  setElevated();

  if (toggle && nav) {
    function closeMenu() {
      nav.removeAttribute("data-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const isOpen = nav.getAttribute("data-open") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        nav.setAttribute("data-open", "true");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target instanceof HTMLAnchorElement) {
        closeMenu();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
})();
