////////////////////////////////////////////////
// Python Editor                              //
// Language: JavaScript                       //
// Author: Jacob Waters                       //
// Github: github.com/jpwaters09              //
// Contact me: jpwaters.github@gmail.com      //
// Follow my WhatsApp Channel: bit.ly/3sr99ZO //
////////////////////////////////////////////////

(async () => {

  var output = document.getElementById("output")
  var code = document.getElementById("code")

  window.pyodide = await loadPyodide({stdout: addToOutput, stderr: addToOutput}) 
})()

function addToOutput(s) {
  output.value += `${s}\n`
  output.scrollTop = output.scrollHeight
}
async function evaluatePython() {
  addToOutput(`${code.value}`)

  await pyodide.loadPackagesFromImports(code.value, addToOutput, addToOutput)
  try {
    let result = await pyodide.runPythonAsync(code.value)
    addToOutput(`${result}`)
  }
  catch (e) {
    addToOutput(`${e}`)
  }
  code.value = ''
}