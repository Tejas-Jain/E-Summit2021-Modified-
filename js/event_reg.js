function validateName() {
    var name = document.getElementById('conname').value;
    if(name.length == 0) {
      alert("First Name can't be blank") ;
      return false;
  
    }
    if (!name.match(/^[a-zA-Z]{2,}$/)) {
      alert("Please enter your correct Full name") ;//Validation Message
      return false;
    }
    return true;
  }

  
  // function validatePhone() {
  //   var phone = document.getElementById('conphone').value;
  //   if(phone.length == 0) {
  //     alert("Phone number can't be blank") ;//Validation Message
  //     return false;
  //   }
  
  //   if(!phone.match(/^[0]?[789]\d{9}$/)) {
  //    alert("Please enter a correct phone number") ;//Validation Message
  //    return false;
  //  }
  
  //  return true;
  
  // }
  
  function validateEmail () {
  
  var email = document.getElementById('conmail').value;
  if(email.length == 0) {
    alert("Email can't be blank") ;//Validation Message
    return false;
  
  }
  
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Please enter a correct email address") ;//Validation Message
    return false;
  
  }
  
  return true;
  
  }
  
  
  function validateForm() {
  if (!validateEmail()) {
  
   
    return false;
  }
  else {
    submitted=true;
    alert("Registration Recorded");//Validation Message
    return true;
  }
  }
  

  