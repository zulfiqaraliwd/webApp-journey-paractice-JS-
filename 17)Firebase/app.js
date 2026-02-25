  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import dotenv from "dotenv";
dotenv.config();

  
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "signup-app-b2820.firebaseapp.com",
    projectId: "signup-app-b2820",
    storageBucket: "signup-app-b2820.firebasestorage.app",
    messagingSenderId: "263985792840",
    appId: "1:263985792840:web:7c5f8153ff83d1ee4e957d",
    measurementId: "G-SN19JVRYG7"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  

  async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    alert("Signup successful: " + userCredential.user.uid);
  } catch (error) {
    alert(error.message);
  }
}

const reg = document.getElementById("signup")
reg.addEventListener('click',signup)





  
