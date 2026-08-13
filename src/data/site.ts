/**
 * ALL SITE CONTENT LIVES HERE.
 * Edit this file to update the site — you shouldn't need to touch any .astro
 * files for normal content changes.
 *
 * Anything still marked TODO needs real information from the gym.
 * See CONTENT-NEEDED.md in the project root for the full list.
 *
 * IMPORTANT: do not fill TODOs with guesses. Empty values are handled
 * gracefully by the pages — a missing description or an empty testimonial list
 * simply doesn't render, rather than showing something untrue.
 */

export const coach = {
  /** Short name — used in the header lockup and page titles. */
  gym: 'BOX-X',
  /** Full trading name — used in the footer and SEO descriptions. */
  gymFull: 'Box-X Boxing & Fitness',
  tagline: "Stamford's Favorite Boxing Gym",

  /**
   * ⚠️ ONE THING LEFT TO VERIFY — the surname spelling: Ambroise or Ambrose?
   * Both are real spellings and easily confused. Everything else is confirmed.
   * Worth checking with him directly, because his name appears on the About
   * page, in the footer of every page, and in search engine results — and a
   * misspelled name is the kind of error people notice and remember.
   */
  name: 'Guy Ambroise',
  /** Formal form — first mentions, headings, page descriptions. */
  nameFormal: 'Coach Guy Ambroise',
  /** Warmer short form — repeat mentions in body copy. */
  nameShort: 'Trainer Ambroise',

  /** Short credibility line, shown near the top of the home page. */
  credentialLine: 'USA Certified Coach · 20+ Years Experience',

  /** Big headline at the top of the home page. */
  heroHeadline: "Stamford's Favorite Boxing Gym",

  // TODO: two or three sentences under the headline — who the gym is for and
  // what makes it different. Roughly 40 words.
  heroSub: '',

  /**
   * Public claims about credentials — only add what can be evidenced.
   * TODO: which USA body issued the certification (USA Boxing?), plus any
   * background check, first aid or insurance details worth listing.
   */
  credentials: [
    'USA certified boxing coach',
    '20+ years of coaching experience',
  ] as string[],

  // TODO: years coaching, and roughly how many people trained.
  // Leave as null until confirmed — the stats bar hides itself when empty.
  yearsCoaching: null as number | null,
  fightersTrained: null as number | null,
};

/**
 * Confirmed ZIP. 06906 covers Glenbrook, which is where the gym is — the
 * earlier 06901 was downtown Stamford and wrong.
 *
 * Defined once and composed into the address below, so it reaches the footer,
 * the contact page, the About page and the Google Maps query from here.
 */
const ZIP = '06906';
const LINE1 = '48 Union St';
const NEIGHBORHOOD = 'Glenbrook';
const LINE2 = `Stamford, CT ${ZIP}`;

export const contact = {
  email: 'boxxfitnessandboxing@gmail.com',
  /** Display format. */
  phone: '475-323-0741',
  /** Dial format — E.164, used for the tel: link. */
  phoneHref: 'tel:+14753230741',

  address: {
    line1: LINE1,
    /** Stamford neighborhood, useful for locals and for local search. */
    neighborhood: NEIGHBORHOOD,
    line2: LINE2,
    /** City on its own, for use in sentences. */
    city: 'Stamford',
    state: 'CT',
    zip: ZIP,
    /**
     * The single source of truth for the Google Maps query — both the About
     * and Contact pages link to it, and they must not drift apart. Plain
     * street address: BOX-X has its own storefront signage, so there is no
     * host-venue name to search for.
     */
    mapsQuery: `${LINE1}, ${NEIGHBORHOOD}, ${LINE2}`,
  },

  /** Empty entries are hidden automatically. */
  socials: {
    instagram: 'https://www.instagram.com/box_x_boxing_academy',
    instagramHandle: '@box_x_boxing_academy',
    facebook: 'https://www.facebook.com/share/1DY7TX5cSp/',
    // TODO: YouTube channel URL, if there is one
    youtube: '',
  },

  /**
   * Enquiry form endpoint (Web3Forms). Submissions are delivered to the
   * address that owns the access key below — currently `email` above.
   *
   * The access key is public by design: Web3Forms identifies the destination
   * inbox by it, and it ships in the page HTML. It is not a secret and there
   * is nothing to leak by committing it. To point the form at a different
   * inbox, generate a new key at https://web3forms.com and swap it here.
   */
  formAction: 'https://api.web3forms.com/submit',
  formAccessKey: '35213495-15ef-40d5-9379-3c8ac311c8ca',
};

