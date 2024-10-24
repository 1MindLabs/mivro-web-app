import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBI61uFp3l0KDUkq1cLc_Xv2eVKYzIzyKo",
    authDomain: "mivro-d419f.firebaseapp.com",
    projectId: "mivro-d419f",
    storageBucket: "mivro-d419f.appspot.com",
    messagingSenderId: "876306647537",
    appId: "1:876306647537:web:afd47946c5991a26895c50",
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
