

function checkauth()
{
  var uid = localStorage.getItem("currentuser");
  console.log(uid)
  var pathname = location.pathname;
  

 console.log(uid)
  if (uid){   
      location.assign("/planevepanel/argon-dashboard-master/examples/venues.html");
  }
 
}




