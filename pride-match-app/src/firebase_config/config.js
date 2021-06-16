import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAQFagKNUfFEkJl4bEKInN1Pp2TUCc_Fvw",
    authDomain: "tlhacks-pridemaker.firebaseapp.com",
    projectId: "tlhacks-pridemaker",
    storageBucket: "tlhacks-pridemaker.appspot.com",
    messagingSenderId: "674053831867",
    appId: "1:674053831867:web:53de98a9b9f769fceabd9e",
    measurementId: "G-LW0WW5TYRL"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;