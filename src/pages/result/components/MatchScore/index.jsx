import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const MatchScore = () => {
  const [score] = useState(85); // 这里先用固定值,后续从props传入
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // 分数动画效果
  useEffect(() => {
    const duration = 1500; // 动画持续时间
    const frames = 60; // 动画帧数
    const step = score / frames;
    let currentScore = 0;
    let frame = 0;
    
    const timer = setInterval(() => {
      currentScore = Math.min(score, currentScore + step);
      setAnimatedScore(Math.round(currentScore));
      frame++;
      
      if (frame >= frames) {
        clearInterval(timer);
      }
    }, duration / frames);
    
    return () => clearInterval(timer);
  }, [score]);

  // 计算圆环路径
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedScore / 100) * circumference;
  const dashArray = `${progress} ${circumference}`;

  // 获取匹配等级
  const getMatchLevel = (score) => {
    if (score >= 90) return '非常匹配';
    if (score >= 80) return '高度匹配';
    if (score >= 70) return '较为匹配';
    if (score >= 60) return '一般匹配';
    return '匹配度较低';
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>总体匹配度</h2>
      
      <div className={styles.scoreContainer}>
        <svg className={styles.scoreSvg} viewBox="0 0 200 200">
          {/* 定义渐变 */}
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          
          {/* 背景圆环 */}
          <circle
            className={styles.scoreCircleBg}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            strokeWidth="12"
          />
          
          {/* 进度圆环 */}
          <circle
            className={styles.scoreCircle}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            strokeWidth="12"
            strokeDasharray={dashArray}
            strokeDashoffset="0"
            strokeLinecap="round"
          />
          
          {/* 分数文本 */}
          <text
            className={styles.scoreText}
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {animatedScore}
          </text>
        </svg>
        
        <div className={styles.scoreInfo}>
          <div className={styles.matchLevel}>
            {getMatchLevel(score)}
          </div>
          <div className={styles.scoreHint}>
            在100分制中的评分
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScore; 