/* ==========================================================================
   HERO MEDIA
   ========================================================================== */

/**
 * The looping video behind the home page headline.
 *
 * TO SWAP VIDEOS: change `src` and `poster` to the hero-video-1 pair. Both are
 * in public/videos/ and both work — video 2 is used because its dark gym
 * setting suits the site; video 1 is shot in a much brighter room.
 *
 * Both source clips are vertical (9:16). On a wide desktop screen a lot of the
 * frame is cropped away — `focalPoint` controls which part survives. Lower
 * percentages keep more of the top of the frame.
 *
 * TO GO BACK TO A STILL PHOTO: set `src` to '' and the hero falls back to
 * showing `poster` as a plain image.
 */
export const heroMedia = {
  src: '/videos/hero-video-2.mp4',
  poster: '/videos/hero-video-2-poster.jpg',
  focalPoint: 'center 42%',
  /**
   * Describes what is actually on screen. Adapted from the alt text supplied
   * for the earlier still photo — the pad work happens on the gym floor with
   * the ring behind, rather than inside the ring, so the wording was corrected
   * to match. Alt text that doesn't match the image is worse than none.
   */
  alt: 'Boxing coach holding mitts for a young fighter on the gym floor at BOX-X Stamford, with heavy bags and the ring behind them',
};

/**
 * The looping clip in the portrait slot on the About page.
 *
 * This replaced coach.jpg, the still portrait that used to sit here. The slot
 * keeps the shape that photo had — 9:16 — and the clip and its poster are both
 * 720×1280, so nothing is cropped either way.
 *
 * PHONES DON'T DOWNLOAD THE CLIP. It's 3.3 MB, too much to push at a phone for
 * a decorative loop, so under 768px the browser is never offered the file and
 * shows `poster` on its own. That's done with a `media` attribute on the
 * <source> in about.astro — not by hiding the video in CSS, which downloads it
 * anyway. Anyone with "reduce motion" turned on also gets the still poster.
 *
 * TO GO BACK TO A STILL IMAGE: set `src` to '' and the slot shows `poster` as
 * a plain image at every width. Set `poster` to '' as well for the lettered
 * placeholder box.
 */
export const coachMedia = {
  src: '/images/coach-video.mp4',
  poster: '/images/coach-video-poster.jpg',
  width: 720,
  height: 1280,
  /**
   * Describes what is actually in frame, not what we'd like to be in frame —
   * this is pad work with a second person in shot, not a portrait of the coach
   * on his own, and the alt text has to say so.
   */
  alt: 'Boxing coach in a black cap holding up a punch mitt while a young boxer in a white and orange hoodie throws a punch, on the grey canvas at BOX-X, with the ring ropes and gym equipment behind them',
};

/* ==========================================================================
   BOOKING & THE PRIMARY CALL TO ACTION
   ========================================================================== */

