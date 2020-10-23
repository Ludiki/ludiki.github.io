var video = document.getElementById('video');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
  ctx.moveTo(0,0);
  ctx.lineTo(1000,1000);
  ctx.stroke();
    // Grab elements, create settings, etc.
    var mediaConfig = {
        video: {
          width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
          },
          height: {
            min: 720,
            ideal: 1080,
            max: 1440
          },
          facingMode: 'environment'
        }
    }

    var errBack = function(e) {
        console.log('An error has occurred!', e)
    };

    // Put video listeners into place
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }
}, false);