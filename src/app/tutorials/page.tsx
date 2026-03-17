import SectionHeading from '@/components/SectionHeading';

export default function Tutorials() {
  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <SectionHeading
          title="Tutorials"
          subtitle="Video tutorials and technical walkthroughs are on the way."
        />
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
          Check back soon for hands-on content covering cloud data platforms,
          AdTech integrations, SQL analytics, and more.
        </p>
      </div>
    </section>
  );
}
