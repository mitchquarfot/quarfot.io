import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Snowflake for Advertising | AdTech, Agencies & Measurement',
  description:
    'How Snowflake powers modern advertising — AI-driven measurement and privacy-first data collaboration for brands, agencies, adtech and measurement partners.',
  openGraph: {
    title: 'Snowflake for Advertising — Humans AND AI. Brands AND Data.',
    description:
      'AI-powered measurement and privacy-first collaboration for the modern advertising ecosystem.',
    url: 'https://quarfot.io/snowflake-adtech',
    siteName: 'quarfot.io',
    type: 'website',
  },
};

// All outbound links carry UTM tags so QR-driven traffic is trackable.
const UTM = '?utm_source=quarfot_io&utm_medium=qr&utm_campaign=colorado_ad_day';
const SF = 'https://www.snowflake.com/en';
const link = (path: string) => `${path}${UTM}`;

const URLS = {
  adtech: link(`${SF}/solutions/industries/advertising-media-entertainment/adtech-martech/`),
  agencies: link(`${SF}/solutions/industries/advertising-media-entertainment/agencies/`),
  publishers: link(`${SF}/solutions/industries/advertising-media-entertainment/media-publishing/`),
  customer360: link(`${SF}/solutions/departments/marketing/customer-360/`),
  predictions: link(`${SF}/blog/advertising-media-predictions-2026/`),
  cleanRoomIDC: link('https://www.snowflake.com/resource/idc-marketscape-snowflake-data-clean-rooms-2025/'),
  videoamp: link(`${SF}/customers/all-customers/case-study/videoamp/`),
  powerdigital: link(`${SF}/customers/all-customers/case-study/power-digital/`),
  marketplace: 'https://app.snowflake.com/marketplace',
  trial: link('https://signup.snowflake.com/'),
  cortexCode: link(`${SF}/product/features/cortex-code`),
  cortexCodePR: link(`${SF}/news/press-releases/snowflake-unveils-cortex-code-an-ai-coding-agent-that-drastically-increases-productivity-by-understanding-your-enterprise-data-context/`),
  summit: link(`${SF}/summit/`),
};

const icon = (name: string) => `/icons/${name}.png`;

const whyNow = [
  {
    icon: 'Security_Governance',
    title: 'Signal loss & privacy',
    body: "Cookies and identifiers keep eroding, and publishers' first-party data is squeezed by AI-driven search. The old tracking playbook no longer holds.",
  },
  {
    icon: 'Snowflake_Intelligence',
    title: 'Agentic AI',
    body: 'AI is moving from insight to execution — planning media, building audiences, testing creative, optimizing in real time. The new question: are we marketing to a human, or to an agent?',
  },
  {
    icon: 'Connected',
    title: 'Consolidation',
    body: 'Holding-company megamergers and retail media are reorganizing the ecosystem. Data collaboration has become a survival skill — not a differentiator.',
  },
];

const cleanRoom = [
  {
    icon: 'Sharing_Collaboration',
    title: 'Overlap & audiences',
    body: "Find shared customers between your data and a partner's — to plan smarter and cut wasted reach — without either side exposing raw records.",
  },
  {
    icon: 'Target',
    title: 'Closed-loop attribution',
    body: 'Connect exposure to outcomes — sales, store visits, conversions — across walled gardens and partners, privacy-safe by design.',
  },
  {
    icon: 'Trusted',
    title: 'Trust built in',
    body: 'A recognized industry leader in clean rooms (IDC MarketScape, 2025), with enterprise governance, role-based access, and PII protection.',
  },
];

const questions = [
  'Which audiences overlap between our CTV buy and the retailer\u2019s loyalty file?',
  'What\u2019s the incremental lift of paid social versus organic this quarter?',
  'If I shift 15% of budget from display to retail media, what happens to ROAS?',
  'Which creative elements actually drove conversions — not just clicks?',
];

const coco = [
  {
    icon: 'Code',
    title: 'Build in plain English',
    body: 'Describe what you want — a pipeline, a dashboard, an AI agent — and CoCo builds it. No deep engineering background required.',
  },
  {
    icon: 'Security_Governance',
    title: 'It knows your data',
    body: 'Unlike generic coding tools, CoCo understands your Snowflake data, governance, and business context — secure and governed by design.',
  },
  {
    icon: 'Native_App',
    title: 'Where you already work',
    body: 'In Snowflake, your terminal, or VS Code — plus new Excel, Slack, and desktop apps announced at Summit 26.',
  },
];

