// Animasi ringan, JavaScript native. Mati otomatis jika "reduce motion" aktif
// (class `anim` dipasang oleh skrip inline di Layout.astro).
const root = document.documentElement;

function spotlight() {
  let frame = 0;
  addEventListener(
    "pointermove",
    (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", e.clientX + "px");
        root.style.setProperty("--my", e.clientY + "px");
        frame = 0;
      });
    },
    { passive: true },
  );
}

function revealOnScroll() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    const siblings = [
      ...(el.parentElement?.querySelectorAll(":scope > [data-reveal]") ?? []),
    ];
    el.style.transitionDelay = siblings.indexOf(el) * 80 + "ms";
    io.observe(el);
  });
}

function typewriter() {
  const el = document.getElementById("typed");
  if (!el?.dataset.roles) return;
  const roles: string[] = JSON.parse(el.dataset.roles);
  let r = 0;
  let i = roles[0].length;
  let deleting = true;
  el.classList.add("caret");

  const tick = () => {
    const word = roles[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = deleting ? 35 : 70;
    if (!deleting && i === word.length) {
      deleting = true;
      wait = 1800;
    } else if (deleting && i === 0) {
      deleting = false;
      r = (r + 1) % roles.length;
      wait = 350;
    }
    setTimeout(tick, wait);
  };
  setTimeout(tick, 2200);
}

if (root.classList.contains("anim")) {
  spotlight();
  revealOnScroll();
  typewriter();
}
