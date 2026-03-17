import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsGrid from '@/components/SkillsGrid';
import ServiceCard from '@/components/ServiceCard';

const SERVICES = [
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
  {
    icon: '\ud83d\udd0d',
    title: 'Technical Evaluation & POC Support',
    description:
      'Hands-on proof-of-concept development, competitive bake-offs, and technical decision support.',
  },
  {
    icon: '\ud83c\udfaf',
    title: 'Measurement & Attribution Strategy',
    description:
      'Multi-touch attribution design, measurement frameworks, and cross-channel analytics strategy.',
  },
];

export default function Home() {
  return (
    <>
      <section style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Image
            src="/headshot.png"
            alt="Mitch Quarfot"
            width={200}
            height={200}
            priority
            style={{ borderRadius: '50%', margin: '0 auto 1.5rem' }}
          />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Mitch Quarfot
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '1.5rem' }}>
            Data, AdTech &amp; Cloud Solutions
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <SectionHeading title="About" />
          <p style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: '#444', lineHeight: 1.8 }}>
            Solution engineer with 10+ years of experience spanning AdTech, MarTech, and cloud
            data platforms. I&apos;ve held roles from media buyer to director of platform
            partnerships, and now help organizations adopt modern data architectures as a
            Solution Engineer at Snowflake. I bring a rare blend of deep technical skills and
            business strategy to help teams make better decisions with data.
          </p>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <SectionHeading
            title="Experience"
            subtitle="A career built at the intersection of data, advertising, and technology."
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <SectionHeading title="Skills & Expertise" />
          <SkillsGrid />
        </div>
      </section>

      <section id="services">
        <div className="container">
          <SectionHeading
            title="Services"
            subtitle="Consulting and advisory offerings for businesses and individuals."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading
            title="Contact"
            subtitle="Interested in working together? Let's connect."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a href="mailto:mquarfot@gmail.com" style={{ fontSize: '1.1rem' }}>
              mquarfot@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mitchquarfot/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.1rem' }}
            >
              linkedin.com/in/mitchquarfot
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
