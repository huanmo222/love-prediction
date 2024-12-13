import React from 'react';
import styles from './style.module.css';
import Button from '../../../../components/Button';

const Hero = ({ className }) => {
  return (
    <section className={`${styles.hero} ${className}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          AI 智能预测你们的 
          <span className={styles.highlight}>恋爱契合度</span>
        </h1>
        
        <p className={styles.subtitle}>
          基于先进的 AI 算法,从多个维度深入分析,
          <br />
          帮助你找到最适合的另一半
        </p>
        
        <div className={styles.actions}>
          <Button size="large">
            开始测试
            <span className={styles.timeHint}>仅需5分钟</span>
          </Button>
        </div>
        
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>98%</span>
            <span className={styles.featureText}>预测准确率</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>50万+</span>
            <span className={styles.featureText}>用户信赖</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>AI</span>
            <span className={styles.featureText}>智能算法</span>
          </div>
        </div>
      </div>
      
      <div className={styles.decoration}>
        {/* 这里可以添加装饰性的背景动画 */}
      </div>
    </section>
  );
};

export default Hero; 