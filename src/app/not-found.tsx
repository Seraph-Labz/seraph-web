import Link from "next/link";

import { SigilDefs } from "@/components/brand/sigil-defs";
import { Starfield } from "@/components/starfield";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Starfield />
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <SigilDefs />

      <main className={styles.stage}>
        <div className={styles.eyebrow}>
          <span className={styles.pulse} />
          <span>404 · Off the map</span>
        </div>

        <div className={styles.sigil} aria-hidden="true">
          <svg viewBox="-80 -80 160 160" width="100%" height="100%">
            <use href="#sigil" />
          </svg>
        </div>

        <h1 className={styles.title}>
          Lost in the <em>void.</em>
        </h1>

        <p className={styles.pitch}>
          This page hasn&apos;t crossed our sight. Seraph monitors 8 protocols across 14 chains — but
          not, apparently, this address.
        </p>

        <Link className={styles.btn} href="/">
          <span>Return to Seraph</span>
          <svg width="12" height="12" aria-hidden="true">
            <use href="#i-arrow" />
          </svg>
        </Link>
      </main>
    </div>
  );
}
