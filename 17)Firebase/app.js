  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyDbIRUm3YJDiUgn77a4_4S2jGvYISeyVB4",
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
window.signup = async function() {
  const name = document.getElementById("name").value; // ← add this
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optional: save name in Firestore
    // await setDoc(doc(db, "users", user.uid), { name, email, uid: user.uid });

    alert("Signup successful! User UID: " + user.uid);
  } catch (error) {
    alert("Error: " + error.message);
  }
}





  
