var element = document.getElementById('forgetpass');
element.innerHTML = `
<!-- booking details -->
<div class="space-70"></div>
    <!--booking end  -->


    <!-- model start -->
 

    <div class="modal" id="forgetmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content ">
                <div class="modal-header mdl col-md-6">
                  
                    <h1 class="modal-title ">
                      Reset Your password</h1>
                   
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
        
         
          <div class="form-group col-md-12 " style="margin-left:0px;margin-right: 0px;  width: 27.5%;">
            <label for="inputPassword4">Enter your Email to reset</label>
            <input type="email" class="form-control inputborder" id="inputPassword4">        
          
          </div>
         
          
        
        
        </div>
        </div>
       
        

         <button  class="btn btn-primary col-md-12">Reset</button>



    </div>
    
     
    
 
  
      </form>
   



                </div>
           
            </div>
        </div>

    </div> <!-- model end -->



`
