import Image from "next/image";
import Link from "next/link";

import { PROTOCOL_LOGOS } from "@public";

import { SigilDefs } from "@/components/brand/sigil-defs";
import { Starfield } from "@/components/starfield";
import { WitnessCounter } from "@/components/witness-counter";

import styles from "./page.module.css";

const PROTOCOLS = [
  { src: PROTOCOL_LOGOS.layerzero, label: "LayerZero" },
  { src: PROTOCOL_LOGOS.wormhole, label: "Wormhole" },
  { src: PROTOCOL_LOGOS.across, label: "Across" },
  { src: PROTOCOL_LOGOS.hop, label: "Hop" },
  { src: PROTOCOL_LOGOS.cctp, label: "Circle CCTP" },
  { src: PROTOCOL_LOGOS.axelar, label: "Axelar" },
  { src: PROTOCOL_LOGOS.stargate, label: "Stargate" },
  { src: PROTOCOL_LOGOS.connext, label: "Connext" },
] as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <Starfield />
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <SigilDefs />

      <div className={styles.watermark} aria-hidden="true">
        <svg viewBox="-80 -80 160 160">
          <use href="#sigil" />
        </svg>
      </div>

      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <svg width="26" height="26" viewBox="-80 -80 160 160" aria-hidden="true">
            <use href="#sigil" />
          </svg>
          <span className={styles.mark}>Seraph</span>
        </Link>
        <nav className={styles.topNav}>
          <Link href="/constellation">Constellation</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/waitlist" className={styles.cta}>
            <span>Join waitlist</span>
            <svg width="10" height="10" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </Link>
        </nav>
      </header>

      <main className={styles.stage}>
        <div className={`${styles.eyebrow} ${styles.fadeIn}`} aria-label="Status">
          <span className={styles.pulse} />
          <span>
            Building · Arriving <em>Summer MMXXVI</em>
          </span>
        </div>

        <div className={`${styles.heroSigil} ${styles.fadeIn} ${styles.d1}`} aria-hidden="true">
          <svg viewBox="-80 -80 160 160" width="100%" height="100%">
            <use href="#sigil" />
          </svg>
        </div>

        <h1 className={`${styles.wordmark} ${styles.fadeIn} ${styles.d2}`}>
          Ser<em>aph</em>
        </h1>

        <div className={`${styles.taglineLine} ${styles.fadeIn} ${styles.d3}`}>
          Every chain. Every bridge.
          <br />
          <span className={styles.accent}>One truth.</span>
        </div>

        <p className={`${styles.pitch} ${styles.fadeIn} ${styles.d4}`}>
          Seraph is a <strong>cross-chain transaction explorer</strong> for the multichain world. Search
          any hash. Read the whole route — source, bridge, destination — as one journey. We&apos;re
          building it now. It arrives this summer.
        </p>

        <div className={`${styles.ctaRow} ${styles.fadeIn} ${styles.d5}`}>
          <Link className={`${styles.btn} ${styles.primary}`} href="/waitlist">
            <span>Join the witness list</span>
            <svg width="12" height="12" className={styles.arrow} aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </Link>
          <Link className={styles.btn} href="/manifesto">
            Read the manifesto
          </Link>
        </div>

        <div className={`${styles.witnessChip} ${styles.fadeIn} ${styles.d6}`} aria-live="polite">
          <span className={styles.liveDot} />
          <span>
            <WitnessCounter /> already on the list · Building in the open
          </span>
        </div>

        <div className={`${styles.coverage} ${styles.fadeIn} ${styles.d7}`}>
          <div className={styles.lead}>— Watching in preparation —</div>
          <div className={styles.protoStrip}>
            {PROTOCOLS.map((p) => (
              <div className={styles.protoCell} key={p.label}>
                <Image src={p.src} alt={p.label} width={42} height={42} />
                <span className={styles.tip}>{p.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.fine}>
            Eight bridges<span className={styles.sep}>·</span>Fourteen chains
            <span className={styles.sep}>·</span>One sky
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>© MMXXVI Seraph Labs · Seraphh.xyz</div>
          <div className={styles.flinks}>
            <Link href="/waitlist">Waitlist</Link>
            <Link href="/constellation">Constellation</Link>
            <Link href="/manifesto">Manifesto</Link>
            <a href="mailto:hello@seraphh.xyz">Contact</a>
          </div>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/Seraph-Labz" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://x.com/Seraph_xyz" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </footer>
    </div>
  );
}
