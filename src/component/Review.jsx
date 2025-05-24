import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="review-container">
      <h1>المراجعات</h1>
      <p>آراء المستخدمين حول تجربتهم في مطعمنا.</p>

      <div className="review-list">
        <div className="review-item">
          <h3>أحمد علي</h3>
          <p>تجربة رائعة! الطعام لذيذ والخدمة ممتازة. أوصي بشدة.</p>
        </div>
        <div className="review-item">
          <h3>سارة محمد</h3>
          <p>أحببت الأجواء الهادئة وجودة المكونات المستخدمة في الأطباق.</p>
        </div>
        <div className="review-item">
          <h3>خالد حسن</h3>
          <p>مطعم مميز بخيارات صحية ولذيذة تناسب الجميع.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
