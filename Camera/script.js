////////////////////////////////////////////////
// Camera                                     //
// Language: JavaScript                       //
// Author: Jacob Waters                       //
// Github: github.com/jpwaters09              //
// Contact me: jpwaters.github@gmail.com      //
// Follow my WhatsApp Channel: bit.ly/3sr99ZO //
////////////////////////////////////////////////

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
