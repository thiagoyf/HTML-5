function homePage(){
    var nome = document.getElementById("name").value;
    if(nome == ""){
        nome = "a Página do Thiago";
    }
    alert("Bem vindo " + nome);
}

function manipulandoCanvas(){
    var word = document.getElementById("text").value;
    var color = document.getElementById("color").value;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle=color;
    ctx.font="15px Arial";
    ctx.fillText(word,0,15);
}

function clearCanvas(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function getLocation()
{   
    var x=document.getElementById("local");
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position)
{
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
}

function popUpEmail(){
    var email = document.getElementById("email").value;
    alert(email);
}

function popUpDate(){
    var date = document.getElementById("date").value;
    alert(date);
}
