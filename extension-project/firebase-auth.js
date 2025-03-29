// // firebase-auth.js
// // import { initializeApp } from "firebase/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import { getAuth, GoogleAuthProvider } from "firebase/auth/web-extension";
// // import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration (explicit keys)
// const firebaseConfig = {
//   apiKey: "AIzaSyARpn1ypwsrIwB53shF2K0AKvHjNABcpBA",
//   authDomain: "snowx-31c33.firebaseapp.com",
//   projectId: "snowx-31c33",
//   // ...other config values if needed
// };

// // Initialize Firebase and services
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// // export const db = getFirestore(app);

// // Get the parent frame's origin (this offscreen document is loaded in an iframe)
// const PARENT_FRAME = document.location.ancestorOrigins[0];

// // Use the Google Auth provider (or any provider you have enabled in Firebase Console)
// const PROVIDER = new GoogleAuthProvider();

// // Helper: send the auth response back to the parent frame via postMessage
// function sendResponse(result) {
//   globalThis.parent.self.postMessage(JSON.stringify(result), PARENT_FRAME);
// }
console.log("Firebase authentication code is commented out.");
// // Listen for postMessage events from your extension's background/service worker
// globalThis.addEventListener('message', ({ data }) => {
//   // Expect a message like { initAuth: true } to trigger sign-in.
//   if (data.initAuth) {
//     signInWithPopup(auth, PROVIDER)
//       .then(sendResponse)
//       .catch(sendResponse);
//   }
// });
