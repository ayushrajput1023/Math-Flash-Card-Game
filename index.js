
//var c = document.getElementById("in").value;
function Add(){
  var c = document.getElementById("in").value;
  var d = a+b;
  if(d == c){
      document.getElementById("out").innerHTML = "Correct";
  }else{
      document.getElementById("out").innerHTML = "Wrong";
  }

}

function Reload(){
  document.getElementById("in").value = "";
  document.getElementById("out").innerHTML = "";

  a = Math.floor(Math.random()*10+1);
  b = Math.floor(Math.random()*10+1);
  document.getElementById("h1").innerHTML = a+" + "+b;

}
