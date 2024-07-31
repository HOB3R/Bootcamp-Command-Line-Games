// caesarCipher.js

// Function to encrypt a single character
function shiftChar(char, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);

    if (index === -1) {
        return char;
    }

    let newIndex = (index + shift) % alphabet.length;
    if (newIndex < 0) {
        newIndex += alphabet.length;
    }

    const shiftedChar = alphabet[newIndex];
    return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
}

// Function to encrypt a phrase
function caesarCipher(phrase, shift) {
    return phrase.split('').map(char => shiftChar(char, shift)).join('');
}

// Main function
function encryptPhrase() {
    const phrase = process.argv.slice(2, -1).join(' ');
    const shift = parseInt(process.argv[process.argv.length - 1]);

    if (!phrase || isNaN(shift)) {
        console.log('Please provide a valid phrase and shift number.');
        return;
    }

    const encryptedPhrase = caesarCipher(phrase, shift);
    console.log(encryptedPhrase);
}

// Start the encryption
encryptPhrase();
