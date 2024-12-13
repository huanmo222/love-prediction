// 基础信息配置
export const basicInfoQuestions = {
  title: '基本信息',
  description: '请填写您的基本信息，这将帮助我们更好地了解您',
  fields: [
    {
      id: 'name',
      type: 'text',
      label: '姓名/昵称',
      placeholder: '请输入您的姓名或昵称',
      required: true,
      validation: {
        required: '请输入姓名',
        maxLength: {
          value: 20,
          message: '姓名不能超过20个字符'
        }
      }
    },
    {
      id: 'gender',
      type: 'radio',
      label: '性别',
      required: true,
      options: [
        { value: 'male', label: '男' },
        { value: 'female', label: '女' }
      ],
      validation: {
        required: '请选择性别'
      }
    },
    {
      id: 'age',
      type: 'select',
      label: '年龄范围',
      required: true,
      options: [
        { value: '18-24', label: '18-24岁' },
        { value: '25-30', label: '25-30岁' },
        { value: '31-35', label: '31-35岁' },
        { value: '36-40', label: '36-40岁' },
        { value: '40+', label: '40岁以上' }
      ],
      validation: {
        required: '请选择年龄范围'
      }
    },
    {
      id: 'occupation',
      type: 'select',
      label: '职业类型',
      options: [
        { value: 'tech', label: '技术/IT' },
        { value: 'finance', label: '金融/财务' },
        { value: 'medical', label: '医疗/卫生' },
        { value: 'education', label: '教育/培训' },
        { value: 'service', label: '服务业' },
        { value: 'other', label: '其他' }
      ]
    },
    {
      id: 'interests',
      type: 'checkbox',
      label: '兴趣爱好',
      options: [
        { value: 'sports', label: '运动健身' },
        { value: 'reading', label: '阅读' },
        { value: 'music', label: '音乐' },
        { value: 'travel', label: '旅行' },
        { value: 'food', label: '美食' },
        { value: 'movie', label: '电影' }
      ]
    }
  ]
};

// 性格测试题配置
export const personalityQuestions = {
  title: '性格测试',
  description: '请根据实际情况选择最符合您的选项',
  questions: [
    {
      id: 'p1',
      type: 'scale',
      question: '在社交场合，我通常是：',
      options: [
        { value: 1, label: '非常内向' },
        { value: 2, label: '偏内向' },
        { value: 3, label: '中立' },
        { value: 4, label: '偏外向' },
        { value: 5, label: '非常外向' }
      ]
    },
    // ... 其他性格测试题
  ]
};

// 价值观调查配置
export const valueQuestions = {
  title: '价值观调查',
  description: '请选择更符合您价值观的选项',
  questions: [
    {
      id: 'v1',
      type: 'choice',
      question: '对于工作与生活的平衡，您更倾向于：',
      options: [
        { 
          value: 'a', 
          label: '追求事业发展，愿意付出更多时间和精力在工作上',
          description: '相信通过努力工作可以实现更好的人生价值'
        },
        {
          value: 'b',
          label: '注重生活品质，希望有更多时间陪伴家人和发展兴趣爱好',
          description: '认为生活的意义不仅在于工作'
        }
      ]
    },
    // ... 其他价值观问题
  ]
}; 