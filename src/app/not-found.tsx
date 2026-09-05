import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span className="pixel">404</span>
      <h1>A pixel out of place.</h1>
      <p>
        This page doesn’t seem to be here. Let’s get you back to the websites,
        ideas, and good stuff.
      </p>
      <Link href="/" className="button">
        Back to Codeylon <Arrow />
      </Link>
    </main>
  );
}
