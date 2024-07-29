////////////////////////////////////////////////
// Camera                                     //
// Language: JavaScript                       //
// Author: Jacob Waters                       //
// Github: github.com/jpwaters09              //
// Copyright (c) 2024 Jacob Waters            //
// Contact me: jpwaters.github@gmail.com      //
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
