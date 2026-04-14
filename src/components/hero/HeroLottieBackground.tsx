"use client";

import { useEffect, useRef, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export function HeroLottieBackground({ src = "/models/Download.json" }: { src?: string }) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const el = containerRef.current;
        if (!el) return;
        const res = await fetch(src, { cache: "force-cache" });
        const text = await res.text();
        if (!mounted) return;
        if (!text || text.trim().length < 10) {
          setOk(false);
          return;
        }

        const json = JSON.parse(text);
        const lottie = (await import("lottie-web")).default;

        animRef.current = lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: json,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          },
        });
        setOk(true);
      } catch {
        setOk(false);
      }
    }

    if (!reducedMotion) load();
    return () => {
      mounted = false;
      try {
        animRef.current?.destroy?.();
      } catch {
        // ignore
      }
      animRef.current = null;
    };
  }, [src, reducedMotion]);

  if (reducedMotion || !ok) return null;

  return (
    <div className="absolute inset-0 z-0">
      <div ref={containerRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
    </div>
  );
}

