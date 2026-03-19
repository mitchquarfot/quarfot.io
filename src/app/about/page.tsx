import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function About() {
  return (
    <>
      <section style={{ paddingTop: '8rem' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading title="About Me" />
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '800px', margin: '0 auto', alignItems: 'center' }}>
            <AnimateOnScroll delay={0.1}>
              <div style={{ textAlign: 'center' }}>
                <Image
                  src="/headshot.png"
                  alt="Mitch Quarfot"
                  width={200}
                  height={200}
                  style={{ borderRadius: '50%', border: '3px solid var(--glass-border)' }}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                  Solution engineer with 10+ years of experience spanning AdTech, MarTech, and cloud
                  data platforms. I&apos;ve held roles from media buyer to director of platform
                  partnerships, and now help organizations adopt modern data architectures as a
                  Solution Engineer at Snowflake.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                  I bring a rare blend of deep technical skills and business strategy to help teams
                  make better decisions with data. Whether it&apos;s architecting a cloud data warehouse,
                  evaluating AdTech vendors, or designing measurement frameworks, I bridge the gap
                  between technical complexity and business outcomes.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.9 }}>
                  My career has taken me through every layer of the data and advertising ecosystem —
                  from buying digital media for Fortune 500 brands, to leading platform partnerships
                  at a DSP, to engineering data solutions at best-in-class SaaS companies. This
                  breadth of experience gives me a uniquely holistic perspective on how data,
                  technology, and strategy intersect.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
