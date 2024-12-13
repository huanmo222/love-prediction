export const validateField = (value, rules) => {
  if (!rules) return { valid: true };

  const errors = [];

  // 必填验证
  if (rules.required && (!value || value.length === 0)) {
    errors.push(rules.required);
  }

  // 最大长度验证
  if (rules.maxLength && value && value.length > rules.maxLength.value) {
    errors.push(rules.maxLength.message);
  }

  // 最小长度验证
  if (rules.minLength && value && value.length < rules.minLength.value) {
    errors.push(rules.minLength.message);
  }

  // 自定义验证规则
  if (rules.validate) {
    const customError = rules.validate(value);
    if (customError) {
      errors.push(customError);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

export const validateForm = (values, fields) => {
  const errors = {};
  let isValid = true;

  fields.forEach(field => {
    if (field.validation) {
      const result = validateField(values[field.id], field.validation);
      if (!result.valid) {
        errors[field.id] = result.errors[0];
        isValid = false;
      }
    }
  });

  return {
    isValid,
    errors
  };
}; 