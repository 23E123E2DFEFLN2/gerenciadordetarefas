import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5dFIWzYmYv4dp0TPSfMjNT_JTv0Npru4",
    authDomain: "gerenciadordetarefas-62260.firebaseapp.com",
    projectId: "gerenciadordetarefas-62260",
    storageBucket: "gerenciadordetarefas-62260.appspot.com",
    messagingSenderId: "107618836775",
    appId: "1:107618836775:web:47699c11defa393f824902",
    measurementId: "G-JLQTL55G1J"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();