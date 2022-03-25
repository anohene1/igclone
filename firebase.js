// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlXJO-mVHPAhWMWHyd6dOL0x_xYCFUOkU',
  authDomain: 'igclone-3226a.firebaseapp.com',
  projectId: 'igclone-3226a',
  storageBucket: 'igclone-3226a.appspot.com',
  messagingSenderId: '712628385145',
  appId: '1:712628385145:web:3866034df8074b8e78eba8',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
