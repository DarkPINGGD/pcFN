<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDgBEFAVSwlIDlwsCC3-jn0NDoPXDZKQ",
  authDomain: "gd-holland-list.firebaseapp.com",
  projectId: "gd-holland-list",
  storageBucket: "gd-holland-list.appspot.com",
  messagingSenderId: "290417321670",
  appId: "1:290417321670:web:d295b3518312413d9019c7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
</script>
