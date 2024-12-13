import React, { useState } from 'react';
import styles from './style.module.css';

const Suggestions = () => {
  // 模拟数据，后续从props传入
  const suggestions = [
    {
      category: '性格相处',
      priority: 'high',
      title: '注意倾听与表达',
      content: '你们在性格上有很好的互补性。建议在日常交流中，多一些耐心倾听，表达时也要照顾到对方的感受。保持开放和真诚的态度，这将帮助你们建立更深层的情感连接。',
      tips: [
        '选择合适的时机表达自己的想法',
        '给予对方足够的表达空间',
        '学会用对方能接受的方式沟通'
      ]
    },
    {
      category: '共同兴趣',
      priority: 'medium',
      title: '发展共同爱好',
      content: '你们在兴趣爱好上有不少共同点，这是很好的感情基础。建议可以一起规划一些有趣的活动，比如一起学习新技能、参加运动或者探索新的地方。',
      tips: [
        '定期安排共同活动时间',
        '尝试对方感兴趣的事物',
        '创造独特的共同回忆'
      ]
    },
    {
      category: '价值观',
      priority: 'high',
      title: '尊重差异',
      content: '在一些价值观念上可能存在差异，这是很正常的现象。重要的是学会理解和尊重彼此的观点，在重要决定上寻求共识。',
      tips: [
        '保持开放和包容的心态',
        '寻找价值观的共同点',
        '对分歧保持理性讨论的态度'
      ]
    }
  ];

  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpand = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>建议与指导</h2>
      
      <div className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className={`${styles.suggestionCard} ${styles[suggestion.priority]}`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.category}>{suggestion.category}</span>
              <h3 className={styles.cardTitle}>{suggestion.title}</h3>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.content}>{suggestion.content}</p>
              
              <div className={`${styles.tips} ${expandedItems.has(index) ? styles.expanded : ''}`}>
                <h4 className={styles.tipsTitle}>具体建议：</h4>
                <ul className={styles.tipsList}>
                  {suggestion.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className={styles.tipItem}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button 
              className={styles.expandButton}
              onClick={() => toggleExpand(index)}
            >
              {expandedItems.has(index) ? '收起' : '查看建议'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions; 