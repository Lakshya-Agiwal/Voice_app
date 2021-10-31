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
}


