import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/register-bg.jpg"; // تأكد أن الصورة موجودة
import "./Register.css"; // ملف التنسيق

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 تم التسجيل بنجاح!");
      navigate("/");
    } catch (error) {
      alert("❌ حدث خطأ: " + error.message);
    }
  };

  return (
    <div className="register-full-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="register-glass-box">
        <h2>إنشاء حساب جديد</h2>
        <input
          type="email"
          placeholder="الإيميل"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة السر"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>تسجيل</button>

        <p>عندك حساب؟</p>
        <Link to="/login">
          <button className="secondary-button">تسجيل الدخول</button>
        </Link>
      </div>
    </div>
  );
}