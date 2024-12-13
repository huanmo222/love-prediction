import React from 'react';
import styles from './style.module.css';
import Button from '../../../../components/Button';

const steps = [
  {
    number: '01',
    title: '填写基本信息',
    description: '只需要填写简单的个人信息，不涉及隐私内容'
  },
  {
    number: '02',
    title: '完成性格测试',
    description: '简单的10道性格测试题，帮助AI更了解你'
  },
  {
    number: '03',
    title: '价值观匹配',
    description: '5个核心价值观问题，发现你们的共同点'
  },
  {
    number: '04',
    title: '获取分析报告',
    description: '立即获得AI生成的详细契合度分析报告'
  }
];

const Guide = ({ className }) => {
  return (
    <section className={`${styles.guide} ${className}`} id="guide">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>简单四步，开启你的浪漫之旅</h2>
          <p className={styles.subtitle}>
            全程仅需5分钟，让AI帮你找到最适合的另一半
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.action}>
          <Button size="large">
            立即开始测试
          </Button>
          <p className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>🔒</span>
            隐私安全保障 · 5分钟完成 · 准确率98%
          </p>
        </div>
      </div>

      <div className={styles.decoration}>
        {/* 可以添加一些装饰性的背景元素 */}
      </div>
    </section>
  );
};

export default Guide; 