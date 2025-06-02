import React, { useState, useEffect } from "react";
import './Header.css';
import { db, auth } from '../../firebase'; // تأكدي أن المسار صحيح
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: ''
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // التحقق من حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleOrderClick = () => {
    if (!user) {
      navigate(`/login?redirect=${location.pathname}`);
    } else {
      setShowForm(true);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanName = formData.name.replace(/\s+/g, '');
    const customId = `${cleanName}_${formData.phone}_${Date.now()}`;

    try {
      await setDoc(doc(db, 'orders', customId), {
        ...formData,
        createdAt: serverTimestamp(),
        userId: user.uid // ربط الطلب بحساب المستخدم
      });
      alert('✅ تم تسجيل طلبك بنجاح!');
      setShowForm(false);
      setFormData({ name: '', phone: '', orderType: '' });
    } catch (error) {
      alert('❌ حدث خطأ، حاول مرة أخرى.');
      console.error(error);
    }
  };

  return (
    <header>
      <div className='container'>
        <div className='col-md-6'>
          <h2>.الخيارات الغذائية السليمة هي استثمار حقيقي في صحتك</h2>
          <p>.الصحة تبدأ من الطبق فاختر ما يغذي جسمك ويقوي مناعتك</p>

          {!showForm && (
            <>
              <button onClick={handleOrderClick}>اطلب الآن</button>
              <button>اعرف المزيد</button>
            </>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="order-form">
              <div>
                <label>الاسم:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>رقم الهاتف:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>نوع الطلب:</label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  required
                >
                  <option value="">اختر نوع الطلب</option>
                  <option value="طعام">طعام</option>
                  <option value="مشروبات">مشروبات</option>
                  <option value="وجبات سريعة">وجبات سريعة</option>
                </select>
              </div>
              <button type="submit">تأكيد الطلب</button>
              <button type="button" onClick={() => setShowForm(false)}>إلغاء</button>
            </form>
          )}
        </div>
        <div className='col-md-6'>
          {/* يمكنكِ إضافة صورة هنا لاحقاً */}
        </div>
      </div>
    </header>
  );
};

export default Header;
