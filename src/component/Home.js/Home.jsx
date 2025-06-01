import React, { Fragment, useState } from "react";
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
import { signOut } from "firebase/auth";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const handleShowModal = (item) => {
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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("تم تسجيل الخروج");
      })
      .catch((error) => {
        console.error("خطأ أثناء تسجيل الخروج:", error);
      });
  };

  const blogitem = Data.map((item) => {
    return (
      <div className='col-md-4' key={item.id}>
        <div className='box'>
          <img src={item.img} alt={item.title} />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button onClick={() => handleShowModal(item)}>اطلب الان</button>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="home-wrapper">
        <button onClick={handleLogout} className="logout-btn">تسجيل الخروج</button>
        <Header />
        <section className='numbers'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'><h2>+1500</h2><h6>زبون سعيد</h6></div>
              <div className='col-md-3'><h2>+320</h2><h6>طبق مقدم يوميا</h6></div>
              <div className='col-md-3'><h2>+25</h2><h6>شاف محترف</h6></div>
              <div className='col-md-3'><h2>+10</h2><h6>سنوات من الخبرة</h6></div>
            </div>
          </div>
        </section>

        <section className='pride'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'><img src={prideimg} alt='prideimg' /></div>
              <div className='col-md-6'>
                <h2>نفخر بصناعة الطعام الحقيقي بستخدام اجود المكونات الطبيعية</h2>
                <p>نؤمن ان الطعام الجيد يبدا من اختيار المكونات بعناية...</p>
              </div>
            </div>
          </div>
        </section>

        <section className='ingredients'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h2>نحضر كل شئ بايدينا وباجود المكونات الممكنة</h2>
                <p>نحن نامن ان سر الطعم الحقيقي يبدا من الجودة...</p>
                <ul>
                  <li>نستخدم مكونات طازجة وطبيعية فقط.</li>
                  <li>وصفاتنا مبتكرة وغنية بالنكهات.</li>
                  <li>نحرص على الجودة في كل مرحلة.</li>
                </ul>
                <button><a href='Explore'>اكتشف المزيد</a></button>
              </div>
              <div className='col-md-6'><img src={ingredients} alt="ingredients" /></div>
            </div>
          </div>
        </section>

        <section className='paralex'>
          <div className='contraine'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>في عالم الطعام تختفي الفروق</h2>
                <p>حين نشبع قلوب الناس قبل لبطونهم...</p>
                <a href='#'>اكتشف قصتنا وتذوق الفرق معانا</a>
              </div>
            </div>
          </div>
        </section>

        <section className='blogs'>
          <div className='centraine'>
            <div className='row'>
              <div className='col-md-12'><h2>اكتشف أطعمتنا</h2><p>استمتع بتجربة نكهات فريدة...</p></div>
            </div>
            <div className='row'>{blogitem}</div>
          </div>
        </section>

        <section className="sliderx">
          <div className='container'>
            <div className='row'><div className='col-md-12'><h2>الشهادات</h2></div></div>
            <div className='row'>
              <div className='col-md-12'>
                <Carousel>
                  <Carousel.Item>
                    <img src={item1} alt="ناديا خليل" />
                    <Carousel.Caption>
                      <p>ناديا خليل</p>
                      <span>أخيرًا وجدت مطعمًا يجمع بين الطعم اللذيذ والتغذية السليمة...</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={item2} alt="ليث الزين" />
                    <Carousel.Caption>
                      <p>ليث الزين</p>
                      <span>هذا المطعم غيّر مفهوم الأكل الصحي بالنسبة لي...</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* نافذة الطلب */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>نموذج الطلب</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>الاسم الكامل</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="اكتب اسمك الكامل"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="اكتب رقم هاتفك"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="اكتب عنوانك بالتفصيل"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>إلغاء</Button>
            <Button variant="primary" onClick={handleConfirmOrder}>تأكيد الطلب</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
}

export default Home;
