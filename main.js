var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();
var textbox = document.getElementById("textbox");
function voice_output()
{
textbox.innerHTML="";
recognition.start()
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak()
{
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach('#camera');
}
 Webcam.set({
     width:360,
     height:360,
     image_format:'png',
     png_quality:90
    })


