/* Prime Restaurant & Banquet — main interactions */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* ---- sticky header ---- */
    var header = document.querySelector(".site-header");
    if (header && !header.classList.contains("solid")) {
      var onScroll = function () {
        header.classList.toggle("scrolled", window.scrollY > 60);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---- mobile nav ---- */
    var burger = document.querySelector(".burger");
    var mobileNav = document.querySelector(".mobile-nav");
    if (burger && mobileNav) {
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      burger.addEventListener("click", function () {
        var open = mobileNav.classList.toggle("open");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
        document.body.style.overflow = open ? "hidden" : "";
      });
      mobileNav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mobileNav.classList.remove("open");
          burger.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
          mobileNav.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        });
      });
    }

    /* ---- scroll reveal ---- */
    var revealables = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      revealables.forEach(function (el, i) {
        el.style.transitionDelay = (i % 4) * 90 + "ms";
        io.observe(el);
      });
    } else {
      revealables.forEach(function (el) { el.classList.add("in"); });
    }

    /* ---- logo marquee: duplicate track for a seamless loop ---- */
    var track = document.querySelector(".marquee-track");
    if (track && !track.dataset.cloned) {
      Array.prototype.slice.call(track.children).forEach(function (child) {
        track.appendChild(child.cloneNode(true));
      });
      track.dataset.cloned = "true";
    }

    /* ---- testimonial slider ---- */
    var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
    if (slides.length) {
      var index = slides.findIndex(function (s) { return s.classList.contains("active"); });
      if (index < 0) index = 0;
      var show = function (n) {
        index = (n + slides.length) % slides.length;
        slides.forEach(function (s, i) { s.classList.toggle("active", i === index); });
      };
      show(index);
      var prev = document.querySelector("[data-slide-prev]");
      var next = document.querySelector("[data-slide-next]");
      if (prev) prev.addEventListener("click", function () { show(index - 1); });
      if (next) next.addEventListener("click", function () { show(index + 1); });
      var auto = setInterval(function () { show(index + 1); }, 7000);
      [prev, next].forEach(function (b) {
        if (b) b.addEventListener("click", function () { clearInterval(auto); });
      });
    }

    /* ---- menu category tabs ---- */
    var tabs = document.querySelectorAll(".menu-tabs button");
    var groups = document.querySelectorAll(".menu-group");
    if (tabs.length && groups.length) {
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          var target = tab.getAttribute("data-cat");
          tabs.forEach(function (t) { t.classList.toggle("active", t === tab); });
          groups.forEach(function (g) {
            var match = target === "all" || g.getAttribute("data-cat") === target;
            g.style.display = match ? "" : "none";
          });
        });
      });
    }

    /* ---- forms (secure honeypot + validation) ---- */
    document.querySelectorAll("form[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Anti-spam Honeypot Check
        var hp = form.querySelector('input[name="website_hp"]');
        if (hp && hp.value !== "") {
          // Silently discard bot submission
          return;
        }

        var msg = form.querySelector(".form-msg");
        var invalid = false;
        form.querySelectorAll("input[required], select[required], textarea[required]").forEach(function (f) {
          var isEmail = f.type === "email";
          var validEmail = !isEmail || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value.trim());
          if (!f.value.trim() || !validEmail) {
            invalid = true;
            f.style.borderColor = "#b4553f";
            f.setAttribute("aria-invalid", "true");
          } else {
            f.style.borderColor = "";
            f.removeAttribute("aria-invalid");
          }
        });

        if (!msg) return;
        if (invalid) {
          msg.style.color = "#b4553f";
          msg.textContent = "Please complete all required fields correctly.";
          return;
        }

        msg.style.color = "var(--ink)";
        msg.textContent = form.getAttribute("data-success") || "Thank you — we will be in touch shortly.";
        form.reset();
        setTimeout(function () {
          msg.textContent = "";
        }, 6000);
      });
    });
  });
})();
