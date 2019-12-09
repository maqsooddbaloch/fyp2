async function logoutt() {
    try{
        // var response = await firebase.auth().signOut();
       
        localStorage.removeItem('currentuser')
        location.assign('/home.html')
    }
    catch(e)
    {
        console.log(e.message)
    }

  }

  