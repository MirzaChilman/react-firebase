import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAXx9t1v6WZxsaaNChGvPeqa8qFR5iV72w',
  authDomain: 'react-firebase-929ba.firebaseapp.com',
  databaseURL: 'https://react-firebase-929ba.firebaseio.com',
  projectId: 'react-firebase-929ba',
  storageBucket: 'react-firebase-929ba.appspot.com',
  messagingSenderId: '480554236175'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
