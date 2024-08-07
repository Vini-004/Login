const eye = document.getElementById("eyeIcon");
const notEye = document.getElementById("notIcon");
const password = document.getElementById("password");

eye.addEventListener("click", () => {
     if(password.type === "password"){
         password.type = "text";
         eye.src = "hidden.png"

     }else{
          password.type = "password";
          eye.src = "eye.png"
     }
})