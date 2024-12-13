import React from 'react';
import styles from './style.module.css';

// 特性数据
const features = [
  {
    icon: '📝',  // 后续可替换为SVG图标
    title: '简单快速',
    description: '仅需5分钟完成测试，简单的问题即可获得专业的分析结果'
  },
  {
    icon: '🤖',
    title: 'AI 分析',
    description: '采用先进的人工智能算法，从多个维度深入分析你们的契合程度'
  },
  {
    icon: '📊',
    title: '专业报告',
    description: '生成详细的匹配度分析报告，并提供个性化的建议指导'
  },
  {
    icon: '🔒',
    title: '隐私保护',
    description: '采用业界领先的加密技术，确保您的个人信息安全'
  }
];

const Features = ({ className }) => {
  return (
    <section className={`${styles.features} ${className}`} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>为什么选择我们</h2>
          <p className={styles.subtitle}>
            科学的方法，专业的分析，让你更了解你们的契合度
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 