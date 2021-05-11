import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAFbvJ7hKOgfxdXsqQhwQDiqVzhm66I1zA",
    authDomain: "slack-clone-38416.firebaseapp.com",
    projectId: "slack-clone-38416",
    storageBucket: "slack-clone-38416.appspot.com",
    messagingSenderId: "406161490372",
    appId: "1:406161490372:web:c26166dfec57ea80bbe491"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};