/**
 * The Vagaro booking link.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ DO NOT "TIDY UP" THE %2B SEQUENCES IN THIS URL.                          │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * The `enc=` value is a base64 token, and base64 uses "+" as a real character.
 * Inside a URL query string a bare "+" is decoded as a SPACE — so an unencoded
 * "+" silently corrupts the token and Vagaro rejects it. Each one must stay
 * written as %2B. There are six of them.
 *
 * This breaks in a nasty way: the link still looks fine and still loads a
 * Vagaro page, it just fails to identify the business. So if someone runs this
 * through a URL prettifier, decodes it "for readability", or retypes it from a
 * browser address bar (browsers display %2B as +), booking will appear to work
 * while quietly sending every customer nowhere.
 *
 * Astro does not re-encode attribute values — it HTML-escapes them, which
 * leaves %2B untouched — so the rendered href matches this string exactly.
 * Verified in the built HTML, not just assumed. If you edit this, check
 * dist/index.html afterwards and confirm six %2B survive, with no bare "+"
 * and no double-encoded %252B.
 *
 * Second thing worth knowing: this is a Wix-generated widget URL, not a plain
 * vagaro.com address. Wix can regenerate or expire these when the site or the
 * widget is edited. If booking ever breaks — dead link, blank page, or the
 * wrong business — CHECK THIS LINK FIRST.
 *
 * Everything reads from here: the booking section, header button, hero,
 * pricing cards and call-to-action band. All open in a new tab.
 */
const BOOKING_URL =
  'https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVD9Cy2REnbv8AeYZSH4WAs%2B6Sw4tatRhhHHsXHe/bXHP7KzNmQgy/bYihgO2CQsfxgP6bubivrNFL0VLCwJ4Pm59SOJiLJ3zizqftIS2DIvWnYqf3DTMDi45dabqCYXrV0otFQLm%2Bx8sYiE3BkACV4wSzS0FvTTlb0qM%2BYKwhIibHXNOTz/w/Z7FkwDcJdcSiJ4xbTwfN8ZKfe/JOZWbTQI7gqhM%2B/zkDL7q4H%2B6VnmilJDFhE5ekvYCtAbGI8YUeSyZjdt/2cv/HTGBoGEhB6WUlfJ0313fneZjNcqzlXgcphec/zpJXDLkthmR8skvscWVM3iQPILvbYoTnxe//YRG%2BILjbdiESIn9c5OxYO6PxUPUZE2rAQaH1XonX5HgG//j0xnzqZHsNSUxvwCp0sBiyZcLD/u3prI26OLxRlG12pxujV3C8inHvot6HIka7w==';

/** Tolerates a URL pasted without its protocol, which would otherwise resolve
 *  as a relative path and 404. */
const normalizeUrl = (raw: string) => {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
};

export const booking = {
  provider: 'Vagaro',
  url: normalizeUrl(BOOKING_URL),
};

/**
 * The primary call to action, used site-wide.
 *
 * Booking a (paid) class is the primary action everywhere — header button,
 * hero, booking section, pricing cards, call-to-action bands. The free trial
 * is still offered, but it is deliberately demoted to a secondary line
 * underneath the primary button rather than being the loudest thing on the
 * page. Both point at the same Vagaro link.
 */
export const bookingCta = {
  /** Primary button label. Short enough to also work in the header. */
  label: 'Book a Class',
  /** Secondary line under the primary button — the free trial, kept quiet. */
  trialNote: 'Your first class is free',
};

/**
 * Where a booking button should point — including the free-trial links, which
 * go to the same place. Vagaro when it's configured, the contact page until
 * then.
 */
export const bookingHref = booking.url || '/contact';
/** External links need target/rel; internal ones must not have them. */
export const bookingIsExternal = Boolean(booking.url);

/** Nav order = the order these appear in the header. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/training' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
];

/* ==========================================================================
   CLASSES
   ========================================================================== */

export type ClassCategory = 'Kids' | 'Teens & Adults';

/**
 * The two class categories, with their age ranges.
 * `slug` drives the colour coding on the schedule — don't change it without
 * updating the matching CSS in src/pages/schedule.astro.
 */
