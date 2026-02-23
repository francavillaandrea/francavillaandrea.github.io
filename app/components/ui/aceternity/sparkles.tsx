"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

export const Sparkles = ({
  id = "tsparticlesfullscreen",
  background = "transparent",
  minSize = 0.4,
  maxSize = 2,
  particleDensity = 100,
  className,
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width || window.innerWidth;
      h = rect.height || window.innerHeight;
      setCanvasSize({ w, h });
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > w) this.x = 0;
        if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        if (this.y < 0) this.y = h;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particleCount = Math.max(10, Math.floor((w * h) / particleDensity));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (w > 0 && h > 0) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        id={id}
        className="w-full h-full"
        style={{ background }}
      />
    </div>
  );
};
