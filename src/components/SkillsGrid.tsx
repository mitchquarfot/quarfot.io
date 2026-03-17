import styles from './SkillsGrid.module.css';

interface Skill {
  title: string;
  description: string;
}

const SKILLS: Skill[] = [
  {
    title: 'Cloud Data Platforms',
    description: 'Snowflake, data warehousing, cloud architecture, and scalable analytics solutions.',
  },
  {
    title: 'AdTech / MarTech',
    description: 'Programmatic advertising, DSPs, DMPs, CDPs, and marketing technology stack integration.',
  },
  {
    title: 'Multi-Touch Attribution',
    description: 'Cross-channel measurement, attribution modeling, and marketing mix analysis.',
  },
  {
    title: 'SQL & Analytics',
    description: 'Advanced SQL, diagnostic analytics, data modeling, and BI tool integration.',
  },
  {
    title: 'Data Pipelines',
    description: 'ELT/ETL design, data integration, Fivetran, and pipeline orchestration.',
  },
  {
    title: 'Technical Demonstrations',
    description: 'Live product demos, POC delivery, and solution storytelling for technical buyers.',
  },
  {
    title: 'Go-to-Market Strategy',
    description: 'Product positioning, competitive analysis, and partner ecosystem development.',
  },
  {
    title: 'Team Leadership',
    description: 'Cross-functional team management, mentoring, and strategic planning.',
  },
];

export default function SkillsGrid() {
  return (
    <div className={styles.grid}>
      {SKILLS.map((skill, i) => (
        <div className={styles.card} key={i}>
          <h3 className={styles.title}>{skill.title}</h3>
          <p className={styles.desc}>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
