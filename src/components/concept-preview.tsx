import Image from "next/image";
import type { ConceptSlug } from "@/lib/content";

export function ConceptPreview({
  slug,
  expanded = false,
}: {
  slug: ConceptSlug;
  expanded?: boolean;
}) {
  return (
    <div
      className={`concept-preview preview-${slug}${expanded ? " preview-expanded" : ""}`}
    >
      {slug === "olio" && (
        <>
          <div className="preview-nav">
            <span className="olio-wordmark">olio</span>
            <span>Good food. Good company.</span>
          </div>
          <div className="olio-intro">
            <span>
              A little sunshine.
              <br />
              <em>A seat at the table.</em>
            </span>
            <p>Mediterranean food, made for sharing.</p>
          </div>
          <div className="preview-photo">
            <Image
              src="/images/olio.webp"
              fill
              sizes={
                expanded
                  ? "(max-width: 700px) 90vw, 1000px"
                  : "(max-width: 700px) 90vw, 450px"
              }
              alt={
                expanded
                  ? "Burrata, fresh tomatoes, and basil on a sunlit table."
                  : ""
              }
            />
          </div>
          <div className="preview-bottom">
            <span>Come hungry. Stay a while.</span>
            <span>FOOD · FRIENDS · OLIO</span>
          </div>
        </>
      )}
      {slug === "forma" && (
        <>
          <div className="preview-nav">
            <span className="forma-wordmark">FORMA</span>
            <span>Architecture & interiors</span>
          </div>
          <div className="forma-intro">
            <span>
              Considered spaces.
              <br />
              <em>Everyday living.</em>
            </span>
            <span className="preview-small-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="preview-photo">
            <Image
              src="/images/forma.webp"
              fill
              sizes={
                expanded
                  ? "(max-width: 700px) 90vw, 1000px"
                  : "(max-width: 700px) 90vw, 450px"
              }
              alt={
                expanded
                  ? "A sandstone courtyard with sculptural architecture and an olive tree."
                  : ""
              }
            />
          </div>
          <div className="preview-bottom">
            <span>THE COURTYARD HOUSE</span>
            <span>A design study</span>
          </div>
        </>
      )}
      {slug === "still" && (
        <>
          <div className="preview-nav">
            <span className="still-wordmark">still</span>
            <span>Everyday, considered.</span>
          </div>
          <div className="still-intro">
            <span>
              Less noise.
              <br />
              <em>More care.</em>
            </span>
            <p>A little room for your daily ritual.</p>
          </div>
          <div className="preview-photo">
            <Image
              src="/images/still.webp"
              fill
              sizes={
                expanded
                  ? "(max-width: 700px) 90vw, 1000px"
                  : "(max-width: 700px) 90vw, 450px"
              }
              alt={
                expanded
                  ? "Cream skincare bottles and a sage soap bar on a green plinth."
                  : ""
              }
            />
          </div>
          <div className="preview-bottom">
            <span>MEET YOUR DAILY RITUAL</span>
            <span>Simply, still.</span>
          </div>
        </>
      )}
    </div>
  );
}