const audiences = [
  { icon: 'Enterprise', title: 'Brands', body: 'One view of the customer and clear proof of what marketing drives.', href: URLS.adtech },
  { icon: 'Users_Multiple', title: 'Agencies', body: 'Answer client questions live in the pitch with AI on real campaign data.', href: URLS.agencies },
  { icon: 'Data_Providers', title: 'AdTech & MarTech', body: "Deliver your product inside customers' data — no movement, no copies.", href: URLS.adtech },
  { icon: 'Media_Publishers', title: 'Publishers & Measurement', body: 'Monetize and measure authenticated audiences while protecting privacy.', href: URLS.publishers },
];

const stats = [
  { num: '10x', label: 'better performance (adtech platform, public case study)', href: URLS.videoamp },
  { num: '~90%', label: 'cost savings vs. a legacy stack', href: URLS.videoamp },
  { num: '24h \u2192 12s', label: 'data retrieval at a performance agency', href: URLS.powerdigital },
  { num: '#1', label: 'recognized leader, data clean rooms (2025)', href: URLS.cleanRoomIDC },
];

const resources = [
  { icon: 'Case_Study', title: 'AdTech & MarTech', body: 'How Snowflake unifies the advertising ecosystem.', href: URLS.adtech },
  { icon: 'Users_Multiple', title: 'Snowflake for Agencies', body: 'Modernize intelligence and win pitches with AI.', href: URLS.agencies },
  { icon: 'Blog', title: '2026 Predictions', body: 'Agentic AI, composability and market reorganization.', href: URLS.predictions },
  { icon: 'Code', title: 'Cortex Code (CoCo)', body: 'The AI coding agent that builds on your data.', href: URLS.cortexCode },
  { icon: 'Launch', title: 'Summit 26 announcements', body: 'Everything new from Snowflake this week.', href: URLS.summit },
  { icon: 'Documentation', title: 'IDC MarketScape', body: 'Why Snowflake leads in data clean rooms (2025).', href: URLS.cleanRoomIDC },
  { icon: 'All_Your_Data', title: 'Snowflake Marketplace', body: 'Thousands of ready-to-use datasets to enrich your own.', href: URLS.marketplace },
  { icon: 'Free_Trial', title: 'Start free', body: '$400 in credits. Spin up and explore in minutes.', href: URLS.trial },
];

