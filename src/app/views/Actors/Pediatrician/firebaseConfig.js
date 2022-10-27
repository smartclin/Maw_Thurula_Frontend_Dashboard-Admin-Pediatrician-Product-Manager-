import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey:"AIzaSyA_yktoedGDBXEoQM8NIYVgJF_beeXpEgk",
    authDomain:"image-upload-195f9.firebaseapp.com",
    projectId:"image-upload-195f9",
    storageBucket:"image-upload-195f9",
    messagingSenderId:"1086257157067",
    appId:"1:1086257157067:web:64586a0a073453547f1c4e"
};

const app = initializeApp(firebaseConfig);
const storage=getStorage(app)
export default storage;
