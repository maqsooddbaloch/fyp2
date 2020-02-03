




async function sendreferal(){
    
    try{
var id = localStorage.getItem('currentuser')
var name = document.getElementById('input-username')
var custemail  = document.getElementById('input-email')
var startdate  = document.getElementById('startdate')
var enddate = document.getElementById('enddate')
var address  = document.getElementById('input-address')
var city  = document.getElementById('input-city')
var country = document.getElementById('input-country')
var postalcode = document.getElementById('input-postal-code')
var budget = document.getElementById('input-budget')
var guests = document.getElementById('input-guest')
var catering = document.getElementById('input-catering')
 var textarea = document.getElementById('input-textarea')
var considered = document.getElementById('input-venue-considered')

    var response = await firebase
    .firestore()
    .collection('referal')
    .add({
        admid:id,
        usname:name.value,
        usemail:custemail.value,
        sdate:startdate.value,
        edate:enddate.value,
        usaddress:address.value,
        uscity:city.value,
        uscountry:country.value,
        uspostalcode:postalcode.value,
        usbudget:budget.value,
        usguests:guests.value,
        uscatering:catering.value,
        ustextarea:textarea.value,
        usconsiderable:considered.value
    })

    console.log('data submitted')
}

    catch(error){
        console.log(error.message)

    }

}



function addinput(){

try {
    var element = document.getElementById('addspacee') 
    
    element.innerHTML = `

    <input type="text" id="input-space" class="form-control "  placeholder="Venue name">
    &nbsp;&nbsp;&nbsp;<button onclick="addspace()" class="btn btn-primary mt-2">Add</button>
    `

    
} catch (error) {
    console.log(error.message)
}

}


async function addspace(){
try {
    var adminid = localStorage.getItem('currentuser')
    var venuename = document.getElementById('input-space').value
    var response = await firebase
    .firestore()
    .collection('venue-basic-info')
    .add({
        adminid,
        venuename
    })
    document.getElementById('input-space').value = ''
    
} catch (error) {
    console.log(error.message)
}

}

window.addEventListener('load',venuenames)
function venuenames(){
try {
    var table = document.getElementById('venuetable')
    var currentuser = localStorage.getItem('currentuser')

        firebase
        .firestore()
        .collection("venue-basic-info")
        .where('adminid','==', currentuser)
        .onSnapshot(snapshot => {
          table.innerHTML = "";
    
         
          snapshot.forEach(doc => {
            const data = doc.data();
                    table.innerHTML += `
        <tbody class="list" >
                            
        <tr>
            <th scope="row" class="name">
                <div class="media align-items-center">
                    <a href="#" class="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="https://us.123rf.com/450wm/donets/donets1508/donets150800333/43440158-stock-vector-vector-user-icon-of-man-in-business-suit.jpg?ver=6">
                    </a>
                    <div class="media-body">
                        <span class="mb-0 text-sm">${data.venuename}</span>
                    </div>
                </div>
            </th>
           
            <td class="status">
                <br>
                <label for="" class="" ><p>Unpublished</p></label>
                <label class="custom-toggle" style="margin-bottom: -6px !important;">
                    <input id="canbringfood" type="checkbox" >
                    <span class="custom-toggle-slider rounded-circle"></span>
                  </label>
            </td>
   
            <td class="text-right">
                    <div class="dropdown">
                        
                       
                        <button  onclick = 'update("${doc.id}")' class="btn btn-info"> update</button>
                       
                    </div>
                </td>
            <td class="text-right">
                <div class="dropdown">
                    
                    <button onclick = 'removevenue("${doc.id}")' class="btn btn-danger"> Delete</button>
                </div>
            </td>
            
           
        </tr>
        
      
        
    </tbody>

        `

          });})


} catch (error) {
    console.log(error.message)
}

}




async function update(e){
    try {

        var element = e;
        localStorage.setItem('currentupdateitem',e)
 
        console.log(element)
        location.assign('/planevepanel/argon-dashboard-master/examples/sample.html')

    } catch (error) {
    alert(error.message)
}



}





function updateitem(){
    var img = document.getElementById('venue-image')

    var crnt = localStorage.getItem('currentupdateitem')
           var admid = localStorage.getItem('currentuser')
           var name = document.getElementById('venue-name').value;
           var vendescription = document.getElementById('venue-description').value;
           var address = document.getElementById('venue-address').value;
           var address2 = document.getElementById('venue-address2').value
           var neighborhood = document.getElementById('venue-neighborhood').value
           var country = document.getElementById('venue-country').value
           var city = document.getElementById('venue-city').value
           var postcode = document.getElementById('venue-postcode').value
           var nearest = document.getElementById('venue-nearest').value
           var venuetype = document.getElementById('venue-Type').value
           var numberofpeople = document.getElementById('venue-number').value
   
   
   const imgname = Math.random().toString();
   const imageRef = firebase
     .storage()
     .ref()
     .child(`images/${imgname}.png`);
   
   imageRef
     .put(img.files[0])
     .then(response => {
       console.log("uploaded");
       return imageRef.getDownloadURL();
     })
     .then(url => {
      
           firebase
             .firestore()
           .collection('venue-basic-info')
           .doc(crnt)
           .set({
               adminid:admid,
               venuename:name,
               venuedescription:vendescription,
               venaddress:address,
               venaddress2:address2,
               venneighborhood:neighborhood,
               vencountry:country,
               vencity:city,
               venpostcode:postcode,
               vennearest:nearest,
               venuetype,
               numberofpeople,
               profileimage:url
           })
   
     
     })
     .catch(err => {
       console.log("err =>", err);
     });                      
            
}