export const classCategories: {
  name: ClassCategory;
  ages: string;
  slug: string;
}[] = [
  { name: 'Kids', ages: 'Ages 12 and under', slug: 'kids' },
  { name: 'Teens & Adults', ages: 'Ages 13 and up', slug: 'teens-adults' },
];

export type ClassSlot = { time: string; category: ClassCategory };

/**
 * Row order for the schedule table, earliest to latest.
 * Set explicitly rather than sorted, so the order never depends on parsing
 * these strings as times. Every `time` used in `schedule` must appear here.
 */
export const scheduleTimes = [
  '11:00 AM – 12:00 PM',
  '12:00 – 1:00 PM',
  '5:00 – 6:00 PM',
  '6:00 – 7:00 PM',
  '7:00 – 8:00 PM',
];

/** Confirmed weekly class schedule. Days with no classes have empty slots. */
export const schedule: { day: string; short: string; slots: ClassSlot[] }[] = [
  {
    day: 'Monday',
    short: 'Mon',
    slots: [
      { time: '5:00 – 6:00 PM', category: 'Teens & Adults' },
      { time: '6:00 – 7:00 PM', category: 'Teens & Adults' },
    ],
  },
  {
    day: 'Tuesday',
    short: 'Tue',
    slots: [
      { time: '5:00 – 6:00 PM', category: 'Kids' },
      { time: '6:00 – 7:00 PM', category: 'Teens & Adults' },
      { time: '7:00 – 8:00 PM', category: 'Teens & Adults' },
    ],
  },
  {
    day: 'Wednesday',
    short: 'Wed',
    slots: [
      { time: '5:00 – 6:00 PM', category: 'Teens & Adults' },
      { time: '6:00 – 7:00 PM', category: 'Teens & Adults' },
    ],
  },
  {
    day: 'Thursday',
    short: 'Thu',
    slots: [
      { time: '5:00 – 6:00 PM', category: 'Kids' },
      { time: '6:00 – 7:00 PM', category: 'Teens & Adults' },
      { time: '7:00 – 8:00 PM', category: 'Teens & Adults' },
    ],
  },
  {
    day: 'Friday',
    short: 'Fri',
    slots: [
      { time: '5:00 – 6:00 PM', category: 'Teens & Adults' },
      { time: '6:00 – 7:00 PM', category: 'Teens & Adults' },
    ],
  },
  {
    day: 'Saturday',
    short: 'Sat',
    slots: [
      { time: '11:00 AM – 12:00 PM', category: 'Kids' },
      { time: '12:00 – 1:00 PM', category: 'Teens & Adults' },
    ],
  },
  { day: 'Sunday', short: 'Sun', slots: [] },
];

/** Confirmed open gym hours — separate from, and longer than, class times. */
export const openGymHours: { day: string; hours: string }[] = [
  { day: 'Monday – Friday', hours: '6:00 AM – 8:30 PM' },
  { day: 'Saturday – Sunday', hours: '6:00 AM – 6:00 PM' },
];

/* ==========================================================================
   PRICING
   ========================================================================== */

export type Membership = {
  title: string;
  price: string;
  unit: string;
  /**
   * How it's billed. Drives the badge and the colour treatment on the card.
   *
   * This matters more than it looks: Kids Unlimited is $99 PER MONTH and
   * One-on-One Training is $99 PER SESSION — the same number, very different
   * commitment. Keep the badge prominent so the two can't be confused.
   */
  billing: 'monthly' | 'session';
  /** TODO — a real description. Cards render fine without one. */
  summary: string;
  points: string[];
  featured?: boolean;
};

/**
 * Confirmed pricing. Monthly memberships first, then per-session rates —
 * grouping by billing type is itself part of keeping them distinct.
 */
