
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
    var element = document.getElementById('addspace') 
    
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
    
    location.assign('/planevepanel/argon-dashboard-master/examples/venues.html')
    
} catch (error) {
    console.log(error.message)
}

}

window.addEventListener('load',venuenames)
async function venuenames(){
try {
    var table = document.getElementById('venuetable')
    var currentuser = localStorage.getItem('currentuser')
    console.log(table)
    var response = await firebase
    .firestore()
    .collection('venue-basic-info')
    .where('adminid','==', currentuser)
    .get()
    response.forEach(element => {

        table.innerHTML += `
        <tbody class="list" >
                            
        <tr>
            <th scope="row" class="name">
                <div class="media align-items-center">
                    <a href="#" class="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="https://us.123rf.com/450wm/donets/donets1508/donets150800333/43440158-stock-vector-vector-user-icon-of-man-in-business-suit.jpg?ver=6">
                    </a>
                    <div class="media-body">
                        <span class="mb-0 text-sm">${element.data().venuename}</span>
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
                        
                       
                        <button  onclick = 'update("${element.id}")' class="btn btn-info"> update</button>
                       
                    </div>
                </td>
            <td class="text-right">
                <div class="dropdown">
                    
                    <button onclick = 'removevenue("${element.id}")' class="btn btn-danger"> Delete</button>
                </div>
            </td>
            
           
        </tr>
        
      
        
    </tbody>

        
        `
       
    });
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


async function updateitem(){

var id = document.getElementById('ids')
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
        
        var respsonse = await firebase
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
            vennearest:nearest
        })

}




async function removevenue(e){

try {
    var response = await firebase 
    .firestore()
    .collection('venue-basic-info')
    .doc(e)
    .delete()

    location.assign('/planevepanel/argon-dashboard-master/examples/venues.html')

} catch (error) {
    console.log(error.message)
}

}