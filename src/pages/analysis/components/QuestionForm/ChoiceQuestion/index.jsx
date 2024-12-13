import React from 'react';
import styles from './style.module.css';

const ChoiceQuestion = ({
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

      <div className={styles.choicesContainer}>
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.choiceOption} ${value === option.value ? styles.selected : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            <div className={styles.choiceContent}>
              <div className={styles.choiceHeader}>
                <span className={styles.choiceIndicator} />
                <h4 className={styles.choiceLabel}>{option.label}</h4>
              </div>
              
              {option.description && (
                <p className={styles.choiceDescription}>
                  {option.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default ChoiceQuestion; 