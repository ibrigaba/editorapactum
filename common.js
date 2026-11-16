/**
 * EDITORA PACTUM — UTILITÁRIOS COMPARTILHADOS DE NAVEGAÇÃO & SCROLL
 * Gerencia barra fixa, menu mobile acessível (ARIA) e progresso de leitura
 * em um único listener passivo sincronizado com requestAnimationFrame.
 */
(function () {
  function initSharedChrome() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const progressCircle = document.getElementById("scrollProgressCircle");
    const circumference = 2 * Math.PI * 18;

    let ticking = false;

    function updateOnScroll() {
      ticking = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;

      if (navbar) {
        navbar.classList.toggle("scrolled", scrollTop > 40);
      }

      if (progressCircle) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        progressCircle.style.strokeDashoffset = circumference - (scrollPercent / 100) * circumference;
      }

      if (backToTopBtn) {
        backToTopBtn.classList.toggle("visible", scrollTop > 400);
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateOnScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateOnScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (navToggle && navLinks) {
      function setMenuOpen(isOpen) {
        navLinks.classList.toggle("open", isOpen);
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
      }

      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-controls", "navLinks");

      navToggle.addEventListener("click", function () {
        setMenuOpen(!navLinks.classList.contains("open"));
      });

      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setMenuOpen(false);
        });
      });

      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && navLinks.classList.contains("open")) {
          setMenuOpen(false);
          navToggle.focus();
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSharedChrome);
  } else {
    initSharedChrome();
  }
})();
