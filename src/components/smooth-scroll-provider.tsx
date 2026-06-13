"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps): React.ReactElement {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      duration: 1.15,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