export default function SnowflakeAdtech() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <span className={styles.badge}>Snowflake &times; AdTech &middot; Colorado Ad Day 2026</span>
        <h1 className={styles.heroTitle}>
          Humans <span className={styles.sfGradient}>AND</span> AI.
          <br />
          Brands <span className={styles.sfGradient}>AND</span> Data.
        </h1>
        <p className={styles.heroSub}>
          Snowflake is the trusted data foundation behind modern advertising — helping brands,
          agencies, and adtech partners measure what works and collaborate safely, without ever
          giving up control of their data.
        </p>
        <div className={styles.heroCtas}>
          <a className={styles.ctaPrimary} href={URLS.adtech} target="_blank" rel="noopener noreferrer">
            Explore Snowflake for AdTech
          </a>
          <a className={styles.ctaGhost} href="#why">
            Why it matters in 2026 &darr;
          </a>
        </div>
      </header>

      <div className={styles.wrap}>
        {/* WHY NOW */}
        <section id="why" className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Why now — the 2026 inflection</div>
            <h2 className={styles.h2}>The ground is shifting under measurement</h2>
            <p className={styles.lead}>
              Three forces are reshaping advertising at once. The common thread: whoever has the
              most trusted, connected data — and can act on it — wins.
            </p>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g3}`}>
            {whyNow.map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 0.08}>
                <div className={`glassCard ${styles.card}`}>
                  <Image className={styles.icon} src={icon(c.icon)} alt="" width={72} height={72} />
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* PILLAR 1 */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Pillar 1 · Lead</div>
            <span className={styles.pill}>AI-POWERED MEASUREMENT</span>
            <h2 className={styles.h2}>Prove what&rsquo;s working — then decide what&rsquo;s next</h2>
            <p className={styles.lead}>
              Connect every channel to real business outcomes and run your whole measurement
              toolkit in one governed place — instead of stitching together a dozen dashboards.
            </p>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g2}`}>
            <AnimateOnScroll>
              <div className={`glassCard ${styles.card}`}>
                <Image className={styles.icon} src={icon('Faster_Insights')} alt="" width={72} height={72} />
                <h3>The full toolkit, one platform</h3>
                <ul>
                  <li>Multi-touch attribution across CTV, search, social, retail media &amp; offline</li>
                  <li>Marketing mix modeling (MMM) for budget-level decisions</li>
                  <li>Incrementality &amp; geo-holdout tests to prove true lift</li>
                  <li>Unified measurement that reconciles them all</li>
                </ul>
                <a className={styles.cardLink} href={URLS.customer360} target="_blank" rel="noopener noreferrer">
                  See the Customer 360 use case
                </a>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <div className={`glassCard ${styles.card}`}>
                <Image className={styles.icon} src={icon('Snowflake_Intelligence')} alt="" width={72} height={72} />
                <h3>Cortex AI — ask, don&rsquo;t wait</h3>
                <p>
                  Ask questions in plain English and get answers from live data — no SQL, no ticket
                  to the analytics team. AI agents can plan, test, and optimize under human
                  oversight, so teams spend time on strategy instead of pulling reports.
                </p>
                <a className={styles.cardLink} href={URLS.adtech} target="_blank" rel="noopener noreferrer">
                  How Snowflake powers AI for advertising
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* PILLAR 2 */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Pillar 2 · Lead</div>
            <span className={styles.pill}>PRIVACY-FIRST COLLABORATION</span>
            <h2 className={styles.h2}>Share insights — not your data</h2>
            <p className={styles.lead}>
              Data clean rooms let you collaborate with partners, publishers, and retail media
              networks without ever moving or copying your data. Built for the post-cookie world.
            </p>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g3}`}>
            {cleanRoom.map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 0.08}>
                <div className={`glassCard ${styles.card}`}>
                  <Image className={styles.icon} src={icon(c.icon)} alt="" width={72} height={72} />
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={0.1}>
            <a className={styles.cardLink} href={URLS.cleanRoomIDC} target="_blank" rel="noopener noreferrer">
              Read the IDC MarketScape on data clean rooms
            </a>
          </AnimateOnScroll>
        </section>

        {/* COMPOSABLE */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>The foundation</div>
            <h2 className={styles.h2}>Composable, not a Frankenstack</h2>
            <p className={styles.lead}>
              One governed data layer that everything plugs into. Enrich it with thousands of
              ready-to-use datasets from the Snowflake Marketplace, and bring best-of-breed tools{' '}
              <em>to</em> your data instead of copying data out to them — so you can swap components
              as the market shifts, without replatforming.
            </p>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g3}`}>
            <AnimateOnScroll>
              <div className={`glassCard ${styles.card}`}>
                <Image className={styles.iconSm} src={icon('Integrated_Data')} alt="" width={56} height={56} />
                <h3>One governed layer</h3>
                <p>All your first-, second-, and third-party data, unified and access-controlled.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <a className={`glassCard ${styles.card} ${styles.linkCard}`} href={URLS.marketplace} target="_blank" rel="noopener noreferrer">
                <Image className={styles.iconSm} src={icon('All_Your_Data')} alt="" width={56} height={56} />
                <h3>Marketplace enrichment</h3>
                <p>Thousands of datasets — weather, demographics, identity — ready to join.</p>
                <span className={styles.cardLink}>Browse the Marketplace</span>
              </a>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <div className={`glassCard ${styles.card}`}>
                <Image className={styles.iconSm} src={icon('Native_App')} alt="" width={56} height={56} />
                <h3>Bring tools to the data</h3>
                <p>Native apps and partners run where your data lives — no copies, less risk.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ASK */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Make it real</div>
            <h2 className={styles.h2}>Questions you could just&hellip; ask</h2>
            <p className={styles.lead}>
              With AI on a unified data foundation, these stop being month-long analyses and become
              a sentence:
            </p>
          </AnimateOnScroll>
          <div className={styles.ask}>
            {questions.map((q, i) => (
              <AnimateOnScroll key={i} delay={i * 0.06}>
                <div className={styles.askItem}>
                  <span className={styles.askMark}>&ldquo;</span>
                  <span>{q}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* CORTEX CODE / COCO */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>New at Summit 26 · This week</div>
            <h2 className={styles.h2}>
              Meet CoCo — the AI that <span className={styles.sfGradient}>builds</span> on your data
            </h2>
            <p className={styles.lead}>
              Snowflake Cortex Code — renamed <strong style={{ color: 'var(--sf-blue)' }}>CoCo</strong> at
              Summit this week — is an AI agent that turns plain-English requests into real data
              pipelines, apps, and agents. It&rsquo;s one of the fastest-adopted products in Snowflake&rsquo;s
              history, and agencies like dentsu already use it to ship data-driven marketing solutions
              faster.
            </p>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g3}`}>
            {coco.map((c, i) => (
              <AnimateOnScroll key={c.title} delay={i * 0.08}>
                <div className={`glassCard ${styles.card}`}>
                  <Image className={styles.icon} src={icon(c.icon)} alt="" width={72} height={72} />
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={0.1}>
            <div className={styles.metaCallout}>
              <span className={styles.metaDot} />
              <span>
                <strong>True story:</strong> this microsite was built with CoCo — from research to
                design to deploy.
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
              <a className={styles.cardLink} href={URLS.cortexCode} target="_blank" rel="noopener noreferrer">
                Explore Cortex Code
              </a>
              <a className={styles.cardLink} href={URLS.cortexCodePR} target="_blank" rel="noopener noreferrer">
                Read the launch announcement
              </a>
              <a className={styles.cardLink} href={URLS.summit} target="_blank" rel="noopener noreferrer">
                See everything from Summit 26
              </a>
            </div>
          </AnimateOnScroll>
        </section>

        {/* WHO */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Who it&rsquo;s for</div>
            <h2 className={styles.h2}>Built for the whole ecosystem</h2>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g4}`}>
            {audiences.map((a, i) => (
              <AnimateOnScroll key={a.title} delay={i * 0.06}>
                <a className={`glassCard ${styles.card} ${styles.who} ${styles.linkCard}`} href={a.href} target="_blank" rel="noopener noreferrer">
                  <Image className={styles.iconSm} src={icon(a.icon)} alt="" width={56} height={56} />
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* PROOF */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Proof</div>
            <h2 className={styles.h2}>Where data does more</h2>
          </AnimateOnScroll>
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 0.06}>
                <a className={styles.stat} href={s.href} target="_blank" rel="noopener noreferrer">
                  <div className={`${styles.statNum} ${styles.sfGradient}`}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <div className={styles.statLink}>Read the source</div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* GO DEEPER */}
        <section className={styles.section}>
          <AnimateOnScroll>
            <div className={styles.eyebrow}>Go deeper</div>
            <h2 className={styles.h2}>Real Snowflake content, one tap away</h2>
          </AnimateOnScroll>
          <div className={`${styles.grid} ${styles.g3}`}>
            {resources.map((r, i) => (
              <AnimateOnScroll key={r.title} delay={i * 0.05}>
                <a className={`glassCard ${styles.card} ${styles.linkCard}`} href={r.href} target="_blank" rel="noopener noreferrer">
                  <Image className={styles.iconSm} src={icon(r.icon)} alt="" width={56} height={56} />
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                  <span className={styles.cardLink}>Open</span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </div>

      {/* CLOSE */}
      <section className={styles.close}>
        <div className={styles.wrap}>
          <AnimateOnScroll>
            <h2 className={styles.h2}>Want the deeper dive?</h2>
            <p className={styles.lead} style={{ margin: '0 auto' }}>
              Let&rsquo;s talk through your measurement and collaboration use cases — whatever
              you&rsquo;re wrestling with.
            </p>
            <Image
              className={styles.qr}
              src="/snowflake-adtech-qr.png"
              alt="QR code linking to quarfot.io/snowflake-adtech"
              width={168}
              height={168}
            />
            <p className={styles.closeContact}>
              Scan to revisit &middot;{' '}
              <a href="mailto:mitch@quarfot.io">mitch@quarfot.io</a>
            </p>
            <p className={styles.qrDownload}>
              <a href="/snowflake-adtech-qr.png" download>
                Download the QR image
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className={`${styles.wrap} ${styles.sources}`}>
        Sources: Snowflake AdTech/MarTech &amp; Agencies solution pages; Snowflake &ldquo;Advertising,
        Media &amp; Entertainment 2026 Predictions&rdquo;; public Snowflake customer case studies
        (VideoAmp, Power Digital); IDC MarketScape: Worldwide Data Clean Room Technology 2025. Figures
        are publicly published; no confidential customer information is shown.
        <br />
        Prepared by Mitch Quarfot &middot; Snowflake &middot; quarfot.io/snowflake-adtech
      </div>
    </div>
  );
}
