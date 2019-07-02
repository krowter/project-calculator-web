let counterForPeriod = 0;
let counterForOperators = 0;

let checkStringLength = () => {
    let flag = (document.getElementById("result-text").textContent.length > 10)? true:false;
    
    let allButton = document.querySelectorAll("button");
    for(let i=0;i<allButton.length;i++) {
        allButton[i].disabled=flag;
    }
    document.getElementById("backspace").disabled=false;
    
}

let updatePeriodButton = () => {
    document.getElementById("period").disabled = counterForPeriod>0 ? true : false;
}

let sendEvent = (sender) => {
    checkStringLength();
    document.getElementById("result-text").innerHTML += sender.textContent;
    if(sender.textContent==".") counterForPeriod++;
    console.log(sender.innerHTML);
    enableOperators();
    if(sender.className=="operand") {
        counterForOperators=0;
    }
    if(sender.className=="operator") {
        counterForOperators++;
        sender.disabled=true;
    }
    if(sender.className=="operator" && counterForOperators>1) {
        backspace();
        backspace();
        document.getElementById("result-text").innerHTML += sender.textContent;
    }
    updatePeriodButton();
}

let evaluateResult = () => {    
    let result = eval(document.getElementById("result-text").innerHTML);
    if(String(result).length > 5) {result = result.toFixed(5)};
    document.getElementById("result-text").innerHTML = result;
}

let backspace = () => {
    checkStringLength();
    let resultString = String(document.getElementById("result-text").innerHTML);
    if(resultString.charAt(resultString.length-1).toString()=="*") enableOperators();
    resultString = resultString.slice(0,-1);
    document.getElementById("result-text").innerHTML = resultString;
}

let clearTextbox = () => {
    document.getElementById("result-text").innerHTML = "";
    enableOperators();
    enablePeriod();
}

let operator = document.getElementsByClassName("operator");

let enablePeriod = () => {
    counterForPeriod = 0;
    updatePeriodButton();
}

let enableOperators = () => {
    operators = document.getElementsByClassName("operator");
    for(let i=0;i<operators.length;i++) {
        operators[i].disabled=false;
    }
}
