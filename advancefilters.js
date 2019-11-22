var advfilters = document.getElementById('adfilters')
var advbutton = document.getElementById('advbutton')

showadvancefilters = () => {


  advfilters.innerHTML = `

  <div class="row">
  <div class="col-lg-3 col-md-4 col-sm-6">
  
  
  
  <div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> can bring own food
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div>
  
  <div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> catering equipment availble
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div><div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> can provied kosher
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div><div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> can provide halal
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div><div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> venue can provide catering
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div>
  </div>
  
  <div class="col-lg-3 col-md-4 col-sm-6">
  
  
  
  <div class="form-check">
  <label class="form-check-label">
    <input class="form-check-input inputborder" type="checkbox" value="" unchecked> Professional Kitchen
    <span class="form-check-sign">
      <span class="check"></span>
    </span>
  </label>
  </div>
  
  

  </div>
  </div>
  
  </br>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4">Parking</label>
    <input type="number" class="form-control inputborder" id="inputPassword4" placeholder="Spaces">        
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4">Accomodation</label>
    <input type="number" class="form-control inputborder" id="inputPassword4" placeholder="Rooms">            
  </div>
</div>

<div class="form-row">
<div class="form-group col-md-6">
  <label for="inputEmail4">space</label>
  <input type="number" class="form-control inputborder" id="inputPassword4" placeholder="Floorspace in sq meter">        
</div>
<div class="form-group col-md-6">
  <label for="inputPassword4">Height</label>
  <input type="number" class="form-control inputborder" id="inputPassword4" placeholder="Height in meter">            
</div>
</div>

<div class="form-row">
<div class="form-group col-md-6">
  <label for="inputEmail4">Other</label>
</div>
</div>

<div class = "row">
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="form-check">
<label class="form-check-label">
  <input class="form-check-input inputborder" type="checkbox" value="" unchecked> Disabled Access
  <span class="form-check-sign">
    <span class="check"></span>
  </span>
</label>
</div>
</div>
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="form-check">
<label class="form-check-label">
  <input class="form-check-input inputborder" type="checkbox" value="" unchecked> Wifi
  <span class="form-check-sign">
    <span class="check"></span>
  </span>
</label>
</div>
</div>
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="form-check">
<label class="form-check-label">
  <input class="form-check-input inputborder" type="checkbox" value="" unchecked> Outside space
  <span class="form-check-sign">
    <span class="check"></span>
  </span>
</label>
</div>
</div>
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="form-check">
<label class="form-check-label">
  <input class="form-check-input inputborder" type="checkbox" value="" unchecked> Storage space
  <span class="form-check-sign">
    <span class="check"></span>
  </span>
</label>
</div>
</div>
</div>
  
  `
advbutton.innerHTML = 'Search'  

}