import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ConceptPreview,
  ConceptContinuation,
} from "@/components/concept-preview";
import { Arrow, PixelIcon } from "@/components/icons";
import { business, concepts, getConcept } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return concepts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return { title: "Concept not found", robots: { index: false } };
  const title = `${concept.name} — ${concept.category} concept`;
  const description = `${concept.summary} An original Codeylon design exploration, not commissioned client work.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${concept.slug}/` },
    openGraph: {
      title: `${title} | Codeylon`,
      description,
      url: `/work/${concept.slug}/`,
      images: [
        { url: concept.image, width: 1200, height: 800, alt: concept.imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Codeylon`,
      description,
      images: [concept.image],
    },
  };
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();
  const next = getConcept(concept.next)!;
  return (
    <main className="project-main" id="main-content">
      <div className="container">
        <Link className="project-back" href="/#work">
          <Arrow /> All design examples
        </Link>
        <section className="project-heading" aria-labelledby="project-title">
          <div>
            <span className="concept-label">
              Concept project · Design exploration
            </span>
            <h1 id="project-title">
              {concept.name}
              <span className="brand-dot">.</span>
            </h1>
            <p className="project-category">{concept.category}</p>
          </div>
          <div className="project-intro">
            <p>{concept.summary}</p>
            <p>
              A fictional brand, created to explore a possible design direction.
              The name, content, and imagery are illustrative. This is not
              commissioned client work or an operating business.
            </p>
          </div>
        </section>
        <div className={`project-showcase showcase-${concept.slug}`}>
          <ConceptPreview slug={concept.slug} expanded />
          <ConceptContinuation slug={concept.slug} />
        </div>
        <section className="project-story section-space">
          <div>
            <h2>
              A website with
              <br />
              <span className="pixel">a clear purpose.</span>
            </h2>
            <dl className="project-spec">
              <dt>Designed for</dt>
              <dd>{concept.category}</dd>
              <dt>Website structure</dt>
              <dd>{concept.pages.join(" · ")}</dd>
              <dt>Project status</dt>
              <dd>Self-initiated concept</dd>
            </dl>
          </div>
          <div>
            <h2>{concept.headline}</h2>
            <p>{concept.idea}</p>
            <h3>Who it is for</h3>
            <p>{concept.audience}</p>
            <h3>How the experience works</h3>
            <p>{concept.structure}</p>
            <h3>The thinking behind the details</h3>
            <ul className="project-decisions">
              {concept.decisions.map((decision) => (
                <li key={decision}>
                  <PixelIcon kind="check" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
            {slug === "olio" && (
              <div className="project-sample">
                <h3>A taste of the menu</h3>
                <p>
                  Example content showing how a menu can stay readable, useful,
                  and easy to browse.
                </p>
                <ul className="sample-menu">
                  <li>
                    <strong>To start · Burrata & tomatoes</strong>
                    <span>
                      Ripe tomatoes, fresh basil, extra virgin olive oil.
                    </span>
                  </li>
                  <li>
                    <strong>To share · Roasted aubergine</strong>
                    <span>Lemon yoghurt, pomegranate, toasted flatbread.</span>
                  </li>
                  <li>
                    <strong>Something sweet · Olive oil cake</strong>
                    <span>Seasonal fruit and a spoonful of crème fraîche.</span>
                  </li>
                </ul>
              </div>
            )}
            {slug === "forma" && (
              <div className="project-sample">
                <h3>The courtyard house</h3>
                <p>
                  A fictional residential design study: a home arranged around
                  light, shade, and a quiet outdoor room. The project page pairs
                  an introduction with material details and large images, giving
                  the reader context as well as atmosphere.
                </p>
              </div>
            )}
            {slug === "still" && (
              <div className="project-sample">
                <h3>A considered daily ritual</h3>
                <p>
                  Sample collection copy for a fictional range. Product details
                  for an actual launch would be checked against the brand’s
                  verified specifications.
                </p>
                <ul className="sample-menu">
                  <li>
                    <strong>The daily cleanser</strong>
                    <span>
                      A simple first step in the collection’s morning and
                      evening ritual.
                    </span>
                  </li>
                  <li>
                    <strong>The everyday moisturiser</strong>
                    <span>
                      A companion to the cleanser, presented with clear usage
                      information.
                    </span>
                  </li>
                  <li>
                    <strong>The cleansing bar</strong>
                    <span>
                      A solid format with its own product details and enquiry
                      link.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
        <Link className="next-project" href={`/work/${next.slug}/`}>
          <div>
            <span>Next design exploration</span>
            <h2>
              {next.name}
              <span className="brand-dot">.</span>
            </h2>
          </div>
          <Arrow diagonal />
        </Link>
      </div>
      <section className="project-contact">
        <div className="container">
          <div>
            <h2>Your business has its own character.</h2>
            <p>Let’s create a website that brings it through.</p>
          </div>
          <a
            className="button button-navy"
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Discuss your website <Arrow diagonal />
            <span className="sr-only"> on Instagram (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
