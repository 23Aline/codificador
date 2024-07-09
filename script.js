// script.js

let encryptedText = ''; // Variável para armazenar o texto criptografado

// Função para criptografar texto simples (substitui cada caractere por próximo na tabela Unicode)
function encryptText() {
    const input = document.getElementById('inputText').value;
    encryptedText = Array.from(input).map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('imagePlaceholder').style.display = 'none'; // Oculta a imagem ao criptografar
}

// Função para descriptografar texto simples (substitui cada caractere pelo anterior na tabela Unicode)
function decryptText() {
    const input = document.getElementById('outputText').value;
    const decrypted = Array.from(input).map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    document.getElementById('inputText').value = decrypted;
    
    // Exibe a imagem se o campo de texto descriptografado estiver vazio
    if (decrypted.trim() === '') {
        document.getElementById('imagePlaceholder').style.display = 'block';
    } else {
        document.getElementById('imagePlaceholder').style.display = 'none';
    }
}

