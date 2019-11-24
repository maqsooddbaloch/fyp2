var element = document.getElementById('modl');
element.innerHTML = `
<!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      Contact Us</h1>
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <h3><span aria-hidden="true"><i class="fas fa-times-circle"></i></span></h3>
                    </button>
                    
                </div>
                <div class="col-md-6 mdl " style="size: 5px;" >
                
               <hr style="height:1px;border:none;color:#333;background-color:#333;" />
               <form>
           <br>
                  <div class="">
        <div class="row text-left">
         
          <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Your full name</label>
            <input type="text" class="form-control inputborder" id="inputPassword4">        
          
          </div>
          <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Your Phone number</label>
            <input type="number" class="form-control inputborder" id="inputPassword4">        
          
          </div>
        </div>
        <div class="row text-left">
            <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px; width: 27.5%;">
              <label for="inputEmail4">Your email address</label>
              <input type="text" class="form-control inputborder" id="inputPassword4">        
            </div>
            <div class="form-group col-md-6 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
              <label for="inputEmail4">What's the message about</label>

              <input placeholder="Type of event" list="ventype"  class="form-control" />
                                                            <datalist id="ventype">
                                                                    <option value="Venue">
                                                                    <option value="A new enquery">
                                                                  
                                                                      
                                                                  </datalist>
            
            </div>
          </div>
         
          

             <div id="textareaTags">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <h4>Your message</h4>
                    </div>
                    <textarea class="form-control" name="name" rows="4" cols="80" placeholder="You can write your text here..."></textarea>
                </div>
               
            </div>
        </div>

            <button  class="btn btn-primary col-md-12">Send to abd</button>



    </div>
    
     
    
 
  
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->



`

