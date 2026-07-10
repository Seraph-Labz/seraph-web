"use client";

import { useRef, useState } from "react";

import styles from "@/app/waitlist/page.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      inputRef.current?.focus();
      setShake(true);
      return;
    }
    setStatus("submitting");
    // No backend yet — wire this to a real endpoint (e.g. POST /api/waitlist) later.
    setTimeout(() => setStatus("success"), 400);
  }

  if (status === "success") {
    return (
      <div className={`${styles.success} ${styles.show}`} role="status" aria-live="polite">
        <h3>You&apos;re on the list.</h3>
        <p>
          We&apos;ll reach <span className={styles.email}>{email.trim()}</span> the moment Seraph opens
          its sight. Until then — keep watching the chains.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit} autoComplete="on" noValidate>
        <input
          ref={inputRef}
          type="email"
          name="email"
          placeholder="you@wherever.xyz"
          required
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={shake ? styles.shake : undefined}
          onAnimationEnd={() => setShake(false)}
        />
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Received" : "Join the List"}
        </button>
      </form>
      <div className={styles.formNote}>No spam · One launch email · Unsubscribe anytime</div>
    </div>
  );
}
