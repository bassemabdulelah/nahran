/**
 * Progressive enhancement layer.
 *
 * - Content is fully visible and usable without JavaScript.
 * - GSAP drives small, purposeful reveals.
 * - Lenis adds inertial scrolling on capable desktop pointers only.
 * - Everything is skipped for prefers-reduced-motion.
 */
type Cleanup = () => void;
const cleanups: Cleanup[] = [];

function supportsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export async function initMotion(): Promise<void> {
  const root = document.documentElement;

  // No JS / reduced motion: leave content as-is, do nothing heavy.
  if (supportsReducedMotion()) {
    return;
  }

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isWide = window.matchMedia('(min-width: 1024px)').matches;

  try {
    const gsapMod = await import('gsap');
    const { default: gsap } = gsapMod as unknown as { default: typeof import('gsap').gsap };

    // Reveal elements as they enter the viewport.
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (targets.length) {
      root.classList.add('js-ready');
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            gsap.to(el, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              delay,
              overwrite: true,
            });
            observer.unobserve(el);
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      for (const el of targets) {
        gsap.set(el, { autoAlpha: 0, y: 18 });
        observer.observe(el);
      }
      cleanups.push(() => observer.disconnect());
    }

    // Hero entrance.
    const heroBits = document.querySelectorAll<HTMLElement>('[data-hero]');
    if (heroBits.length) {
      gsap.from(heroBits, {
        autoAlpha: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }

    // Smooth scrolling (desktop, capable devices only).
    if (isFinePointer && isWide) {
      const { default: Lenis } = await import('lenis');
      const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        // Never hijack touch scrolling (iOS Safari behaves best natively).
        syncTouch: false,
      });
      let raf = 0;
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      // Keep in-page anchors working.
      const onAnchorClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, { offset: -80 });
        }
      };
      document.addEventListener('click', onAnchorClick);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        document.removeEventListener('click', onAnchorClick);
        lenis.destroy();
      });
    }
  } catch {
    // If anything fails, make sure content is still visible.
    root.classList.remove('js-ready');
  }
}

export function teardownMotion(): void {
  for (const fn of cleanups.splice(0)) fn();
}
