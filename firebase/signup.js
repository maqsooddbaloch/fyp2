var rname = document.getElementById('name');
var remail = document.getElementById('usemail')
var rpass = document.getElementById('uspass');

async function register(){
    var eml = remail.value;
    var ps = rpass.value;
    var nme = rname.value;
    try{
    var response = await signupwithfirebase(eml,ps);
    var uid = response.user.uid;
    var resp = await firebase
    .firestore()
    .collection('userdetail')
    .doc(uid)
    .set({  
        usname:nme,
        usemail:eml
    });
        eml.value = ''
        ps.value = ''
        nme.value = ''

    console.log('success')
    }
    catch(e)
    {
        alert(e.message);
    }
}
