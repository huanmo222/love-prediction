import React from 'react';
import styles from './style.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Guide from './components/Guide';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Features />
        <Guide />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
