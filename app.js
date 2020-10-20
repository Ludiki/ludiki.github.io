var constraints = { video: {facing: "environment"}, audio: false};

// constants
const cameraView = document.querySelector("#camera--view");

function cameraStart(){
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream){
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error){
            console.error("Something wrong");
        })
}

// Start video stream
window.addEventListener("load", cameraStart, false);