export const business = {
  name: "Codeylon",
  url: "https://codeylon.com",
  instagram: "https://www.instagram.com/codeylon/",
  description:
    "Distinctive, practical websites for businesses, independent professionals, and creators. Explore our approach and discuss your website with Codeylon.",
};

export const services = [
  {
    title: "Business & service websites",
    description:
      "Make what you do clear, put your services in focus, and give people a reason to get in touch.",
    icon: "window",
  },
  {
    title: "Landing pages",
    description:
      "Give a launch, campaign, or single offer a focused page with a clear next step.",
    icon: "target",
  },
  {
    title: "Personal sites & portfolios",
    description:
      "Bring your work, experience, and point of view together in a place that feels like you.",
    icon: "star",
  },
  {
    title: "Restaurant websites",
    description:
      "Set the mood, make the menu easy to browse, and help guests plan their visit.",
    icon: "cup",
  },
  {
    title: "Product showcases",
    description:
      "Introduce your products with thoughtful visuals, useful details, and an easy enquiry path.",
    icon: "box",
  },
  {
    title: "Website redesigns",
    description:
      "Rethink the structure and refresh the design of a website that no longer fits your business.",
    icon: "refresh",
  },
] as const;

export const process = [
  {
    title: "Start with a conversation.",
    description:
      "Tell us about your business, your audience, and what you want your website to do.",
  },
  {
    title: "Make the plan clear.",
    description:
      "Together, we define the pages, content, and features. You receive a quote based on that agreed scope.",
  },
  {
    title: "Bring it to life.",
    description:
      "We shape the visual direction and build a responsive website around your content and goals.",
  },
  {
    title: "Refine, launch, hand over.",
    description:
      "We review the details together, make the agreed refinements, and prepare your site for launch and handover.",
  },
];

export const faqs = [
  {
    question: "What kinds of websites do you build?",
    answer:
      "We build websites that introduce a business, explain services, showcase products or work, and help people get in touch. That includes business websites, landing pages, portfolios, restaurant sites, and redesigns. If you are unsure whether your idea fits, send us a short description on Instagram.",
  },
  {
    question: "How do you work out the quote?",
    answer:
      "We start by discussing the pages, content, design needs, and features your website requires. Once the scope is clear, we provide a quote for that work. There is no need to arrive with a finished specification.",
  },
  {
    question: "What should I prepare before we start?",
    answer:
      "A short description of your business, the purpose of the website, and any existing logo, text, or images are a useful start. References you like can help too. We will work through what content is needed together and agree who will supply it.",
  },
  {
    question: "Will my website work well on phones?",
    answer:
      "Yes. We design responsive layouts and check the experience on small and large screens. That means readable text, sensible image sizes, and navigation and contact actions that are comfortable to use on a phone.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Share the link and tell us what feels outdated, unclear, or difficult to use. We can review the content and structure, identify what is worth keeping, and agree the scope of a redesign.",
  },
  {
    question: "Can you build online shops or customer accounts?",
    answer:
      "Our focus is websites people can browse to learn, explore, and enquire. We do not currently build checkout systems, login areas, custom dashboards, or sites that need a database. We can create an informational product showcase, with enquiries directed to your chosen contact channel.",
  },
  {
    question: "What about hosting, domains, and future updates?",
    answer:
      "We discuss the domain, hosting setup, and handover as part of planning the project, so responsibilities are clear before work begins. Any ongoing updates or support need to be agreed separately.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message @codeylon on Instagram. Tell us what your business does, whether you have a website already, and what you would like the new one to achieve. We can take the conversation from there.",
  },
];

export type ConceptSlug = "olio" | "forma" | "still";
export const concepts = [
  {
    slug: "olio" as const,
    name: "Olio",
    category: "Restaurant & hospitality",
    headline: "A little sunshine. A seat at the table.",
    summary:
      "A warm, characterful home for a neighbourhood Mediterranean restaurant.",
    audience:
      "Guests choosing somewhere to eat, checking the menu, or planning a visit.",
    idea: "Let the food set the tone. Warm colours, generous photography, and expressive serif type make the restaurant feel inviting before a guest walks through the door.",
    structure:
      "A concise introduction leads into the food, a readable sample menu, and a practical visit section. The most useful information stays easy to find on a phone.",
    decisions: [
      "Terracotta and butter yellow reflect the warmth of a shared table.",
      "A clear menu groups dishes by course without requiring a PDF download.",
      "A dedicated visit section brings opening information and directions into one place.",
    ],
    pages: ["Home", "Our food", "Menu", "Visit"],
    image: "/images/olio.webp",
    imageAlt:
      "Mediterranean burrata, tomatoes, basil, and olive oil on a warm, sunlit restaurant table.",
    next: "forma" as const,
  },
  {
    slug: "forma" as const,
    name: "Forma",
    category: "Architecture & interiors",
    headline: "Spaces for a slower kind of living.",
    summary:
      "A quiet, image-led portfolio for a fictional architecture studio.",
    audience:
      "People considering an architect and looking for a sense of the studio’s work and approach.",
    idea: "Give the architecture room to speak. An editorial grid and restrained typography put materials, light, and spatial details at the centre of the experience.",
    structure:
      "Selected work comes first, followed by the studio’s approach and an enquiry invitation. Project pages can explain the brief, the design thinking, and the finished space in a clear sequence.",
    decisions: [
      "A stone and charcoal palette sits comfortably beside architectural photography.",
      "Large images and generous spacing encourage a closer look at each project.",
      "A straightforward enquiry path gives prospective clients an obvious next step.",
    ],
    pages: ["Selected work", "Project detail", "Approach", "Enquire"],
    image: "/images/forma.webp",
    imageAlt:
      "Sculptural sandstone architecture with an olive tree, warm sunlight, and deep courtyard shadows.",
    next: "still" as const,
  },
  {
    slug: "still" as const,
    name: "Still",
    category: "Product & lifestyle",
    headline: "Less noise. More care.",
    summary:
      "A fresh, considered product showcase for a fictional skincare brand.",
    audience:
      "People discovering a skincare range and wanting to understand the products before making an enquiry.",
    idea: "Make a small collection easy to explore. Soft green, confident whitespace, and direct product information create a calm setting without losing clarity.",
    structure:
      "The collection introduces each product, followed by a simple care ritual and the brand’s point of view. Product enquiries take visitors to a contact channel; this concept does not include checkout.",
    decisions: [
      "Sage and deep green create a distinctive, calm visual identity.",
      "Clear product names and short descriptions make the range easy to scan.",
      "An enquiry action supports discovery without suggesting an online shop.",
    ],
    pages: ["Home", "The collection", "Our approach", "Product enquiries"],
    image: "/images/still.webp",
    imageAlt:
      "Minimal cream skincare bottles and a sage soap bar arranged on a pale green plinth.",
    next: "olio" as const,
  },
];

export function getConcept(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}
