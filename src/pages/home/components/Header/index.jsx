import React from 'react';
import styles from './style.module.css';
import Button from '../../../../components/Button';

const Header = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.logo}>
        AI Love Prediction
      </div>
      
      <nav className={styles.nav}>
        <a href="#features" className={styles.navLink}>特性</a>
        <a href="#guide" className={styles.navLink}>指南</a>
        <Button variant="secondary" size="small">登录</Button>
      </nav>
    </header>
  );
};

export default Header; 