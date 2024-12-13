import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import styles from './style.module.css';

const Analysis = () => {
  const chartRef = useRef(null);
  
  // 模拟数据，后续从props传入
  const dimensions = [
    { name: '性格匹配', score: 85 },
    { name: '兴趣相投', score: 90 },
    { name: '价值观', score: 75 },
    { name: '生活方式', score: 80 },
    { name: '沟通方式', score: 88 }
  ];

  useEffect(() => {
    // 初始化图表
    const chart = echarts.init(chartRef.current);
    
    // 图表配置
    const option = {
      radar: {
        indicator: dimensions.map(dim => ({
          name: dim.name,
          max: 100
        })),
        splitNumber: 4,
        axisName: {
          color: 'var(--color-text-regular)',
          fontSize: 14
        },
        splitLine: {
          lineStyle: {
            color: 'var(--color-border)'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.3)']
          }
        }
      },
      series: [{
        type: 'radar',
        data: [{
          value: dimensions.map(dim => dim.score),
          name: '匹配度分析',
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            width: 2
          },
          areaStyle: {
            color: 'rgba(99, 102, 241, 0.2)'
          },
          itemStyle: {
            color: '#6366F1'
          }
        }]
      }]
    };

    // 设置图表配置
    chart.setOption(option);

    // 响应式处理
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>多维度分析</h2>
      
      <div className={styles.content}>
        <div className={styles.chart} ref={chartRef}></div>
        
        <div className={styles.details}>
          {dimensions.map((dim, index) => (
            <div key={index} className={styles.dimensionItem}>
              <div className={styles.dimensionHeader}>
                <span className={styles.dimensionName}>{dim.name}</span>
                <span className={styles.dimensionScore}>{dim.score}分</span>
              </div>
              <div className={styles.dimensionBar}>
                <div 
                  className={styles.dimensionProgress}
                  style={{ width: `${dim.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis; 