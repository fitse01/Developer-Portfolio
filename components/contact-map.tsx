"use client";

import { useEffect, useRef } from "react";

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would use a library like Leaflet, Google Maps, or Mapbox

    if (!mapRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = mapRef.current.clientWidth;
    canvas.height = mapRef.current.clientHeight;
    mapRef.current.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw a placeholder map
    ctx.fillStyle = "#e2e8f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some map features
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

    // Draw roads
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 3;

    // Horizontal roads
    for (let i = 1; i < 5; i++) {
      const y = (canvas.height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Vertical roads
    for (let i = 1; i < 5; i++) {
      const x = (canvas.width / 5) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw location marker
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw pin
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(centerX, centerY - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    // Draw pin point
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - 5);
    ctx.lineTo(centerX, centerY + 15);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ef4444";
    ctx.stroke();

    // Draw pin shadow
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 15, 8, 4, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fill();

    // Add text
    ctx.font = "14px Arial";
    ctx.fillStyle = "#1e293b";
    ctx.textAlign = "center";
    ctx.fillText("Addis Ababa, Ethiopia", centerX, centerY + 35);

    return () => {
      if (mapRef.current && canvas.parentNode === mapRef.current) {
        mapRef.current.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full"></div>;
}
