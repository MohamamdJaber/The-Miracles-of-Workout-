'use strict';
{
whatOrdering();
height();
age1();
function age1(){
    var yourage = prompt('please enter your age');
  console.log(yourage);
  var okk;
  var how = prompt('how many days you want to excesice');
  for (var i = 0; i < how;i++)
  {
  if (yourage > 18 && yourage < 60 ) {
      confirm("Press enter..and dont forget to enjoy");
      okk = 'Do any excercise you want you are healthy' + okk;
    } else if (yourage > 12 && yourage < 60) {
      confirm("Press enter..and dont forget to enjoy");
      okk = 'You should wait until you become 18'+ okk;
    } else if (yourage >= 5 && yourage < 60) {
      confirm("Tell your parents");
      okk = 'Go to your BaBa'+ okk;
    } else {
      confirm("Please read about working out within your age in the internet");
      okk = 'Please dont even think to do that unless you are a fit person just eat a healthy stuff'+ okk;
    }}
    {
      document.write('<h3>'+okk+'</h3>');}
}


  function height(){
    
      var Yourheight = prompt('please enter your height in cm ');
    console.log(height);
    var H;
      if (Yourheight > 175 && Yourheight < 220 ) {
        confirm("Press enter..and dont forget to enjoy");
        H = 'haha';
      } else if (Yourheight > 150 && Yourheight <= 175) {
        confirm("Press enter..and dont forget to enjoy");
        H = 'You should wait until you become 18';
      
      } else {
        confirm("Please read about working out within your height in the internet");
        H = 'Please dont even think to do that unless you are a fit person just eat a healthy stuff';
      
        document.write('<h3>'+H+'</h3>');
      }
  }
  function whatOrdering(){
    var whatOrdering = prompt('what your best excersice is');
    while (whatOrdering !== 'push ups' && whatOrdering !== 'not defind yet' )

    {whatOrdering = prompt('please enter push ups or not defind yet ');}
   
    if (whatOrdering === 'push ups'){
      // document.write('<p>greaaaaat</p>');
      document.getElementById("new").innerHTML = "You are great";
    }else if (whatOrdering === 'not defind yet'){
      document.getElementById("new").innerHTML = "ok keep looking for that";
    }
  }

}


