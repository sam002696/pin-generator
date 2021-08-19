function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('generatePin').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('displayPin').value = pin;
})
document.getElementById('keypad').addEventListener('click', function (event) {
    const keyPad = event.target.innerText;
    const keyPadButton = document.getElementById('keypadDisplay');
    if (isNaN(keyPad)) {
        if (keyPad == 'C') {
            keyPadButton.value = '';
        }
    }
    else {
        const keyPadPrev = keyPadButton.value;
        const keyPadPrevTotal = keyPadPrev + keyPad;
        keyPadButton.value = keyPadPrevTotal;
    }
})
document.getElementById('submitButton').addEventListener('click', function () {
    const pin = document.getElementById('displayPin').value;
    const displayPin = document.getElementById('keypadDisplay').value;
    const notifySuccess = document.getElementById('notifySuccess');
    const notifyFailure = document.getElementById('notifyFailure');

    if (pin == displayPin) {
        notifySuccess.style.display = 'block';
        notifyFailure.style.display = 'none';
    }
    else {
        notifyFailure.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})