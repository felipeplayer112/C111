var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png', pngQuality:100,
})

camera = document.getElementById("camera");

Webcam.attach('#camera')

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    })
    
}
console.log('ml5 version', ml5.version);
clasifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mDIjShtbf/model.json',modelLoaded);

function modelLoaded(){
    console.log("Modelo carregado!");
}

function speak(){
    var synth = window.speechSynthesis;
    SpeakData1 = "A minha primeira previsão é ;" + prediction1;
    SpeakData2 = "A minha segunda previsão é ;" + prediction2;
    var utterThis = new SpeechSynthesisUtterance (SpeakData1 + SpeakData2);
    synth.speak(utterThis);
}