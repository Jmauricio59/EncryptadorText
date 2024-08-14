// Mapea caracteres para cifrado y descifrado
const cipherMap = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
};

const decipherMap = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
};

function encryptText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const errorMessage = document.getElementById('errorMessage');

    if (hasInvalidCharacters(input)) {
        output.textContent = ''; // Limpiar el texto cifrado
    } else {
        output.textContent = encrypt(input); // Mostrar el texto cifrado
    }
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const errorMessage = document.getElementById('errorMessage');

    if (hasInvalidCharacters(input)) {
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
        output.textContent = ''; // Limpiar el texto descifrado
    } else {   
        output.textContent = decrypt(input); // Mostrar el texto descifrado
    }
}

function hasInvalidCharacters(text) {
    // Modifica esta función según tus necesidades
    const invalidChars = /[A-Z!@#$%^&*(),.?":{}|<>]/;
    return invalidChars.test(text);
}

function encrypt(text) {
    return text
        .split('') // Divide el texto en caracteres individuales
        .map(char => cipherMap[char] || char) // Reemplaza el caracter si está en cipherMap
        .join(''); // Une los caracteres en una sola cadena
}

function decrypt(text) {
    return text
        .split('') // Divide el texto en caracteres individuales
        .map(char => decipherMap[char] || char) // Reemplaza el caracter si está en decipherMap
        .join(''); // Une los caracteres en una sola cadena
}
