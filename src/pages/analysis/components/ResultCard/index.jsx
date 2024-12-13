import React from 'react';
import styles from './style.module.css';
import Button from '../../../../components/Button';

const ResultCard = ({ data }) => {
  // 计算总体匹配度（示例算法）
  const calculateMatchScore = () => {
    return 85; // 实际项目中需要根据具体算法计算
  };

  // 生成维度分析结果（示例数据）
  const getDimensionAnalysis = () => {
    return [
      {
        name: '性格相容性',
        score: 88,
        description: '你们的性格特征展现出较高的互补性，这为长期关系奠定了良好基础。'
      },
      {
        name: '价值观契合度',
        score: 82,
        description: '在核心价值观方面你们有着相似的理念，这有助于减少未来可能的分歧。'
      },
      {
        name: '生活方式',
        score: 85,
        description: '你们对生活的理解和规划较为一致，这将有助于建立稳定的生活节奏。'
      }
    ];
  };

  const matchScore = calculateMatchScore();
  const dimensions = getDimensionAnalysis();

  return (
    <div className={styles.container}>
      {/* 总体匹配度 */}
      <div className={styles.scoreSection}>
        <div className={styles.scoreCircle}>
          <span className={styles.scoreNumber}>{matchScore}</span>
          <span className={styles.scoreUnit}>%</span>
        </div>
        <h2 className={styles.scoreTitle}>契合度</h2>
        <p className={styles.scoreDescription}>
          基于AI分析，你们的总体契合度较高，具有发展长期关系的潜力
        </p>
      </div>

      {/* 维度分析 */}
      <div className={styles.dimensionsSection}>
        <h3 className={styles.sectionTitle}>维度分析</h3>
        <div className={styles.dimensions}>
          {dimensions.map((dimension, index) => (
            <div key={index} className={styles.dimensionCard}>
              <div className={styles.dimensionHeader}>
                <h4 className={styles.dimensionName}>{dimension.name}</h4>
                <span className={styles.dimensionScore}>{dimension.score}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${dimension.score}%` }}
                />
              </div>
              <p className={styles.dimensionDescription}>
                {dimension.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 建议指导 */}
      <div className={styles.adviceSection}>
        <h3 className={styles.sectionTitle}>建议指导</h3>
        <div className={styles.adviceCard}>
          <h4 className={styles.adviceTitle}>关系发展建议</h4>
          <ul className={styles.adviceList}>
            <li>多创造共同体验的机会，增进彼此了解</li>
            <li>保持开放和诚实的沟通态度</li>
            <li>尊重对方的个人空间和习惯</li>
            <li>共同制定未来计划，建立共同目标</li>
          </ul>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className={styles.actions}>
        <Button onClick={() => window.print()}>
          保存报告
        </Button>
        <Button variant="secondary">
          分享结果
        </Button>
      </div>
    </div>
  );
};

export default ResultCard; 