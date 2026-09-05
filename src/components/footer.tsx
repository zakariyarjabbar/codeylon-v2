import Link from "next/link";
import { Brand } from "./brand";
import { Arrow } from "./icons";
import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="brand-link" aria-label="Codeylon home">
            <Brand />
          </Link>
          <p>
            Good design. A clear purpose.
            <br />A website that feels like you.
          </p>
          <a href={business.instagram} target="_blank" rel="noreferrer">
            Instagram <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Codeylon</span>
          <nav aria-label="Footer navigation">
            <Link href="/#work">Design examples</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#faq">FAQs</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <a href="#top" className="back-top">
            Back to top <Arrow />
          </a>
        </div>
      </div>
    </footer>
  );
}
