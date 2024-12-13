import React from 'react';
import styles from './style.module.css';

const FormField = ({ 
  field, 
  value, 
  onChange, 
  error 
}) => {
  const handleChange = (e) => {
    const val = e.target.type === 'checkbox' 
      ? Array.from(e.target.form.querySelectorAll(`input[name="${field.id}"]:checked`))
          .map(checkbox => checkbox.value)
      : e.target.value;
    
    onChange(field.id, val);
  };

  const renderField = () => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            id={field.id}
            name={field.id}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`${styles.input} ${error ? styles.error : ''}`}
          />
        );

      case 'select':
        return (
          <select
            id={field.id}
            name={field.id}
            value={value || ''}
            onChange={handleChange}
            className={`${styles.select} ${error ? styles.error : ''}`}
          >
            <option value="">请选择</option>
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className={styles.radioGroup}>
            {field.options.map(option => (
              <label key={option.value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={handleChange}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className={styles.checkboxGroup}>
            {field.options.map(option => (
              <label key={option.value} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name={field.id}
                  value={option.value}
                  checked={(value || []).includes(option.value)}
                  onChange={handleChange}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>{option.label}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>
        {field.label}
        {field.required && <span className={styles.required}>*</span>}
      </label>
      {renderField()}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default FormField; 