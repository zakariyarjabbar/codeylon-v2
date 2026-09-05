import { PixelIcon } from "./icons";

export function PixelLandscape({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 256"
      fill="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="#BD9A41" d="M0 0h320v256H0z" />
      <path
        fill="#EBD8A1"
        d="M208 24h48v8h16v16h8v40h-8v16h-16v8h-48v-8h-16V88h-8V48h8V32h16z"
      />
      <path
        fill="#091A44"
        d="M0 200h16v-16h16v-16h16v-16h16v-16h16v-16h16v-16h32v16h16v16h16v16h16v16h16v16h16v16h16v56H0z"
      />
      <path
        fill="#F5F2E9"
        d="M104 152h40v16h16v16h16v16h16v16h16v40h-40v-16h-16v-16h-16v-16h-16v-16h-16z"
      />
      <path
        fill="#576E64"
        d="M224 184h16v-16h16v-16h16v-16h16v-16h32v136H176v-24h16v-16h16v-16h16z"
      />
      <path
        fill="#091A44"
        d="M16 32h8v-8h8v8h8v8h-8v8h-8v-8h-8zM144 48h8v8h8v8h-8v8h-8v-8h-8v-8h8z"
      />
      <path
        fill="#EBD8A1"
        d="M8 224h8v8H8zm24 16h8v8h-8zm32-16h8v8h-8zm216-40h8v8h-8zm16 32h8v8h-8zm-40 16h8v8h-8z"
      />
    </svg>
  );
}

export function HeroArtwork() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="An original pixel illustration of a website coming together, with a landscape, a responsive page, and a large pixel cursor."
    >
      <div className="art-grid" aria-hidden="true" />
      <PixelIcon className="art-star art-star-one" />
      <span className="art-plus" aria-hidden="true">
        +
      </span>
      <div className="art-window" aria-hidden="true">
        <div className="art-toolbar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>your-next-website.com</span>
          <span className="window-expand" />
        </div>
        <div className="art-page">
          <div className="art-page-header">
            <span>
              YOUR BRAND<span>.</span>
            </span>
            <span className="art-menu-lines" />
          </div>
          <div className="art-page-content">
            <div className="art-page-copy">
              <span className="pixel">
                Hello,
                <br />
                world<span>!</span>
              </span>
              <div className="art-copy-lines">
                <i />
                <i />
                <i />
              </div>
              <span className="art-mini-button">
                Make yourself at home <span>↗</span>
              </span>
            </div>
            <PixelLandscape />
          </div>
          <div className="art-page-footer">
            <span>A LITTLE DIFFERENT. ALL YOU.</span>
            <span>✳</span>
          </div>
        </div>
      </div>
      <div className="art-palette" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="art-phone" aria-hidden="true">
        <div className="art-phone-speaker" />
        <PixelLandscape />
        <div className="art-phone-lines">
          <i />
          <i />
        </div>
        <span />
      </div>
      <svg
        className="art-cursor"
        viewBox="0 0 104 132"
        fill="none"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <path
          d="M8 0h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8h16v16H64v8h8v16h8v12H56v-12h-8v-16h-8v-8h-8v8h-8v8H8z"
          fill="#091A44"
        />
        <path
          d="M16 16h8v8h8v8h8v8h8v8h8v8h8v8h8v8h8v8H48v16h8v16h8v12h-8v-12h-8V96h-8V80h-8v8h-8v8h-8z"
          fill="#F5F2E9"
        />
      </svg>
      <div className="art-caption pixel" aria-hidden="true">
        Every pixel, with purpose.
      </div>
      <PixelIcon className="art-star art-star-two" />
    </div>
  );
}
