import type { Metadata } from "next";
import Link from "next/link";

import { SigilDefs } from "@/components/brand/sigil-defs";
import { Starfield } from "@/components/starfield";
import { WaitlistForm } from "@/components/waitlist-form";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Waitlist",
  description: "Seraph is coming. Every chain. Every bridge. One truth. Join the witness list.",
};

export default function WaitlistPage() {
  return (
    <div className={styles.page}>
      <Starfield />
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <SigilDefs />

      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <svg width="28" height="28" viewBox="-80 -80 160 160" aria-hidden="true">
            <use href="#sigil" />
          </svg>
          <span className={styles.wordmark}>Seraph</span>
        </Link>
        <span className={styles.brandSub}>Seraphh.xyz</span>
      </header>

      <main className={styles.main}>
        <div className={styles.sigilStage} aria-hidden="true">
          <svg viewBox="-80 -80 160 160" width="100%" height="100%">
            <use href="#sigil" />
          </svg>
        </div>

        <div className={styles.eyebrow}>
          <span>Arriving</span>
          <span className={styles.dot} />
          <span>Summer 2026</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.word}>Every</span>
          <span className={`${styles.word} ${styles.accent}`}>chain.</span>
          <span className={styles.word}>Every</span>
          <span className={`${styles.word} ${styles.accent}`}>bridge.</span>
          <span className={styles.word}>One</span>
          <span className={`${styles.word} ${styles.accent}`}>truth.</span>
        </h1>

        <p className={styles.sub}>
          Seraph is the cross-chain transaction explorer that follows a signal from source to
          destination across eight bridge protocols and fourteen chains. We&apos;re opening the witness
          list now. Leave your email and be among the first to illuminate.
        </p>

        <WaitlistForm />

        <div className={styles.timeline} aria-label="Launch phases">
          <div className={`${styles.step} ${styles.active}`}>
            <span className={styles.dotM} />
            Witness List
          </div>
          <div className={styles.bar} />
          <div className={styles.step}>
            <span className={styles.dotM} />
            Private Beta
          </div>
          <div className={styles.bar} />
          <div className={styles.step}>
            <span className={styles.dotM} />
            Public Launch
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>© 2026 Seraph Labs</div>
        <div className={styles.flinks}>
          <a href="https://x.com/Seraph_xyz" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="https://github.com/Seraph-Labz" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:hello@seraphh.xyz">Contact</a>
        </div>
      </footer>
    </div>
  );
}
