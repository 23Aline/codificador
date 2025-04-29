let encryptedText = '';

function encryptText() {
    const input = document.getElementById('inputText').value;
    encryptedText = Array.from(input).map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('imagePlaceholder').style.display = 'none';
}

function decryptText() {
    const input = document.getElementById('outputText').value;
    const decrypted = Array.from(input).map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    document.getElementById('inputText').value = decrypted;

    if (decrypted.trim() === '') {
        document.getElementById('imagePlaceholder').style.display = 'block';
    } else {
        document.getElementById('imagePlaceholder').style.display = 'none';
    }
}
