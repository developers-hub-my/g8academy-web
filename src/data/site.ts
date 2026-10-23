export const site = {
  name: 'DevHub Academy',
  tagline: 'Learn it. Prove it. Show it.',
  description:
    'Short, practitioner-led video series for developers. Each one ends in a graded assessment and a signed, publicly verifiable credential.',
  company: 'Developers Hub Sdn Bhd',
  registration: '202001019928 / 1376248-V',
  location: 'Johor Bahru, Malaysia',
  // One host. The static marketing pages answer at `/`; the application owns
  // /catalogue, /learn, /verify and the rest. Verify URLs are permanent and
  // public, so this value can never change once a credential has been issued.
  url: 'https://academy.devhub.my',
  app: 'https://academy.devhub.my',
  email: 'hello@devhub.my',
} as const;

export type Level = {
  n: 1 | 2 | 3;
  value: 'fundamentals' | 'practitioner' | 'architect';
  name: string;
  claim: string;
  body: string;
  hours: string;
  assessment: string;
  price: number;
  /** colour-reverse level mark, for midnight grounds */
  mark: string;
};

/** The three levels = the three bars of the mark. */
export const levels: Level[] = [
  {
    n: 1,
    value: 'fundamentals',
    name: 'Fundamentals',
    claim: 'You can use it.',
    body: 'Core concepts and the everyday commands, checked with a timed quiz mapped to stated learning outcomes.',
    hours: '4–6 h',
    assessment: 'Timed quiz',
    price: 149,
    mark: '/brand/level_1-fundamentals_colour-reverse.svg',
  },
  {
    n: 2,
    value: 'practitioner',
    name: 'Practitioner',
    claim: 'You can run it in production.',
    body: 'Real configurations, failure cases and security, checked with a timed quiz drawn from a randomised pool.',
    hours: '6–10 h',
    assessment: 'Timed quiz',
    price: 249,
    mark: '/brand/level_2-practitioner_colour-reverse.svg',
  },
  {
    n: 3,
    value: 'architect',
    name: 'Architect',
    claim: 'You can design it and lead a team through it.',
    body: 'Trade-offs, scaling and governance, checked with a quiz plus a practical task graded against a published rubric.',
    hours: '10–12 h',
    assessment: 'Quiz + practical',
    price: 399,
    mark: '/brand/level_3-architect_colour-reverse.svg',
  },
];

export const levelByName = Object.fromEntries(levels.map((l) => [l.name, l])) as Record<string, Level>;

export const steps = [
  {
    n: '01',
    title: 'Learn',
    photo: '/images/landing/step-learn.jpg',
    photoAlt: 'Headphones resting beside an open laptop, ready for a lesson',
    bar: 'bg-l1',
    body: 'Watch a series of short, focused episodes built around one real system, not a slide deck. 4 to 12 hours, not a semester.',
    points: ['Captions and playback speed', 'Resume where you stopped', 'Code and config for every episode'],
  },
  {
    n: '02',
    title: 'Prove',
    photo: '/images/landing/step-prove.jpg',
    photoAlt: 'Hands typing on a laptop keyboard',
    bar: 'bg-l2',
    body: 'Take the assessment for that series: a timed quiz, every question mapped to a stated learning outcome. Architect adds a practical task marked against a published rubric.',
    points: ['Pass mark 70%', 'A per-outcome breakdown of your result', '2 attempts with a credential, extra attempts RM 49'],
  },
  {
    n: '03',
    title: 'Show',
    photo: '/images/landing/step-show.jpg',
    photoAlt: 'A candidate and an interviewer shaking hands across a desk',
    bar: 'bg-l3',
    body: 'Pass and a signed Open Badge 3.0 is issued within a minute, with its own public page, ready for your CV, LinkedIn or a client proposal.',
    points: ['Public verify link, no account needed', 'Bound to the series version you passed', 'Add to LinkedIn in one step'],
  },
] as const;

export const faqs = [
  {
    q: 'Do I have to finish the series before the assessment?',
    a: 'The assessment unlocks once you have watched 90% of the series. The assessment page shows what is still to watch.',
  },
  {
    q: 'What happens if I don’t pass?',
    a: 'You see a per-outcome breakdown, so you know exactly what to revisit. A credential purchase includes 2 attempts; extra attempts are RM 49, after a short cooldown.',
  },
  {
    q: 'How long is a credential valid?',
    a: 'Validity is set per series. Where a series has an expiry, the date is printed on the credential and the verify page then shows “Expired”, never “Invalid”, because it was genuinely earned. The verify page always shows the current status.',
  },
  {
    q: 'What is a micro-credential, exactly?',
    a: 'A credential for one specific competency rather than a whole programme. Ours follow the MQA Guidelines to Good Practices: Micro-credentials: stated learning outcomes, assessment mapped to those outcomes, declared notional hours, and a permanent verifiable record.',
  },
  {
    q: 'What do Fundamentals, Practitioner and Architect mean?',
    a: 'Fundamentals: you can use it. Practitioner: you can run it in production. Architect: you can design it and lead a team through it. Fundamentals and Practitioner are assessed with a timed quiz; Architect adds a practical graded against a rubric.',
  },
  {
    q: 'How does an employer verify a credential?',
    a: 'They open the verification URL. The page shows Verified, Expired or Revoked before anything else, then the issuer, the holder, the competency, the assessment summary and the date. Verification is cryptographic: the signature is checked against the issuer’s published key, not looked up in a database they have to trust.',
  },
  {
    q: 'Does a subscription include credentials?',
    a: 'No. A subscription (monthly, annual or lifetime) covers all-access video. Assessments and credentials are bought per credential, priced by level. Learning and proof are priced separately on purpose.',
  },
  {
    q: 'Can my company pay for my seat?',
    a: 'Yes. Teams are invoiced to the organisation, and you join with your work account. If you later leave, you keep your credentials: they belong to the learner, and reclaiming a seat never revokes one.',
  },
  {
    q: 'Who issues the credential?',
    a: 'Developers Hub Sdn Bhd, the team that writes and teaches every series. Credentials are non-credit-bearing at launch; credit-bearing credentials will be co-issued with a Higher Education Provider that holds the academic approval.',
  },
  {
    q: 'Is this HRD Corp claimable?',
    a: 'Not yet. HRD Corp claimability comes through the partner-issuer route, alongside credit-bearing credentials.',
  },
  {
    q: 'Can a credential be revoked?',
    a: 'Yes, for assessment integrity, issue in error, learner request or issuer withdrawal. A revoked credential’s URL still resolves and clearly says “Revoked” with the reason category. It is never silently deleted.',
  },
  {
    q: 'What if the series is updated after I earn my credential?',
    a: 'Nothing changes. Credentials bind to the series version you were assessed against, and the verification page names that version. Publishing a new version never invalidates an older credential.',
  },
] as const;
