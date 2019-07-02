//ini kayak flag untuk menentukan
//apakah tombolnya di-disabled apa nggak
let counterForPeriod = 0;
let counterForOperators = 0;

//cek panjang string di kotak teks
//kalo kepanjangan, disable semua button
let checkStringLength = () => {
    let flag = (document.getElementById("result-text").textContent.length > 10)? true:false;
    
    let allButton = document.querySelectorAll("button");
    for(let i=0;i<allButton.length;i++) {
        allButton[i].disabled=flag;
    }

    document.getElementById("backspace").disabled=false;
}

//period(titik) cuma boleh sekali per operand
//update dia berdasarkan flag yg tadi
let updatePeriodButton = () => {
    document.getElementById("period").disabled = counterForPeriod>0 ? true : false;
}

//isi kotak teks dengan teks si button
//intinya itu, haha
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

//ini pas klik tombol "="
//pake fungsi eval() untuk evaluate isi dari kotak teks
let evaluateResult = () => {    
    let result = eval(document.getElementById("result-text").innerHTML);
    
    if(String(result).length > 5) {result = result.toFixed(5)};
    
    document.getElementById("result-text").innerHTML = result;
}

//ini pas tombol backspace
let backspace = () => {
    checkStringLength();
    
    let resultString = String(document.getElementById("result-text").innerHTML);
    
    if(resultString.charAt(resultString.length-1).toString()=="*") enableOperators();
    resultString = resultString.slice(0,-1);
    document.getElementById("result-text").innerHTML = resultString;
}

//ini pas tombol clear
let clearTextbox = () => {
    document.getElementById("result-text").innerHTML = "";
    
    enableOperators();
    
    enablePeriod();
}

//enable tombol period berdasarkan flag yang tadi.
let enablePeriod = () => {
    counterForPeriod = 0;
    updatePeriodButton();
}

//enable tombol operators berdasarkan flag yang tadi.
let enableOperators = () => {
    operators = document.getElementsByClassName("operator");
    
    for(let i=0;i<operators.length;i++) {
        operators[i].disabled=false;
    }
}
