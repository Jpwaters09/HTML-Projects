////////////////////////////////////////////////
// HTML Editor                                //
// Language: JavaScript                       //
// Author: Jacob Waters                       //
// Github: github.com/jpwaters09              //
// Copyright (c) 2026 Jacob Waters            //
// Contact me: jpwaters09.business@gmail.com  //
////////////////////////////////////////////////

function update(i) {
  if (i == 0) {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let javascriptCode = document.getElementById("javascriptCode").value;
    let text = htmlCode + "<style>" + cssCode + "</style>" + "<scri" + "pt>" + javascriptCode + "</scri" + "pt>";
    let iframe = document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  }
}
