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
import ProtectedRoute from './component/ProtectedRoute';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // ✅ صح

function App() {
  const [user, loading] = useAuthState(auth);

  // أثناء التحقق من حالة المستخدم
  if (loading) return <p>جاري التحميل...</p>;

  return (
    <Router>
      {/* ✨ عرض الـ Navs فقط للمستخدم المسجل دخوله */}
      {user && <Navs />}
      <Routes>
        {/* صفحات عامة */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        {/* صفحات محمية */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProtectedRoute>
              <Faq />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
