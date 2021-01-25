let x  = document.getElementById("position");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(viewPosition);
    }else{
        x.innerHTML = "Browser Not Support"
    }
}

function viewPosition(positions){
    x.innerHTML = "Latitude : " + positions.coords.latitude +
    "<br>Longitude : " + positions.coords.longitude;
}