async function addfeatures(){
    var element = document.getElementById('featuretext').value;    
    // var elem = document.getElementById('addfeatures');
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('features')
        .add({
            featurename:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }
} 


async function addfoodanddrink(){
    var element = document.getElementById('foodanddrink').value;    
    // var elem = document.getElementById('foodanddrink');
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('foodanddrink')
        .add({
            foodanddrink:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }



} 

async function addwelcomes(){
    var element = document.getElementById('welcomes').value;    
    // var elem = document.getElementById('welcomes');
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('welcomes')
        .add({
            welcomes:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }



} 

async function addlicensing(){
    var element = document.getElementById('licensing').value;    
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('licensing')
        .add({
            licensing:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }



} 

async function addcapacities(){
    var element = document.getElementById('capacitites').value;    
    // var elem = document.getElementById('addfeatures');
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('capacitites')
        .add({
            capacitites:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }



} 


async function add_space(){
    var element = document.getElementById('space').value;    
    // var elem = document.getElementById('addfeatures');
    var companyid = localStorage.getItem('currentupdateitem')
    try {
        var response = await firebase 
        .firestore()
        .collection('space')
        .add({
            space:element,
            companyid
        })
    } catch (error) {
        console.log(error.message)
    }



} 

window.addEventListener('load',getvenuedetails)
async function getvenuedetails()
{
try {
    var features  = document.getElementById('addfeatures')
    var fooddrink = document.getElementById('addfood')
    var welcomes = document.getElementById('addwelcomes')
    var licensing = document.getElementById('addlicensing')
    var capacitites = document.getElementById('addcapacities')
    var space = document.getElementById('addspaces')
    var companyid = localStorage.getItem('currentupdateitem')


    
    var featresp = firebase
    .firestore()
    .collection('features')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
        features.innerHTML = ''
        resp.forEach(data=>{
   features.innerHTML += `
   <div class="container row "><label for=""><h5>&nbsp;${data.data().featurename}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   `         
    })
    })





    
    var foodresp = firebase
    .firestore()
    .collection('foodanddrink')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
        fooddrink.innerHTML = ''

        resp.forEach(data=>{
            fooddrink.innerHTML += `
   <div class="container row "><label for=""><h5>&nbsp;${data.data().foodanddrink}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   `         

        })
    })


    
    var welcresp = firebase
    .firestore()
    .collection('welcomes')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
        welcomes.innerHTML = ''
        resp.forEach(data=>{
            welcomes.innerHTML += `
   <div class="container row "><label for=""><h5>&nbsp;${data.data().welcomes}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   `         

        })
    })


    
    var licenseresp = firebase
    .firestore()
    .collection('licensing')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
            licensing.innerHTML = ''
        resp.forEach(data=>{
            licensing.innerHTML += `
   <div class="container row "><label for=""><h5>&nbsp;${data.data().licensing}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   `         

        })
    })


    var capacityresp = firebase
    .firestore()
    .collection('capacitites')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
            capacitites.innerHTML = ''
        resp.forEach(data=>{
            capacitites.innerHTML += `
   <div class="container row "><label for=""><h5>&nbsp;${data.data().capacitites}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   `         

        })
    })


    var spaceresp = firebase
    .firestore()
    .collection('space')
    .where('companyid','==',companyid)
    .onSnapshot(resp =>{
        space.innerHTML = ''
        resp.forEach(data=>{
   space.innerHTML += `

   <div class="container row "><label for=""><h5>&nbsp;${data.data().space}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  
   
   `         

        })
    })



} catch (error) {
    console.log(error)    
}

}

// {/* <div class="container row "><label for=""><h5>&nbsp;${element}</h5></label><button  class="btn btn-danger ml-auto p-2 mb-2">delete</button></div>  */}



async function removevenue(e){

try {
    var response = await firebase 
    .firestore()
    .collection('venue-basic-info')
    .doc(e)
    .delete()

    
} catch (error) {
    console.log(error.message)
}

}

