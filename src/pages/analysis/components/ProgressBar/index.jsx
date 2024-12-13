import React from 'react';
import styles from './style.module.css';

const steps = [
  { key: 'basicInfo', label: '基本信息' },
  { key: 'personality', label: '性格测试' },
  { key: 'values', label: '价值观' }
];

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className={styles.progressContainer}>
      {/* 步骤指示器 */}
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div 
            key={step.key}
            className={`${styles.step} ${index <= currentStep ? styles.active : ''}`}
          >
            <div className={styles.stepIcon}>
              {index < currentStep ? (
                <span className={styles.checkmark}>✓</span>
              ) : (
                index + 1
              )}
            </div>
            <span className={styles.stepLabel}>{step.label}</span>
            {index < steps.length - 1 && (
              <div className={`${styles.connector} ${index < currentStep ? styles.active : ''}`} />
            )}
          </div>
        ))}
      </div>

      {/* 进度条 */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 进度提示 */}
      <div className={styles.progressInfo}>
        <span className={styles.currentStep}>
          {currentStep < totalSteps ? (
            `第 ${currentStep + 1} 步，共 ${totalSteps} 步`
          ) : (
            '完成'
          )}
        </span>
        <span className={styles.percentage}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar; 