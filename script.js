const btn = document.querySelector(".btn");
let errorMessage = document.querySelector(".error_text");
const input =  document.querySelector(".input");




function hideValidation(){
     errorMessage.classList.remove("visible");
     input.classList.remove("input_border")

}


function validation(){
    if(input.value == ''){
        errorMessage.innerHTML = "Please fill out email address";
        errorMessage.classList.add("visible");
        input.classList.add("input_border")
        return false;
    }
  
      else if(!validateEmail(input.value)){
         errorMessage.innerHTML = "Please provide valid email address"; 
         errorMessage.classList.add("visible"); 
         input.classList.add("input_border")
            return false;
        }     
}


function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
  }