window.addEventListener('load',venueslist)
async function venueslist(){
try {




    var element = document.getElementById('venuescards');
    var indexsearch = localStorage.getItem('indexsearch')
    var city = localStorage.getItem('indexcity')
    var country = localStorage.getItem('indexcountry')
    var type = localStorage.getItem('indextype')
    if(indexsearch == 0)
    {
        element.innerHTML = '';
        var inputtype = document.getElementById('inputtype')
        var inputcity = document.getElementById('inputcity')


        inputtype.value = type
        inputcity.value = city



        localStorage.setItem('indexsearch',1)

        firebase
    .firestore()
    .collection("venue-basic-info")
    .where('vencity','==',city)
     .where('vencountry','==',country)
     .where('venuetype','==',type)
    .onSnapshot(snapshot => {
      element.innerHTML = "";    
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(data)
                element.innerHTML += `
                <div class="col-md-4">
                <div class="card card-blog">
                    <div class="card-image">
                        <a href="./onevenue.html">
                            <img class="img rounded" style="height: 200px;" src="${data.profileimage}">
                        </a>
                    </div>

                    <div class="card-body">
                        <h6 class="category text-primary">${data.venuename}</h6>

                      
                        <p class="card-description">
                            As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...
                        </p>
                        <div class="card-footer">
                          
                            
                        </div>
                    </div>
                </div>
            </div>
      `
      })
    })
 

    }
    else{

 firebase
    .firestore()
    .collection("venue-basic-info")
    .onSnapshot(snapshot => {
      element.innerHTML = "";

     
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(data)
                element.innerHTML += `
                <div class="col-md-4">
                <div class="card card-blog">
                    <div class="card-image">
                        <a href="./onevenue.html">
                            <img class="img rounded" style="height: 200px;" src="${data.profileimage}">
                        </a>
                    </div>

                    <div class="card-body">
                        <h6 class="category text-primary">${data.venuename}</h6>

                      
                        <p class="card-description">
                            As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...
                        </p>
                        <div class="card-footer">
                          
                         
                        </div>
                    </div>
                </div>
            </div>
      `
      })
    })
    }
} catch (error) {
    console.log(error.message)
}




}



async function basicsearch(){
try {
    var element2 = document.getElementById('venuescards');

    
     var element = document.getElementById('inputcity').value;
    //  var people = document.getElementById('inputnumberofpeople').value;
   var type = document.getElementById('inputtype').value;
     console.log(element2)

     console.log(element,type)

   

   
 firebase
 .firestore()
 .collection("venue-basic-info")
 .where('vencity','==',element)
// .where('numberofpeople','==', people)
 .where('venuetype','==',type)
 .onSnapshot(snapshot => {
   element2.innerHTML = "";

  
   snapshot.forEach(doc => {
     const data = doc.data();
     console.log(data)
             element2.innerHTML += `
             <div class="col-md-4">
             <div class="card card-blog">
                 <div class="card-image">
                     <a href="./onevenue.html">
                         <img class="img rounded" style="height: 200px;" src="${data.profileimage}">
                     </a>
                 </div>

                 <div class="card-body">
                     <h6 class="category text-primary">${data.venuename}</h6>

                   
                     <p class="card-description">
                         As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...
                     </p>
                     <div class="card-footer">
                       
                     
                     </div>
                 </div>
             </div>
         </div>
   `
   })
 })

    
} catch (error) {
    console.log(error.message)
}


}

indexsearch = () =>{
    
    try {
        console.log('index working')

          var city = document.getElementById('inputcity').value
          var type = document.getElementById('inputtype').value
          var country = document.getElementById('inpcountry').value

           localStorage.setItem('indexcity',city)
           localStorage.setItem('indextype',type)  
           localStorage.setItem('indexcountry',country)        
           localStorage.setItem('indexsearch',0)
          location.assign('./venues.html')
           
} catch (error) {
    console.log(error.message)
}

}
 sendbooking = () =>{

try {
    alert('your request has sent')
} catch (error) {
    alert(error.message)
    
}

}


logoutt = () =>{
    localStorage.removeItem('currentuser');
    location.assign('')
}






    
//  firebase
//  .firestore()
//  .collection("venue-basic-info")
//  .where('vencity','==','Lahore')
//  .where('numberofpeople','==',22)
//  .where('venuetype','==','Conference')
//  .onSnapshot(snapshot => {
//    element2.innerHTML = "";

  
//    snapshot.forEach(doc => {
//      const data = doc.data();
//      console.log(data)
//              element2.innerHTML += `
//              <div class="col-md-4">
//              <div class="card card-blog">
//                  <div class="card-image">
//                      <a href="./onevenue.html">
//                          <img class="img rounded" style="height: 200px;" src="${data.profileimage}">
//                      </a>
//                  </div>

//                  <div class="card-body">
//                      <h6 class="category text-primary">${data.venuename}</h6>

                   
//                      <p class="card-description">
//                          As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...
//                      </p>
//                      <div class="card-footer">
                       
//                          <div class="stats stats-right">
//                              <i class="now-ui-icons tech_watch-time"></i> 5 min read
//                          </div>
//                      </div>
//                  </div>
//              </div>
//          </div>
//    `
//    })
//  })




