Webcam.set({
    width: 350,
    height: 300,
    imageFormat:"png",
    pngQuality: 100,
    flip_horiz : true
})

Webcam.attach("#camera")

function takeAPhoto() {
    Webcam.snap(function(datauri) {
        document.getElementById("foto").innerHTML="<img id='laPhoto' src='" + datauri + "'>"
    })
}

console.log("version: ml5", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hCJraA1kZ/", loadModel)

