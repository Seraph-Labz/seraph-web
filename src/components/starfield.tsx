"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  vy: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let raf = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.width = window.innerWidth * dpr;
      h = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1,
        r: Math.random() * 1 + 0.2,
        tw: Math.random() * Math.PI * 2,
        vy: (0.03 + Math.random() * 0.07) * dpr,
      }));
    }

    let t0 = 0;
    function draw() {
      t0 += 0.012;
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y += s.vy;
        if (s.y > h + 4) {
          s.y = -4;
          s.x = Math.random() * w;
        }
        const a = 0.25 + 0.6 * (0.5 + 0.5 * Math.sin(t0 * (1 + s.z * 2) + s.tw));
        const rr = s.r * dpr * (0.6 + s.z * 0.7);
        const g = ctx!.createRadialGradient(s.x, s.y, 0, s.x, s.y, rr * 4);
        g.addColorStop(0, `rgba(255,220,230,${a})`);
        g.addColorStop(0.4, `rgba(220,38,38,${a * 0.25})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, rr * 4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(255,255,255,${Math.min(1, a + 0.1)})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, rr * 0.75, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0 }} />;
}
