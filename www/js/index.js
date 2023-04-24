$(function(){
    //  view Home
    var htmlHome = " <div><h1> nice</h1></div>";
$(".btn-home").on("click",function() {
    $("#container").html(htmlHome);
});

//  view Camara
var htmlCam = '<div> <center><h1> Camara API </h1>' +
'<button id="hacerf"class="ui-btn ui-shadow ui-icon-camera ui-btn-icon-top">Hacer foto</button>' +
'<button class="ui-btn ui-shadow ui-icon-arrow-d ui-btn-icon-top" onclick="guardarFoto()">Guardar foto</button>'+ 
'</br> <h2> GALERÍA </h2> <section><img id="imagen"> </section>' +
'</center></div>';

$(".btn-camera").on("click",function(){
    $("#container").html(htmlCam);
    $("#hacerf").on("click", sacarFoto);
})

});

// API camara

function sacarFoto() {
  
navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
});
}
function onSuccess(imageData) {
    var image = document.getElementById('imagen');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
