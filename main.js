var SpeechRecognition = window.webkitSpeechRecognition; //namespacing
  
var recognition = new SpeechRecognition();

function Start()
{
    document.getElementById("textbox").innerHTML = ""; 

    //now we are calling a predefined function start() from speechrecognition
    recognition.start(); //it is not the start function that we have created.
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content; 
    if(Content=="take my selfie"){
        speaking();
    }
   
}

function speaking(){

    var synth = window.speechSynthesis;
    var textboxes = "Taking your selfie in 5 seconds";
    var texttospeech = new SpeechSynthesisUtterance(textboxes);
    synth.speak(texttospeech);
Webcam.attach(camera);

setTimeout(function(){
takesnapshot();
save();
},5000)



}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpg",
    jpg_quality: 90

});


var camera = document.getElementById("camera");

function takesnapshot(){
Webcam.snap(function(snapshot){
document.getElementById("result").innerHTML= "<img id='snap' src='"+ snapshot + "'>";
});


}


function save(){
    anchorlink= document.getElementById("links");
    image= document.getElementById("snap").src;
    anchorlink.href=image;
    anchorlink.click();
}



