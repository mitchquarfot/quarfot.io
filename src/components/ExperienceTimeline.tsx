'use client';

import { motion } from 'framer-motion';
import styles from './ExperienceTimeline.module.css';

interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
}

const ROLES: Role[] = [
  {
    company: 'Snowflake',
    title: 'Associate Solution Engineer',
    period: 'Apr 2024 - Present',
    description:
      'Delivering technical demonstrations and proof-of-concept solutions for cloud data platform prospects. Translating complex data workloads into actionable Snowflake architectures.',
  },
  {
    company: 'Sisu',
    title: 'Solutions Sales Engineer',
    period: 'Jun 2023 - Oct 2023',
    description:
      'Designed and delivered diagnostic analytics solutions. Partnered with enterprise sales to scope technical requirements and run live product evaluations.',
  },
  {
    company: 'Fivetran',
    title: 'Sales Engineer, Commercial & Enterprise',
    period: 'May 2022 - Jun 2023',
    description:
      'Led technical evaluations for data pipeline solutions. Supported enterprise prospects through POCs and production-readiness reviews for ELT integrations.',
  },
  {
    company: 'Viant Technology',
    title: 'TAM to Director of Platform Partnerships',
    period: 'Jan 2018 - Apr 2022',
    description:
      'Grew from Technical Account Manager to Director, leading platform partnership strategy and multi-touch attribution initiatives across programmatic advertising.',
  },
  {
    company: 'National CineMedia',
    title: 'Account Service Representative',
    period: 'Apr 2016 - Jan 2018',
    description:
      'Managed cinema advertising campaigns and client relationships. Coordinated cross-functional teams to deliver integrated media solutions.',
  },
  {
    company: 'Mediavest | Spark',
    title: 'Digital Associate to Supervisor',
    period: 'Jul 2013 - Apr 2016',
    description:
      'Progressed from associate to supervisor in digital media planning and buying. Managed multi-million dollar digital campaigns for Fortune 500 clients.',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className={styles.timeline}>
      {ROLES.map((role, i) => (
        <motion.div
          className={styles.item}
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className={styles.dot} />
          <div className={styles.content}>
            <p className={styles.period}>{role.period}</p>
            <h3 className={styles.company}>{role.company}</h3>
            <p className={styles.title}>{role.title}</p>
            <p className={styles.desc}>{role.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
