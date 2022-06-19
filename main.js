let qrData = document.getElementById('qrData') //input data
let qrCode = new QRCode(document.getElementById("qrcode")); //div for qrCode

// on page load -- generate QR Code
function pageCode () {		
	// let elText = document.getElementById("qrData");
	qrCode.makeCode(qrData.value);
}
pageCode()

document.querySelector('button').addEventListener('click' , generateQR)
document.querySelector('#qrData').addEventListener('keypress' , function(e) {
    //if inputselector empty -- enter will not do anything/run
    // if ( !inputSelector.value ) return;
    // listen for enter key press, if pressed run fetchAnswer function
    if (e.key === 'Enter') {
        generateQR()
    }
})

function generateQR() {
    let data = qrData.value
    qrCode.makeCode(data)
}

