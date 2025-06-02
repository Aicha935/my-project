import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Navs from './component/Navs/Navs';
import Home from './component/Home.js/Home';
import About from './component/About';
import Explore from './component/Explore';
import Review from './component/Review';
import Faq from './component/Faq';

import Login from './component/Login';
import Register from './component/Register';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // ✅ صح

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <Router>
      {/* ✨ عرض الـ Navs فقط إذا كان المستخدم مسجل دخول */}
      {user && <Navs />}
      <Routes>
        {/* صفحات عامة */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        {/* صفحات بدون حماية */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
