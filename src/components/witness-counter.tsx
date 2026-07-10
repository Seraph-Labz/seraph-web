"use client";

import { useEffect, useState } from "react";

const BASE_COUNT = 164;
const INCREMENT = 3;
const INCREMENT_INTERVAL_MS = 24 * 60 * 60 * 1000;
// Reference point growth is calculated from — keep stable once deployed.
const EPOCH_MS = Date.UTC(2026, 6, 10);

function computeCount() {
  const periodsElapsed = Math.max(0, Math.floor((Date.now() - EPOCH_MS) / INCREMENT_INTERVAL_MS));
  return BASE_COUNT + periodsElapsed * INCREMENT;
}

export function WitnessCounter() {
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    setCount(computeCount());
    const id = setInterval(() => setCount(computeCount()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return <strong>{count.toLocaleString()}</strong>;
}
