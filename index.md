<video autoplay id="video"></video> 


<script>
if (
  "mediaDevices" in navigator &&
  "getUserMedia" in navigator.mediaDevices
) {
  // ok, browser supports it
  const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
  
  const constraints = {
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
  },
  };

const videoStream = await navigator.mediaDevices.getUserMedia(constraints);
  
  const video = document.querySelector("#video");
  const videoStream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = videoStream;
}



</script>
