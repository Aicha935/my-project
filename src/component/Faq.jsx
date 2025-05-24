import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h1>الأسئلة الشائعة</h1>
      <p>هنا بعض الأسئلة المتكررة وإجاباتها لمساعدتك.</p>

      <div className="faq-item">
        <h3>ما هي أوقات العمل في المطعم؟</h3>
        <p>نحن نفتح يوميًا من الساعة 12 ظهرًا حتى 11 مساءً.</p>
      </div>

      <div className="faq-item">
        <h3>هل تتوفر خيارات طعام صحية؟</h3>
        <p>نعم، نوفر قائمة خاصة بالأطعمة الصحية والمكونات الطازجة.</p>
      </div>

      <div className="faq-item">
        <h3>هل يمكنني الحجز مسبقًا؟</h3>
        <p>بالطبع، يمكنك الحجز عبر الهاتف أو من خلال موقعنا الإلكتروني.</p>
      </div>

      <div className="faq-item">
        <h3>هل يوجد موقف سيارات بالقرب من المطعم؟</h3>
        <p>نعم، هناك موقف سيارات مجاني متاح للعملاء.</p>
      </div>
    </div>
  );
};

export default Faq;
