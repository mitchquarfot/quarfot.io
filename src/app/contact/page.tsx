import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Contact() {
  return (
    <section style={{ paddingTop: '8rem', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <AnimateOnScroll>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project in mind? Let's talk."
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
  );
}
