/* eslint-disable no-unused-vars */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//here i want to import the seed file

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBVjKg4i-2h0c_Y98BQuzlctPxOc_1lz8o',
  authDomain: 'instagram-303e3.firebaseapp.com',
  projectId: 'instagram-303e3',
  storageBucket: 'instagram-303e3.appspot.com',
  messagingSenderId: '173537700483',
  appId: '1:173537700483:web:6c133ac062f680da9449b6',
  measurementId: 'G-HJZCBZHFDK',
};
const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// console.log('firebase', firebase);

//here i want to i want to call the seed file once

// seedDatabase(firebase);

export { firebase, FieldValue };
