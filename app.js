//check for device support
if("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices){
    //browser supports camera

    // video requirements
    const constraints ={
        video: {
            width: {
              min: 1280,
              ideal: 1920,
              max: 2560,
            },
            height: {
              min: 720,
              ideal: 1080,
              max: 1440,
            },
        }
    }


    // capture the video stream
    const videoStream = await navigator.mediaDevices.getUserMedia(constraints);



}