function wlacz_zegar() 
{
   var czas = new Date();
   
   
   var h =  czas.getHours();
   if(h<10) h = "0"+h;
   
   var m = czas.getMinutes();
   if(m<10) m = "0"+m;
   
   var s = czas.getSeconds();
   if(s<10) s = "0"+s;
   
   
   document.getElementById("no-margin-first").innerHTML = h+":"+m+":"+s;
   
   setTimeout("wlacz_zegar()",1000);
}


var numer = Math.floor(Math.random()*3)+1;
function zmien_slajder() 
{
  numer++; if(numer>3) numer=1;
  var plik = "<img src=\"Obrazy/Bartek Kedzierski/kedzierski"+numer+".jpeg\" />";
  
  document.getElementById("bartek").innerHTML=plik;
  
  setTimeout("zmien_slajder()",4500);
}