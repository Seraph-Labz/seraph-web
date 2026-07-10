"use client";

import { useEffect, useState } from "react";

export function WitnessCounter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() < 0.55) {
        setCount((n) => n + 1);
      }
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return <strong>{count.toLocaleString()}</strong>;
}
