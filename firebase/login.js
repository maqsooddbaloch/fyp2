var email = document.getElementById('lemail')
var password = document.getElementById('lpass');


async function login(){

    var em = email.value;
    var pass = password.value;
    try{
    var response = await signinwithfirebase(em, pass)
    var uid = response.user.uid;
    localStorage.setItem('currentuser',uid);
    // var crs = firebase.auth().currentUser
    // alert(firebase.auth().currentUser.uid)

    location.assign("/planevepanel/argon-dashboard-master/examples/sample.html");
 

}
    catch(e)
    {
       alert(e.message)
    }
}