import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Button from '../../../../components/Button';
import FormField from './FormField';
import ScaleQuestion from './ScaleQuestion';
import ChoiceQuestion from './ChoiceQuestion';
import { validateForm } from '../../utils/validation';
import {
  basicInfoQuestions,
  personalityQuestions,
  valueQuestions
} from '../../constants/questions';

const STEPS = {
  BASIC_INFO: 0,
  PERSONALITY: 1,
  VALUES: 2
};

const QuestionForm = ({ step, onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 重置表单数据
  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [step, initialData]);

  // 获取当前步骤的配置
  const getCurrentConfig = () => {
    switch (step) {
      case STEPS.BASIC_INFO:
        return basicInfoQuestions;
      case STEPS.PERSONALITY:
        return personalityQuestions;
      case STEPS.VALUES:
        return valueQuestions;
      default:
        return null;
    }
  };

  const config = getCurrentConfig();

  // 处理字段变更
  const handleFieldChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    // 清除该字段的错误
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  // 验证表单
  const validateCurrentStep = () => {
    if (step === STEPS.BASIC_INFO) {
      const result = validateForm(formData, config.fields);
      setErrors(result.errors);
      return result.isValid;
    }
    // 其他步骤的验证逻辑
    return true;
  };

  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (validateCurrentStep()) {
        await onSubmit(formData, step);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // 渲染基本信息表单
  const renderBasicInfo = () => (
    <div className={styles.fieldsContainer}>
      {config.fields.map(field => (
        <FormField
          key={field.id}
          field={field}
          value={formData[field.id]}
          onChange={handleFieldChange}
          error={errors[field.id]}
        />
      ))}
    </div>
  );

  // 渲染性格测试题
  const renderPersonalityTest = () => (
    <div className={styles.questionsContainer}>
      {config.questions.map(question => (
        <ScaleQuestion
          key={question.id}
          question={question}
          value={formData[question.id]}
          onChange={handleFieldChange}
          error={errors[question.id]}
        />
      ))}
    </div>
  );

  // 渲染价值观调查
  const renderValueSurvey = () => (
    <div className={styles.questionsContainer}>
      {config.questions.map(question => (
        <ChoiceQuestion
          key={question.id}
          question={question}
          value={formData[question.id]}
          onChange={handleFieldChange}
          error={errors[question.id]}
        />
      ))}
    </div>
  );

  // 根据步骤渲染不同的内容
  const renderStepContent = () => {
    switch (step) {
      case STEPS.BASIC_INFO:
        return renderBasicInfo();
      case STEPS.PERSONALITY:
        return renderPersonalityTest();
      case STEPS.VALUES:
        return renderValueSurvey();
      default:
        return null;
    }
  };

  if (!config) return null;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>{config.title}</h2>
        <p className={styles.formDescription}>{config.description}</p>
      </div>

      {renderStepContent()}

      <div className={styles.formActions}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? '提交中...' : '下一步'}
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm; 