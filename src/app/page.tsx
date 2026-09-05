import Link from "next/link";
import { Arrow, PixelIcon } from "@/components/icons";
import { HeroArtwork } from "@/components/hero-artwork";
import { ConceptPreview } from "@/components/concept-preview";
import { business, concepts, faqs, process, services } from "@/lib/content";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Good business.
              <br />
              <span className="pixel">Great website.</span>
            </h1>
            <p className="hero-description">
              You bring the business. We bring it to the web.
              <br className="desktop-break" /> Distinctive, thoughtful websites
              that show what you do
              <br className="wide-break" /> and make it easy to get in touch.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Discuss your website <Arrow diagonal />
                <span className="sr-only">
                  {" "}
                  on Instagram (opens in a new tab)
                </span>
              </a>
              <a className="text-link" href="#work">
                Explore our designs <Arrow />
              </a>
            </div>
            <div className="hero-note">
              <span className="mini-pixels" aria-hidden="true" />
              <span>Made with intention. Built around you.</span>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <div className="hero-bottom container">
          <span>WEB DESIGN WITH A POINT OF VIEW</span>
          <a href="#work">
            A little scroll. A lot of possibility.
            <Arrow />
          </a>
        </div>
      </section>

      <div className="brand-strip" aria-hidden="true">
        <div>
          <span>GOOD DESIGN</span>
          <PixelIcon />
          <span>CLEAR PURPOSE</span>
          <PixelIcon />
          <span>YOUR CHARACTER</span>
          <PixelIcon />
          <span>EVERY SCREEN</span>
          <PixelIcon />
        </div>
      </div>

      <section className="work-section section-space container" id="work">
        <div className="section-heading">
          <h2>
            A few possibilities.
            <br />
            <span className="pixel">A lot of personality.</span>
          </h2>
          <p>
            Different businesses deserve different websites.
            <br />
            Three original concepts. Three distinct directions.
          </p>
        </div>
        <div className="concept-grid">
          {concepts.map((concept) => (
            <article
              className={`concept-card concept-card-${concept.slug}`}
              key={concept.slug}
            >
              <Link
                href={`/work/${concept.slug}/`}
                className="concept-image-link"
                aria-label={`Explore ${concept.name}, a ${concept.category.toLowerCase()} concept project`}
              >
                <div className="concept-browser-bar">
                  <span className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>DESIGN EXPLORATION</span>
                  <Arrow diagonal />
                </div>
                <ConceptPreview slug={concept.slug} />
              </Link>
              <div className="concept-meta">
                <span className="concept-label">Concept project</span>
                <span>{concept.category}</span>
              </div>
              <div className="concept-name">
                <h3>
                  <Link href={`/work/${concept.slug}/`}>{concept.name}</Link>
                </h3>
                <Link
                  className="icon-link"
                  href={`/work/${concept.slug}/`}
                  aria-label={`View ${concept.name} concept`}
                >
                  <Arrow diagonal />
                </Link>
              </div>
              <p>{concept.summary}</p>
            </article>
          ))}
        </div>
        <p className="work-disclosure">
          <span aria-hidden="true">*</span> These are self-initiated design
          explorations, not commissioned client work.
        </p>
      </section>

      <section className="services-section section-space" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>
              Your next chapter.
              <br />
              <span className="pixel">Our kind of project.</span>
            </h2>
            <p>
              A first website, a fresh start, or a better way to tell your
              story. We build places for people to learn, explore, and connect.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <PixelIcon kind={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="services-bottom">
            <p>Something in mind? Let’s see how it could take shape.</p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Tell us about it <Arrow diagonal />
              <span className="sr-only">
                {" "}
                on Instagram (opens in a new tab)
              </span>
            </a>
          </div>
        </div>
        <div className="pixel-edge" aria-hidden="true" />
      </section>

      <section className="purpose-section section-space container">
        <div className="purpose-title">
          <h2>
            Looks matter.
            <br />
            <span className="pixel">So does the rest.</span>
          </h2>
          <p>
            A good website has a job to do. Every decision should help your
            visitors find their way.
          </p>
          <div className="purpose-art" aria-hidden="true">
            <PixelIcon kind="window" />
            <div className="purpose-arrow">
              <Arrow />
            </div>
            <PixelIcon kind="check" />
          </div>
        </div>
        <div className="purpose-list">
          <article>
            <span className="pixel">01</span>
            <div>
              <h3>A clear story.</h3>
              <p>
                Thoughtful page structure and useful copy help people understand
                what you offer, without piecing it together themselves.
              </p>
            </div>
          </article>
          <article>
            <span className="pixel">02</span>
            <div>
              <h3>A good fit. On every screen.</h3>
              <p>
                We consider the whole experience: readable text, comfortable
                navigation, and layouts that adapt from phones to desktops.
              </p>
            </div>
          </article>
          <article>
            <span className="pixel">03</span>
            <div>
              <h3>An obvious next step.</h3>
              <p>
                Contact details and clear calls to action belong where people
                need them, so interest has somewhere to go.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="process-section section-space" id="process">
        <div className="container">
          <div className="section-heading">
            <h2>
              Good work starts
              <br />
              <span className="pixel">with a conversation.</span>
            </h2>
            <p>
              No complicated first step. We’ll work out what your website needs,
              together.
            </p>
          </div>
          <ol className="process-grid">
            {process.map((step, index) => (
              <li key={step.title}>
                <div className="step-marker">
                  <span className="pixel">0{index + 1}</span>
                  {index < process.length - 1 && <Arrow />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section section-space container" id="about">
        <div className="about-stamp">
          <span className="pixel">
            Small details.
            <br />
            Big character.
          </span>
          <div className="stamp-logo">
            <svg
              viewBox="0 0 120 90"
              fill="currentColor"
              shapeRendering="crispEdges"
              aria-hidden="true"
            >
              <path d="M0 0h12v6h18v6h24v6H30v6H12v6H0zM60 15h12v6h18v6h30v6H90v6H72v6H60zM0 30h12v6h18v6h24v6H30v6H12v6H0zM60 45h12v6h18v6h30v6H90v6H72v6H60zM0 60h12v6h18v6h24v6H30v6H12v6H0z" />
            </svg>
          </div>
          <span>THE CODEYLON APPROACH</span>
        </div>
        <div className="about-copy">
          <h2>
            A little about <span className="pixel">Codeylon.</span>
          </h2>
          <p className="about-lead">
            We care about the details because they add up to how your business
            feels online.
          </p>
          <p>
            Codeylon is a web design agency creating distinctive, practical
            websites for businesses, independent professionals, and creators.
            Our focus is simple: understand what you do, give it a considered
            visual home, and make that home easy to use.
          </p>
          <p>
            We believe a website can have plenty of personality and still get
            straight to the point. This one is a good place to start.
          </p>
          <a className="text-link" href="#contact">
            Let’s make something that fits <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="faq-section section-space" id="faq">
        <div className="container faq-grid">
          <div>
            <h2>
              A few good
              <br />
              <span className="pixel">questions.</span>
            </h2>
            <p>Have something else in mind?</p>
            <a
              className="text-link"
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Ask us on Instagram <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} name="faq">
                <summary>
                  {faq.question}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <h2>
              Let’s make
              <br />
              <span className="pixel">your next move.</span>
            </h2>
            <p>
              Tell us about your business and the website you have in mind.
              <br className="desktop-break" /> We’ll talk through the details
              and put together a quote
              <br className="wide-break" /> based on what you need.
            </p>
            <a
              className="button button-navy"
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Message us on Instagram <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="contact-handle">
              @codeylon · A conversation is a good place to start.
            </span>
          </div>
          <div className="contact-art" aria-hidden="true">
            <svg viewBox="0 0 240 208" shapeRendering="crispEdges">
              <path
                d="M32 0h160v16h32v16h16v112h-16v16h-32v16h-64v16h-16v16H64v-32H32v-16H16v-16H0V32h16V16h16z"
                fill="#091A44"
              />
              <path
                d="M48 64h24v24H48zm56 0h24v24h-24zm56 0h24v24h-24z"
                fill="#BD9A41"
              />
            </svg>
            <PixelIcon className="contact-spark" />
          </div>
        </div>
      </section>
    </main>
  );
}
