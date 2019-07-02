let sendEvent = (sender) => {
    document.getElementById("result-text").innerHTML += sender.textContent;
    console.log(sender.innerHTML);
}

let evaluateResult = () => {    
    let result = eval(document.getElementById("result-text").innerHTML);
    if(String(result).length > 5) {result = result.toFixed(5)};
    document.getElementById("result-text").innerHTML = result;
}

let backspace = () => {
    let resultString = String(document.getElementById("result-text").innerHTML);
    resultString = resultString.slice(0,-1);
    document.getElementById("result-text").innerHTML = resultString;
}

let clearTextbox = () => {
    document.getElementById("result-text").innerHTML = "";
}