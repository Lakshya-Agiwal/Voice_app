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
    if (content=="take my selfie")
    {
        speak();
        setTimeout(function (){
            snapshot();
            save(); 
        },5000);
        
    }
    
}
function speak()
{
    
    var synth = window.speechSynthesis;
    var speak_data = "Taking your selfie in 5 seconds";
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
    function snapshot()
    {
        Webcam.snap(function(data_uri){
            
         document.getElementById("selfie").innerHTML = "<img src="+data_uri+" id='selfie'>" ;
        })
        
    }  

    function save()
    {
        link = document.getElementById("link");
        image = document.getElementById("selfie").src;
        link.href=image;
        link.click();
    }
    


