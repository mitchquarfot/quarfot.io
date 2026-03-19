import SectionHeading from '@/components/SectionHeading';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsGrid from '@/components/SkillsGrid';

export default function Experience() {
  return (
    <>
      <section style={{ paddingTop: '8rem' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading
              title="Experience"
              subtitle="A career built at the intersection of data, advertising, and technology."
            />
          </AnimateOnScroll>
          <ExperienceTimeline />
        </div>
      </section>

      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <SectionHeading title="Skills & Expertise" />
          </AnimateOnScroll>
          <SkillsGrid />
        </div>
      </section>
    </>
  );
}
