// src/component/ProtectedRoute.jsx
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ صح

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>جاري التحقق من المستخدم...</p>;

  return user ? children : <Navigate to="/login" />;
}
