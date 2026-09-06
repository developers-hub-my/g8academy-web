export const site = {
  name: 'G8Academy',
  tagline: 'Learn it. Prove it.',
  description:
    'Short, practitioner-led series for developers — each one ends in a graded assessment and a signed, publicly verifiable credential.',
  company: 'Developers Hub Sdn Bhd',
  registration: '202001019928 / 1376248-V',
  // One host. The static marketing pages answer at `/`; the application owns
  // /catalogue, /learn, /verify and the rest. Verify URLs are permanent and
  // public, so this value can never change once a credential has been issued.
  url: 'https://academy.devhub.my',
  app: 'https://academy.devhub.my',
  email: 'academy@devhub.my',
  suite: 'https://g8suite.com',
} as const;

export type Level = {
  name: string;
  prerequisite: string;
  hours: string;
  price: number;
  practical: boolean;
};

/** Level taxonomy — see documentation/02-design/02-ui-design-system.md §4 */
export const levels: Level[] = [
  { name: 'Foundation', prerequisite: 'No prior exposure assumed', hours: '4–6 h', price: 149, practical: false },
  { name: 'Practitioner', prerequisite: 'Ships production code', hours: '6–9 h', price: 249, practical: false },
  { name: 'Professional', prerequisite: 'Owns the system in production', hours: '8–12 h', price: 329, practical: false },
  { name: 'Architect', prerequisite: 'Practical assessment required', hours: '10–12 h', price: 399, practical: true },
];

export const steps = [
  {
    n: '01',
    title: 'Watch',
    body: 'A focused series on one competency — 4 to 12 hours, not a semester. Speed control, resume, captions, chapter markers, downloadable source.',
  },
  {
    n: '02',
    title: 'Be assessed',
    body: 'A timed quiz drawn from a randomised pool, every question mapped to a stated learning outcome. Architect level adds a practical, graded against a rubric.',
  },
  {
    n: '03',
    title: 'Earn the credential',
    body: 'Pass at 70% and a signed Open Badge 3.0 is issued within a minute — bound to the exact series version you were assessed against.',
  },
  {
    n: '04',
    title: 'Be verified',
    body: 'Share one URL. Anyone can open it and check the signature against the issuer key. No account, no login, no PDF to forward.',
  },
] as const;

export const faqs = [
  {
    q: 'What is a micro-credential, exactly?',
    a: 'A credential for one specific competency rather than a whole programme. Ours follow the MQA Guidelines to Good Practices: Micro-credentials — stated learning outcomes, assessment mapped to those outcomes, declared notional hours, and a permanent verifiable record.',
  },
  {
    q: 'How does an employer verify a credential?',
    a: 'They open the verification URL. The page shows Verified, Expired or Revoked before anything else, then the issuer, the holder, the competency, the assessment summary and the date. Verification is cryptographic — the signature is checked against the issuer’s published key, not looked up in a database they have to trust.',
  },
  {
    q: 'Are your credentials credit-bearing?',
    a: 'Not at launch. G8Academy issues non-credit-bearing credentials under Developers Hub. Credit-bearing credentials are co-issued with a Higher Education Provider that holds the academic approval — the platform is built for that from day one, with issuer as a first-class entity.',
  },
  {
    q: 'Is this HRD Corp claimable?',
    a: 'Not yet. HRD Corp claimability comes through the partner-issuer route, alongside credit-bearing credentials.',
  },
  {
    q: 'Does a subscription include credentials?',
    a: 'A monthly subscription covers all-access video. Assessment attempts and the credential are bought separately, or included with an annual subscription and with any per-credential purchase. Learning and proof are priced separately on purpose.',
  },
  {
    q: 'What happens to my credential if I leave my employer?',
    a: 'You keep it. Credentials belong to the learner. Reclaiming a seat never revokes one.',
  },
  {
    q: 'Can a credential be revoked?',
    a: 'Yes — for assessment integrity, issue in error, learner request or issuer withdrawal. A revoked credential’s URL still resolves and clearly says “Revoked” with the reason category. It is never silently deleted.',
  },
  {
    q: 'What if the series is updated after I earn my credential?',
    a: 'Nothing changes. Credentials bind to the series version you were assessed against, and the verification page names that version. Publishing a new version never invalidates an older credential.',
  },
] as const;
