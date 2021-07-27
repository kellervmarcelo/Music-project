import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzOVcNtymMnRjRfekh29EDhRvAqQEJT9s',
  authDomain: 'music-4a88b.firebaseapp.com',
  projectId: 'music-4a88b',
  storageBucket: 'music-4a88b.appspot.com',
  appId: '1:376209977341:web:c3e2ca028e1b8ca123f394',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