export function ConceptContinuation({ slug }: { slug: ConceptSlug }) {
  if (slug === "olio")
    return (
      <div className="concept-extension extension-olio">
        <section className="olio-table">
          <div>
            <h2>
              Good things happen
              <br />
              <em>around a table.</em>
            </h2>
            <p>
              A few good ingredients. Something to share. The kind of lunch that
              turns into a long afternoon.
            </p>
            <p>
              Our food takes its cue from the Mediterranean: generous,
              colourful, and happiest in good company.
            </p>
          </div>
          <span className="olio-illustration" aria-hidden="true">
            <svg viewBox="0 0 160 160" fill="none">
              <ellipse
                cx="80"
                cy="83"
                rx="61"
                ry="56"
                stroke="currentColor"
                strokeWidth="2"
              />
              <ellipse
                cx="80"
                cy="83"
                rx="49"
                ry="44"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M27 6v35m-6-35v27m12-27v27M21 28q6 16 12 0m-6 13v18M130 7q-11 15-7 34h8V7zm0 34v20"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M58 73q8-14 20-4t-3 25q-12 4-19-6zm27 18q15-16 24-5t-9 22q-15 4-18-7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m85 65 12-16m-6 11q-3-12 10-13-1 12-10 13zm-29 44 10 7m-7-5q-3-10 9-6-1 9-9 6z"
                fill="currentColor"
              />
            </svg>
          </span>
        </section>
        <section className="olio-menu">
          <div className="concept-section-title">
            <h2>On the table.</h2>
            <span>A LITTLE TASTE OF OLIO</span>
          </div>
          <div className="olio-menu-grid">
            <article>
              <span>To start</span>
              <h3>Burrata & tomatoes</h3>
              <p>
                Ripe tomatoes, fresh basil,
                <br />
                extra virgin olive oil.
              </p>
            </article>
            <article>
              <span>To share</span>
              <h3>Roasted aubergine</h3>
              <p>
                Lemon yoghurt, pomegranate,
                <br />
                toasted flatbread.
              </p>
            </article>
            <article>
              <span>Something sweet</span>
              <h3>Olive oil cake</h3>
              <p>
                Seasonal fruit and a spoonful
                <br />
                of crème fraîche.
              </p>
            </article>
          </div>
        </section>
        <div className="olio-closing">
          <span className="olio-wordmark">olio</span>
          <p>
            Pull up a chair.
            <br />
            There’s always room for good company.
          </p>
          <span>FOOD, FRIENDS & A LITTLE SUNSHINE.</span>
        </div>
      </div>
    );
  if (slug === "forma")
    return (
      <div className="concept-extension extension-forma">
        <section className="forma-project">
          <div className="forma-project-heading">
            <h2>The courtyard house</h2>
            <span>RESIDENTIAL · A DESIGN STUDY</span>
          </div>
          <div className="forma-project-grid">
            <div className="forma-detail-photo">
              <Image
                src="/images/forma.webp"
                fill
                sizes="(max-width: 760px) 80vw, 480px"
                alt="A closer view of warm sandstone walls and shadow in the concept courtyard."
              />
            </div>
            <div>
              <h3>
                Light as a<br />
                building material.
              </h3>
              <p>
                A home arranged around an open courtyard. Solid walls offer
                shelter; carefully placed openings bring the day inside.
              </p>
              <p>
                The palette is simple. Stone, shade, and the soft movement of an
                olive tree.
              </p>
              <dl>
                <dt>Material</dt>
                <dd>Pale sandstone</dd>
                <dt>Spatial idea</dt>
                <dd>Life around a courtyard</dd>
                <dt>Landscape</dt>
                <dd>A single olive tree</dd>
              </dl>
            </div>
          </div>
        </section>
        <section className="forma-approach">
          <h2>
            Spaces shaped
            <br />
            by the way you live.
          </h2>
          <div>
            <p>
              We start with everyday life. Where the light falls. How a room
              connects to the next. The places you return to at the end of the
              day.
            </p>
            <p>Architecture, with room to breathe.</p>
          </div>
        </section>
        <div className="forma-closing">
          <span>FORMA</span>
          <span>THOUGHTFUL BY DESIGN.</span>
        </div>
      </div>
    );
  return (
    <div className="concept-extension extension-still">
      <section className="still-collection">
        <div className="concept-section-title">
          <h2>Your everyday essentials.</h2>
          <p>
            A small collection.
            <br />A simple place to start.
          </p>
        </div>
        <div className="still-product-grid">
          <article>
            <div className="still-product-image product-cleanser">
              <Image
                src="/images/still.webp"
                fill
                sizes="(max-width: 760px) 80vw, 440px"
                alt="Cream cosmetic bottle in the fictional Still collection."
              />
            </div>
            <span>THE MORNING & EVENING RITUAL</span>
            <h3>The daily cleanser</h3>
            <p>A fresh start. The first step in a little time for yourself.</p>
          </article>
          <article>
            <div className="still-product-image product-moisturiser">
              <Image
                src="/images/still.webp"
                fill
                sizes="(max-width: 760px) 80vw, 440px"
                alt="A second view of the fictional Still collection on a sage plinth."
              />
            </div>
            <span>A MOMENT OF EVERYDAY CARE</span>
            <h3>The everyday moisturiser</h3>
            <p>A companion for your daily ritual. Simply make it yours.</p>
          </article>
        </div>
      </section>
      <section className="still-ritual">
        <h2>
          A little less.
          <br />
          <em>A little better considered.</em>
        </h2>
        <p>
          There is something good about keeping things simple.
          <br />A familiar ritual. A quiet moment. A place to begin again.
        </p>
      </section>
      <div className="still-closing">
        <span className="still-wordmark">still</span>
        <span>FOR THE SMALL, EVERYDAY MOMENTS.</span>
      </div>
    </div>
  );
}
