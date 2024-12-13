import React from 'react';
import styles from './style.module.css';
import MatchScore from './components/MatchScore';
import Analysis from './components/Analysis';
import Suggestions from './components/Suggestions';
import ShareCard from './components/ShareCard';

const Result = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>匹配度分析报告</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <MatchScore />
        </section>

        <section className={styles.section}>
          <Analysis />
        </section>

        <section className={styles.section}>
          <Suggestions />
        </section>

        <section className={styles.section}>
          <ShareCard />
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} AI Love Prediction. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Result; 