export const memberships: Membership[] = [
  {
    title: 'Unlimited Membership',
    price: '$119',
    unit: 'per month',
    billing: 'monthly',
    summary: '',
    points: ['Unlimited classes', 'Open gym access included'],
    featured: true,
  },
  {
    title: 'Kids Unlimited',
    price: '$99',
    unit: 'per month',
    billing: 'monthly',
    summary: '',
    points: ['Unlimited kids classes', 'Ages 12 and under'],
  },
  {
    title: 'Open Gym Only',
    price: '$60',
    unit: 'per month',
    billing: 'monthly',
    summary: '',
    points: ['Open gym access', 'Classes not included'],
  },
  {
    title: 'One-on-One Training',
    price: '$99',
    unit: 'per session',
    billing: 'session',
    summary: '',
    points: ['All ages', 'Pay per session — not a monthly membership'],
  },
];

/** Human-readable label for the billing badge on each pricing card. */
export const billingLabel: Record<Membership['billing'], string> = {
  monthly: 'Billed monthly',
  session: 'Per session',
};

/** What the gym offers, in plain terms. Used for chips and dropdowns. */
export const programs = [
  'Kids Classes (12 and under)',
  'Teens & Adults Classes (13 and up)',
  'One-on-One Training',
];

/**
 * TODO: what's included with every membership at no extra cost.
 * Left empty until confirmed — the section hides itself.
 */
export const included: string[] = [];

/* ==========================================================================
   SOCIAL PROOF & QUESTIONS — both still empty
   ========================================================================== */

export type Testimonial = { quote: string; name: string; detail: string };

/**
 * Real reviews only, quoted verbatim. Do not invent these and do not tidy up
 * the wording — fabricated or materially altered testimonials violate FTC
 * rules in the US. The section hides itself entirely while this is empty.
 *
 * Each quote is a contiguous excerpt of a longer review — no words changed,
 * nothing reordered. Source: reviews.txt as supplied by the gym.
 *
 * Reviewers' own spellings are preserved: `Box x` (Nesken B.) and
 * `Trainer Ambrose` (Kelly M., where the coach spells it Ambroise). Do not
 * "correct" either.
 *
 * Joni G. was dropped: reviews.txt has no text for that review, and the only
 * version to hand was Google's truncated preview.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "As a complete beginner, walking into a boxing gym can be intimidating, but Box-X made it very comfortable. From the moment I stepped in, I felt incredibly welcome. The coaches are phenomenal – patient, knowledgeable, and genuinely invested in helping you learn proper technique, even if you've never thrown a punch before.",
    name: 'Gerson P.',
    detail: 'Google review',
  },
  {
    quote:
      "He's never been so excited to do anything like this. Which says a lot about guy! The energy is great and he's so easy to communicate with! Gives my son tons of encouragement and cannot wait to see how much my son learns with him! Definitely recommend!",
    name: 'Nicolle C.',
    detail: 'Google review',
  },
  {
    quote:
      "Walking into this boxing gym was the best decisions ever. The energy, positivity, and sense of community were unmatched. The coach Trainer Ambrose is absolutely incredible not only extremely knowledgeable and motivating, but someone who genuinely cares about every single person who walks through the doors. You can tell this isn't just a job, it's a passion.",
    name: 'Kelly M.',
    detail: 'Google review',
  },
  {
    quote:
      'I recently checked out Box x and had an incredible experience! From the moment I walked in, the energy was high and the staff was super welcoming. The trainers are knowledgeable, motivating, and really know how to push you without making it feel overwhelming.',
    name: 'Nesken B.',
    detail: 'Google review',
  },
];

export type FaqItem = { q: string; a: string };

/**
 * TODO: the questions people actually ask before their first class, with
 * answers that are true for this gym. Likely candidates:
 *   - Do I need any experience to start?
 *   - Do I need my own gloves and wraps?
 *   - Is sparring required?
 *   - What should my child bring to their first class?
 *   - Is there a contract, or is it month to month?
 *   - Do you offer drop-in classes, or is it membership only?
 * The FAQ section hides itself while this is empty.
 */
export const faqs: FaqItem[] = [];
