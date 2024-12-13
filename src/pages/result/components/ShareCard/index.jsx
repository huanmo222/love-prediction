import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import styles from './style.module.css';

const ShareCard = () => {
  const cardRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // 生成分享图片
  const generateImage = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    try {
      const element = cardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: null
      });
      
      const url = canvas.toDataURL('image/png');
      setShareUrl(url);
    } catch (error) {
      console.error('生成分享图片失败:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // 复制链接
  const copyLink = async () => {
    const link = window.location.href;
    try {
      await navigator.clipboard.writeText(link);
      alert('链接已复制到剪贴板');
    } catch (error) {
      console.error('复制链接失败:', error);
    }
  };

  // 分享平台配置
  const sharePlatforms = [
    {
      name: '微信',
      icon: '💚',
      action: () => {
        // 调用微信分享SDK
        console.log('分享到微信');
      }
    },
    {
      name: '朋友圈',
      icon: '👥',
      action: () => {
        console.log('分享到朋友圈');
      }
    },
    {
      name: '微博',
      icon: '🔴',
      action: () => {
        console.log('分享到微博');
      }
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>分享结果</h2>
      
      {/* 预览卡片 */}
      <div className={styles.previewCard} ref={cardRef}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>AI Love Prediction</h3>
          <p className={styles.cardSubtitle}>你们的匹配度分析报告</p>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.scorePreview}>
            <span className={styles.scoreNumber}>85</span>
            <span className={styles.scoreLabel}>匹配度</span>
          </div>
          
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightLabel}>性格匹配</span>
              <span className={styles.highlightValue}>非常合适</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightLabel}>共同兴趣</span>
              <span className={styles.highlightValue}>较多</span>
            </div>
          </div>
        </div>
        
        <div className={styles.cardFooter}>
          <p className={styles.footerText}>扫码或点击链接查看完整报告</p>
          {/* 这里可以添加二维码 */}
        </div>
      </div>

      {/* 分享操作区 */}
      <div className={styles.actions}>
        <button 
          className={styles.generateButton}
          onClick={generateImage}
          disabled={isGenerating}
        >
          {isGenerating ? '生成中...' : '生成分享图片'}
        </button>
        
        <div className={styles.platforms}>
          {sharePlatforms.map((platform, index) => (
            <button
              key={index}
              className={styles.platformButton}
              onClick={platform.action}
            >
              <span className={styles.platformIcon}>{platform.icon}</span>
              <span className={styles.platformName}>{platform.name}</span>
            </button>
          ))}
        </div>
        
        <button 
          className={styles.copyButton}
          onClick={copyLink}
        >
          复制链接
        </button>
      </div>
    </div>
  );
};

export default ShareCard; 