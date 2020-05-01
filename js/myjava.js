'use strict';
var yourage = prompt('please enter your age');
console.log(yourage);
var okk;
if (yourage > 18 && yourage < 60 ) {
    confirm("Press enter..and dont forget to enjoy");
    okk = 'Do any excercise you want you are healthy';
  } else if (yourage > 12 && yourage < 60) {
    confirm("Press enter..and dont forget to enjoy");
    okk = 'You should wait until you become 18';
  } else if (yourage >= 5 && yourage < 60) {
    confirm("Tell your parents");
    okk = 'Go to your BaBa';
  } else {
    confirm("Please read about working out within your age in the internet");
    okk = 'Please dont even think to do that unless you are a fit person just eat a healthy stuff';
  }
  document.write('<h3>'+okk+'</h3>');
  
  document.write('<h3>'+"You can do it if you just try"+'</h3>'); 
  app.UseStaticFiles();


