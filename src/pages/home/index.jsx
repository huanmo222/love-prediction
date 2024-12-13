import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Guide from './components/Guide';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI 恋爱预测</h1>
        <p className={styles.subtitle}>
          基于人工智能的科学匹配系统，帮助你找到真爱
        </p>
        <Link to="/analysis" className={styles.startButton}>
          开始测试
          <span className={styles.timeHint}>(约5分钟)</span>
        </Link>
      </header>

      <main className={styles.main}>
        <Hero />
        <Features />
        <Guide />
      </main>

      <footer className={styles.footer}>
        <p>© 2024 AI Love Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
