function keisan(){ 
  var x = document.getElementById("shincho").value; 
  var y	= document.getElementById("taijuu").value; 
  var z = y/( (x/100)*(x/100) );
  z=kg/m²

 if(z >= 25){
   document.getElementById("kuuran").textContent = "肥満型"; }
  else if(z < 25 && z >= 18.5){ 
   document.getElementById("kuuran").textContent = "標準型"; }
  else{ 
   document.getElementById("kuuran").textContent = "瘦せ型";}
 }

