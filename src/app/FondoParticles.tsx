"use client";
import { useEffect, useRef } from "react";

export default function FondoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof canvas.getContext !== "function") return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Configuración
    const PARTICLE_COUNT = 60;
    const PARTICLE_RADIUS = 3;
    const LINE_DISTANCE = 120;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    let mouse = { x: width / 2, y: height / 2 };

    // Crear partículas
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      });
    }

    // Animación
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Fondo transparente: no fillRect

      // Dibujar partículas
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = "#0891b2"; // cyan-900
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Dibujar líneas
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#0891b2";
            ctx.globalAlpha = 0.18;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Movimiento
      for (let p of particles) {
        // Seguir mouse ligeramente
        p.x += p.vx + (mouse.x - p.x) * 0.0005;
        p.y += p.vy + (mouse.y - p.y) * 0.0005;
        // Rebote
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      requestAnimationFrame(animate);
    }

    animate();

    // Mouse
    function handleMouse(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
