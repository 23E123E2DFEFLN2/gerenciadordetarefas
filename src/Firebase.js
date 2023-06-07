/**
 * Created by bikramkawan on 9/1/17.
 */
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
   apiKey: "AIzaSyB5dFIWzYmYv4dp0TPSfMjNT_JTv0Npru4",
  authDomain: "gerenciadordetarefas-62260.firebaseapp.com",
  databaseURL: "https://gerenciadordetarefas-62260-default-rtdb.firebaseio.com",
  projectId: "gerenciadordetarefas-62260",
  storageBucket: "gerenciadordetarefas-62260.appspot.com",
  messagingSenderId: "107618836775",
  appId: "1:107618836775:web:47699c11defa393f824902",
  measurementId: "G-JLQTL55G1J"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');