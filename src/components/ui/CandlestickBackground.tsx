"use client";

import { useEffect, useRef } from "react";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  x: number;
}

export default function CandlestickBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let candles: Candle[] = [];
    const candleWidth = 8;
    const candleSpacing = 6;
    const step = candleWidth + candleSpacing;
    const scrollSpeed = 0.35; // px per frame
    let basePrice = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (basePrice === 0) {
        basePrice = canvas.height * 0.5;
      }
      
      // Re-populate candles if empty or window resized larger
      const requiredCount = Math.ceil(canvas.width / step) + 5;
      if (candles.length === 0) {
        let lastClose = basePrice;
        for (let i = 0; i < requiredCount; i++) {
          const x = i * step;
          const candle = generateCandle(lastClose, x, canvas.height);
          candles.push(candle);
          lastClose = candle.close;
        }
      } else if (candles.length < requiredCount) {
        let lastClose = candles[candles.length - 1].close;
        const startIdx = candles.length;
        for (let i = startIdx; i < requiredCount; i++) {
          const x = i * step;
          const candle = generateCandle(lastClose, x, canvas.height);
          candles.push(candle);
          lastClose = candle.close;
        }
      }
    };

    const generateCandle = (prevClose: number, x: number, height: number): Candle => {
      // Random walk logic with boundaries
      const volatility = 12;
      const change = (Math.random() - 0.5) * volatility;
      
      // Stay within 25% to 75% height bounds
      const minBound = height * 0.25;
      const maxBound = height * 0.75;
      let close = prevClose + change;
      if (close < minBound) close = minBound + Math.random() * 10;
      if (close > maxBound) close = maxBound - Math.random() * 10;

      const open = prevClose;
      const high = Math.max(open, close) + Math.random() * 8;
      const low = Math.min(open, close) - Math.random() * 8;
      const volume = Math.random() * 60 + 10; // volume bar height

      return { open, close, high, low, volume, x };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const height = canvas.height;
      const width = canvas.width;

      // 1. Draw subtle horizontal grid lines (5-6 lines)
      ctx.strokeStyle = "rgba(212, 175, 55, 0.03)";
      ctx.lineWidth = 1;
      const linesCount = 6;
      for (let i = 1; i <= linesCount; i++) {
        const y = (height / (linesCount + 1)) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Scroll and Render Candlesticks + Volume Bars
      const updatedCandles: Candle[] = [];
      let latestCandle: Candle | null = null;

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        c.x -= scrollSpeed;

        // Skip if fully off-screen left, otherwise draw and keep it
        if (c.x + candleWidth < 0) {
          continue;
        }

        updatedCandles.push(c);
        latestCandle = c; // The rightmost visible candle will end up here

        const isBullish = c.close >= c.open;
        const wickColor = isBullish ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)";
        const bodyColor = isBullish ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)";

        // Draw Wick
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x + candleWidth / 2, c.high);
        ctx.lineTo(c.x + candleWidth / 2, c.low);
        ctx.stroke();

        // Draw Body
        ctx.fillStyle = bodyColor;
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1;
        const bodyY = Math.min(c.open, c.close);
        const bodyH = Math.max(Math.abs(c.open - c.close), 1.5); // Ensure body is visible
        ctx.fillRect(c.x, bodyY, candleWidth, bodyH);
        ctx.strokeRect(c.x, bodyY, candleWidth, bodyH);

        // Draw Volume Bar (bottom 15% of canvas height)
        const volMaxHeight = height * 0.15;
        const volY = height - (c.volume / 100) * volMaxHeight;
        ctx.fillStyle = isBullish ? "rgba(16, 185, 129, 0.05)" : "rgba(239, 68, 68, 0.05)";
        ctx.fillRect(c.x, volY, candleWidth, height - volY);
      }

      // 3. Maintain continuity: If needed, push next random-walk candle to the end
      if (updatedCandles.length > 0) {
        const last = updatedCandles[updatedCandles.length - 1];
        if (last.x < width + step) {
          const nextX = last.x + step;
          const nextCandle = generateCandle(last.close, nextX, height);
          updatedCandles.push(nextCandle);
        }
      }
      candles = updatedCandles;

      // 4. Draw Price Tracker dashed line & gold percentage bubble
      if (latestCandle) {
        const currentPriceY = latestCandle.close;

        // Dashed line
        ctx.strokeStyle = "rgba(212, 175, 55, 0.18)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, currentPriceY);
        ctx.lineTo(width, currentPriceY);
        ctx.stroke();
        ctx.setLineDash([]); // Reset dashed line

        // Calculate gold percentage based on basePrice baseline
        // Subtract because canvas coordinates are inverted (0 is top)
        const pctChange = ((basePrice - currentPriceY) / basePrice) * 100;
        const sign = pctChange >= 0 ? "+" : "";
        const text = `${sign}${pctChange.toFixed(2)}%`;

        // Gold Bubble tag at right edge
        ctx.font = "11px monospace";
        ctx.textBaseline = "middle";
        const textWidth = ctx.measureText(text).width;
        const bubbleW = textWidth + 14;
        const bubbleH = 20;
        const bubbleX = width - bubbleW - 12;
        const bubbleY = Math.max(10, Math.min(height - bubbleH - 10, currentPriceY - bubbleH / 2));

        // Draw rounded rectangle background
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)"; // dark base for contrast
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 4);
        ctx.fill();
        ctx.stroke();

        // Draw text in gold color
        ctx.fillStyle = "#c8994a"; // brand gold/accent color
        ctx.fillText(text, bubbleX + 7, bubbleY + bubbleH / 2);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#021112]/20"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
