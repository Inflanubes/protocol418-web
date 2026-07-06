// hooks/useTilt.ts
'use client';

import { useCallback, useRef } from 'react';

export function useTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== 'mouse') return;
      if (document.documentElement.dataset.motion === 'off') return;
      const el = ref.current;
      if (!el) return;
      cancelAnimationFrame(frame.current);
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      frame.current = requestAnimationFrame(() => {
        // No perspective() prefix here — the ancestor .scene already
        // establishes a single 1600px perspective (BreachCard.module.css)
        // shared with the flip transform on .card. Adding a second,
        // shallower perspective(900px) on this wrapper would compose two
        // different depths in the same 3D context (this element has
        // transform-style: preserve-3d so .scene's perspective still
        // reaches the .card grandchild), warping the flip. Rotate-only
        // keeps tilt and flip in one consistent perspective.
        el.style.transform = `rotateY(${px * maxDeg}deg) rotateX(${-py * maxDeg}deg)`;
      });
    },
    [maxDeg],
  );

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
