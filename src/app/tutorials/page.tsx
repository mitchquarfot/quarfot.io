import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Tutorials() {
  return (
    <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <AnimateOnScroll>
          <SectionHeading
            title="Tutorials"
            subtitle="Video tutorials and technical walkthroughs are on the way."
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Check back soon for hands-on content covering cloud data platforms,
            AdTech integrations, SQL analytics, and more.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
