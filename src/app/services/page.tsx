import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ServiceCard from '@/components/ServiceCard';

const SERVICES = [
  {
    icon: '\u2601\ufe0f',
    title: 'Data Stack Consulting',
    description:
      'Architecture reviews, platform selection guidance, and implementation planning for modern cloud data stacks. I help organizations evaluate Snowflake, Databricks, BigQuery, and other platforms to find the right fit for their workloads and business goals.',
  },
  {
    icon: '\ud83d\udcca',
    title: 'AdTech / MarTech Advisory',
    description:
      'Strategy and vendor evaluation for advertising technology, marketing platforms, and data activation. From DSP selection to CDP implementation, I provide hands-on guidance backed by years of industry experience.',
  },
  {
    icon: '\ud83d\udd0d',
    title: 'Technical Evaluation & POC Support',
    description:
      'Hands-on proof-of-concept development, competitive bake-offs, and technical decision support. I design and execute rigorous evaluations that give your team confidence in technology decisions.',
  },
  {
    icon: '\ud83c\udfaf',
    title: 'Measurement & Attribution Strategy',
    description:
      'Multi-touch attribution design, measurement frameworks, and cross-channel analytics strategy. I help teams build the systems needed to understand what drives conversions and revenue across channels.',
  },
];

export default function Services() {
  return (
    <>
      <section style={{ paddingTop: '8rem' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading
              title="Services"
              subtitle="Consulting and advisory offerings for businesses and individuals."
            />
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <SectionHeading
              title="Ready to Get Started?"
              subtitle="Let's discuss how I can help your team."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <a
              href="mailto:mitch@quarfot.io"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: '50px',
                fontWeight: 600,
                boxShadow: '0 0 20px var(--accent-glow)',
                transition: 'all 0.3s',
              }}
            >
              Get in Touch
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
