import React from 'react';
import styles from './style.module.css';

const ScaleQuestion = ({ 
  question, 
  value, 
  onChange,
  error 
}) => {
  const handleSelect = (selectedValue) => {
    onChange(question.id, selectedValue);
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionHeader}>
        <h3 className={styles.questionText}>{question.question}</h3>
      </div>

      <div className={styles.scaleContainer}>
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.scaleOption} ${value === option.value ? styles.selected : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            <span className={styles.scaleValue}>{option.value}</span>
            <span className={styles.scaleLabel}>{option.label}</span>
          </button>
        ))}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}

      <div className={styles.scaleLegend}>
        <span>非常不符合</span>
        <span>非常符合</span>
      </div>
    </div>
  );
};

export default ScaleQuestion; 