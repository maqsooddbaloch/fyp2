var firebaseConfig = {
    apiKey: "AIzaSyBlGhVtrH6iW_59ypyDCJT4Mm8MG5fDQJo",
    authDomain: "fa16fyp-b0e85.firebaseapp.com",
    databaseURL: "https://fa16fyp-b0e85.firebaseio.com",
    projectId: "fa16fyp-b0e85",
    storageBucket: "fa16fyp-b0e85.appspot.com",
    messagingSenderId: "155890102489",
    appId: "1:155890102489:web:95e20e9c0e761e92e40ec8",
    measurementId: "G-ZZ3SL31Q5H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  async function signupwithfirebase(email,password){
    try{
        var response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return response;
    }
    catch(e)
    {
        throw e;
    }


  }



  async function signinwithfirebase(email,password){
    try{
        var response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response;
    }
    catch(e)
    {
        throw e;
    }


  }