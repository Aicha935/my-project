import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.jpg';
import ingredients from './../../assets/2.png';
import Data from "../../Data";
import { Carousel, Modal, Button, Form } from 'react-bootstrap';
import item1 from './../../assets/item.jpg';
import item2 from './../../assets/item2.jpg';
import { db, auth } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  const handleShowModal = (item) => {
    if (!auth.currentUser) {
      alert("يجب تسجيل الدخول أولاً للقيام بالطلب.");
      return;
    }

    if (!formData.name || !formData.phone || !formData.address) {
      alert("يرجى استكمال بياناتك الشخصية أولاً.");
      return;
    }

    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", phone: "", address: "" });
  };

  const handleConfirmOrder = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        productId: selectedItem.id,
        productName: selectedItem.title,
        ...formData,
        createdAt: new Date()
      });
      alert("تم إرسال الطلب بنجاح!");
      handleCloseModal();
    } catch (error) {
      console.error("فشل إرسال الطلب: ", error);
      alert("حدث خطأ أثناء إرسال الطلب!");
    }
  };

  const blogItems = Data.map((item) => (
    <div className='col-md-4' key={item.id}>
      <div className='box'>
        <img src={item.img} alt={item.title} />
        <h5>{item.title}</h5>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
      </div>
      <button onClick={() => handleShowModal(item)}>اطلب الآن</button>
    </div>
  ));

  return (
    <Fragment>
      <div className="home-wrapper">
        <Header />

        {/* إحصائيات */}
        <section className='numbers'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-md-3'><h2>+1500</h2><h6>زبون سعيد</h6></div>
              <div className='col-md-3'><h2>+320</h2><h6>طبق مقدم يوميًا</h6></div>
              <div className='col-md-3'><h2>+25</h2><h6>شاف محترف</h6></div>
              <div className='col-md-3'><h2>+10</h2><h6>سنوات من الخبرة</h6></div>
            </div>
          </div>
        </section>

        {/* الفخر بالجودة */}
        <section className='pride'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'><img src={prideimg} alt='مكونات طبيعية' /></div>
              <div className='col-md-6'>
                <h2>نفخر بصناعة الطعام الحقيقي باستخدام أجود المكونات الطبيعية</h2>
                <p>نؤمن أن الطعام الجيد يبدأ من اختيار المكونات بعناية...</p>
              </div>
            </div>
          </div>
        </section>

        {/* المكونات */}
        <section className='ingredients'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <h2>نحضر كل شيء بأيدينا وبأجود المكونات الممكنة</h2>
                <p>نحن نؤمن أن سر الطعم الحقيقي يبدأ من الجودة...</p>
                <ul>
                  <li>مكونات طازجة وطبيعية فقط.</li>
                  <li>وصفات مبتكرة وغنية بالنكهات.</li>
                  <li>جودة عالية في كل مرحلة.</li>
                </ul>
                <a href='/explore' className='btn btn-primary mt-3'>اكتشف المزيد</a>
              </div>
              <div className='col-md-6'><img src={ingredients} alt="تحضير الطعام" /></div>
            </div>
          </div>
        </section>

        {/* بارالاكس */}
        <section className='paralex'>
          <div className='container text-center'>
            <h2>في عالم الطعام تختفي الفروق</h2>
            <p>حين نشبع قلوب الناس قبل بطونهم...</p>
            <a href='/story' className='btn btn-light'>اكتشف قصتنا وتذوق الفرق معنا</a>
          </div>
        </section>

        {/* المنتجات */}
        <section className='blogs'>
          <div className='container text-center'>
            <h2>اكتشف أطعمتنا</h2>
            <p>استمتع بتجربة نكهات فريدة...</p>
            <div className='row'>{blogItems}</div>
          </div>
        </section>

        {/* الشهادات */}
        <section className="sliderx">
          <div className='container'>
            <h2 className='text-center'>الشهادات</h2>
            <Carousel>
              <Carousel.Item>
                <img src={item1} className='d-block w-100' alt="ناديا خليل" />
                <Carousel.Caption>
                  <p>ناديا خليل</p>
                  <span>أخيرًا وجدت مطعمًا يجمع بين الطعم اللذيذ والتغذية السليمة...</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={item2} className='d-block w-100' alt="ليث الزين" />
                <Carousel.Caption>
                  <p>ليث الزين</p>
                  <span>هذا المطعم غيّر مفهوم الأكل الصحي بالنسبة لي...</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        {/* نافذة الطلب */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center">🛒 نموذج الطلب</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>👤 الاسم الكامل</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="اكتب اسمك الكامل"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>📞 رقم الهاتف</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="اكتب رقم هاتفك"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>📍 العنوان</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="اكتب عنوانك بالتفصيل"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="outline-danger" onClick={handleCloseModal}>
              ❌ إلغاء
            </Button>
            <Button variant="success" onClick={handleConfirmOrder}>
              ✅ تأكيد الطلب
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Home;
