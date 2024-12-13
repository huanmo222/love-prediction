import React from 'react';
import styles from './style.module.css';

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { text: '功能介绍', href: '#features' },
      { text: '使用指南', href: '#guide' },
      { text: '定价', href: '#' },
      { text: '常见问题', href: '#' }
    ]
  },
  about: {
    title: '关于',
    links: [
      { text: '关于我们', href: '#' },
      { text: '使用条款', href: '#' },
      { text: '隐私政策', href: '#' },
      { text: '联系我们', href: '#' }
    ]
  },
  social: {
    title: '关注我们',
    links: [
      { text: '微信公众号', href: '#' },
      { text: '微博', href: '#' },
      { text: '知乎', href: '#' },
      { text: '抖音', href: '#' }
    ]
  }
};

const Footer = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            AI Love Prediction
          </div>
          <p className={styles.description}>
            用AI科技，找到最适合的另一半
          </p>
        </div>

        <div className={styles.links}>
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className={styles.linkSection}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AI Love Prediction. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>隐私政策</a>
            <span className={styles.divider}>·</span>
            <a href="#" className={styles.bottomLink}>使用条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 