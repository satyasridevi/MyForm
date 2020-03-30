/* ========================WRITE YOUR JS FROM HERE======================== */
function validate(){
    var x = document.forms["myForm"]["message"].value;
    var y = document.forms["myForm"]["userid"].value;
    var a = document.getElementById("password").value;
    var b = document.getElementById("confirm password").value;
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;
    if(y.length<5 || y.length>15){
      alert("username should be between 5 to 15 characters");
      return false;
    }
    if(!isNaN(y)){
        alert("username cannot contain only numbers");
        return false;
    }
    if(pattern.test(a)){
      if (a != b) {
        alert("Passwords do not match");
        return false;
    } 
    }else{
      alert("password must contain one single character,one digit,one uppercase letter,one lowercase letter and contain atleast 8 characters");
      return false;
    }
    if (x.length>50) {
        alert("message is containing more than 50 characters");
        return false;  
    }
    var checkRadio = document.querySelector( 
      'input[name="age"]:checked');
    var frm = document.forms["myForm"];
    if(checkRadio.value=="above"){
      frm.action="success.html";
    }
    else if(checkRadio.value=="below"){
      frm.action="failure.html";
    }
    frm.submit();
    return true;
}
