// src/component/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // ✅ استدعاء ملف CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ تم الدخول بنجاح");
      navigate("/");
    } catch (error) {
      alert("⚠️ خطأ في تسجيل الدخول: " + error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-section">
        <h2>تسجيل الدخول</h2>
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
        <button onClick={handleLogin}>دخول</button>

        <p>ما عندك حساب؟</p>
        <Link to="/register">
          <button className="secondary-button">إنشاء حساب جديد</button>
        </Link>
      </div>
    </div>
  );
}
