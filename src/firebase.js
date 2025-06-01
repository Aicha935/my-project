// src/firebaseConfig.js

// 🧩 استيراد الوظائف من Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";  // <-- إضافة المصادقة

// 🔐 إعدادات Firebase الخاصة بتطبيقك
const firebaseConfig = {
  apiKey: "AIzaSyDwPCkuMMSW50GnFoz0KZJWXjaSoKAUsbw",
  authDomain: "myreactwebapp-947e9.firebaseapp.com",
  projectId: "myreactwebapp-947e9",
  storageBucket: "myreactwebapp-947e9.appspot.com",
  messagingSenderId: "157014888176",
  appId: "1:157014888176:web:6da5db6fc6744f872e7c35",
  measurementId: "G-M5MMK77FSW"
};

// 🚀 تهيئة التطبيق وربط Firestore و Storage و Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);  // <-- تهيئة المصادقة

// 📤 تصدير قواعد البيانات والتخزين والمصادقة لاستخدامها في بقية المشروع
export { db, storage, auth };
