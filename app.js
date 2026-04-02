import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Mostrar login
function showLogin() {
  document.getElementById('loginModal').style.display = "flex";
}

// Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById('loginModal').style.display = "none";
  } catch (err) {
    document.getElementById('loginError').innerText = "Error al iniciar sesión";
  }
}

// Logout
function logout() {
  signOut(auth);
}

// Cambiar UI según estado de sesión
onAuthStateChanged(auth, user => {
  if (user && user.email === "leagueoflegendslyt@hotmail.com") {
    document.getElementById('btnLogout').style.display = "inline";
    document.getElementById('btnLogin').style.display = "none";

    // Mostrar botones admin
    document.getElementById('adminTorneoBtns').innerHTML = `<button>Crear Torneo 🔥</button>`;
    document.getElementById('adminLigaBtns').innerHTML = `<button>Crear Liga 🏆</button>`;
    document.getElementById('adminPacks').innerHTML = `<button>Añadir Pack de Puntos 💰</button>`;
  } else {
    document.getElementById('btnLogout').style.display = "none";
    document.getElementById('btnLogin').style.display = "inline";
  }
});
const firebaseConfig = {
  apiKey: "AIzaSyDQRwBi6V-Grem0UOW891dMkdSgVu5TGlQ",
  authDomain: "lyt-83564.firebaseapp.com",
  projectId: "lyt-83564",
  storageBucket: "lyt-83564.firebasestorage.app",
  messagingSenderId: "304917981069",
  appId: "1:304917981069:web:3f25a390d245e922dd7fc4",
  measurementId: "G-4T1MTZBJFK"
};
