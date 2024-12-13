import React, { useState } from 'react';
import styles from './style.module.css';
import ProgressBar from './components/ProgressBar';
import QuestionForm from './components/QuestionForm';
import ResultCard from './components/ResultCard';

// 测试步骤枚举
const STEPS = {
  BASIC_INFO: 0,
  PERSONALITY: 1,
  VALUES: 2,
  RESULT: 3
};

const Analysis = () => {
  // 当前步骤
  const [currentStep, setCurrentStep] = useState(STEPS.BASIC_INFO);
  // 所有表单数据
  const [formData, setFormData] = useState({
    basicInfo: {},
    personality: {},
    values: {}
  });

  // 计算总进度
  const calculateProgress = () => {
    return (currentStep / (Object.keys(STEPS).length - 1)) * 100;
  };

  // 处理表单提交
  const handleSubmit = async (data, step) => {
    // 更新表单数据
    setFormData(prev => ({
      ...prev,
      [Object.keys(formData)[step]]: data
    }));

    // 如果不是最后一步，进入下一步
    if (currentStep < STEPS.RESULT) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI 恋爱测试</h1>
        <ProgressBar 
          progress={calculateProgress()} 
          currentStep={currentStep}
          totalSteps={Object.keys(STEPS).length - 1}
        />
      </header>

      <main className={styles.main}>
        {currentStep !== STEPS.RESULT ? (
          <QuestionForm
            step={currentStep}
            onSubmit={handleSubmit}
            initialData={formData[Object.keys(formData)[currentStep]]}
          />
        ) : (
          <ResultCard data={formData} />
        )}
      </main>

      <footer className={styles.footer}>
        <p className={styles.hint}>
          {currentStep === STEPS.RESULT ? 
            '分析完成！' : 
            '请认真填写，这将影响分析的准确性'
          }
        </p>
      </footer>
    </div>
  );
};

export default Analysis; 