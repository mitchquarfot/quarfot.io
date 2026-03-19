import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

const FEATURED_SERVICES = [
  {
    icon: '\u2601\ufe0f',
    title: 'Data Stack Consulting',
    description:
      'Architecture reviews, platform selection guidance, and implementation planning for modern cloud data stacks.',
  },
  {
    icon: '\ud83d\udcca',
    title: 'AdTech / MarTech Advisory',
    description:
      'Strategy and vendor evaluation for advertising technology, marketing platforms, and data activation.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionHeading title="About" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p style={{ maxWidth: '720px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Solution engineer with 10+ years of experience spanning AdTech, MarTech, and cloud
              data platforms. I bring a rare blend of deep technical skills and business strategy
              to help teams make better decisions with data.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Link
              href="/about"
              style={{
                display: 'inline-block',
                color: 'var(--accent-light)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderBottom: '1px solid var(--accent)',
                paddingBottom: '2px',
              }}
            >
              Learn more about me
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="services" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading
              title="Services"
              subtitle="Consulting and advisory offerings for businesses and individuals."
            />
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {FEATURED_SERVICES.map((s, i) => (
              <ServiceCard key={i} index={i} {...s} />
            ))}
          </div>
          <AnimateOnScroll delay={0.3}>
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-block',
                  color: 'var(--accent-light)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--accent)',
                  paddingBottom: '2px',
                }}
              >
                View all services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading
              title="Experience"
              subtitle="A career built at the intersection of data, advertising, and technology."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { company: 'Snowflake', title: 'Associate Solution Engineer', period: 'Apr 2024 - Present' },
                { company: 'Fivetran', title: 'Sales Engineer', period: 'May 2022 - Jun 2023' },
                { company: 'Viant Technology', title: 'TAM to Director', period: 'Jan 2018 - Apr 2022' },
              ].map((role, i) => (
                <div key={i} className="glassCard" style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-light)', fontWeight: 600, marginBottom: '0.25rem' }}>{role.period}</p>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.15rem' }}>{role.company}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{role.title}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/experience"
                style={{
                  display: 'inline-block',
                  color: 'var(--accent-light)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--accent)',
                  paddingBottom: '2px',
                }}
              >
                View full experience
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionHeading
              title="Let's Connect"
              subtitle="Interested in working together?"
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:mitch@quarfot.io"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2.5rem',
                  background: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '50px',
                  fontWeight: 600,
                  transition: 'all 0.3s',
                  boxShadow: '0 0 20px var(--accent-glow)',
                }}
              >
                mitch@quarfot.io
              </a>
              <a
                href="https://www.linkedin.com/in/mitchquarfot/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2.5rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  borderRadius: '50px',
                  fontWeight: 600,
                  border: '1px solid var(--glass-border)',
                  transition: 'all 0.3s',
                }}
              >
                LinkedIn
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
