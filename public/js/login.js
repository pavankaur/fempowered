$(document).ready(function(){
    $('#birth-date').mask('00/00/0000');
    $('#phone-number').mask('000-000-0000');
   })
  
   function loginSuccess() {
    window.location.href="home.html";
  }