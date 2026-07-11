// ===========================================================
// Portfolio — script.js  (no dependencies)
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // ---- Year in footer ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Theme toggle (persisted, gracefully degrades) ----
  const themeBtn = document.getElementById("themeToggle");
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
  };
  const saved = store.get("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", saved || (prefersLight ? "light" : "dark"));
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("theme", next);
    });
  }

  // ---- Mobile nav ----
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---- Hide-on-scroll nav + shadow ----
  const nav = document.getElementById("nav");
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("nav--scrolled", y > 40);
    if (y > lastY && y > 200) nav.classList.add("nav--hidden");
    else nav.classList.remove("nav--hidden");
    lastY = y;
  });

  // ---- Scroll-reveal ----
  const revealables = document.querySelectorAll(".section, .card, .feature");
  revealables.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  revealables.forEach((el) => io.observe(el));

  // ---- Active nav link on scroll (scrollspy) ----
  const navAnchors = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        navAnchors.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
        );
      }
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  // ---- Contact form (Formspree AJAX, no page reload) ----
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (form.action.includes("YOUR_FORM_ID")) {
        status.textContent = "⚠ Add your Formspree ID in index.html to enable sending.";
        status.className = "cform__status err";
        return;
      }
      status.textContent = "Sending…";
      status.className = "cform__status";
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          status.textContent = "✓ Thanks! Your message has been sent.";
          status.className = "cform__status ok";
          form.reset();
        } else {
          throw new Error("Request failed");
        }
      } catch {
        status.textContent = "✗ Something went wrong — reach me on LinkedIn instead.";
        status.className = "cform__status err";
      }
    });
  }
});
