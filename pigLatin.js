// pigLatin.js

// Function to translate a single word to Pig Latin
function translateWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word[0].toLowerCase())) {
        return word + 'way';
    } else if (!vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    } else {
        return word.slice(1) + word[0] + 'ay';
    }
}

// Function to translate a phrase to Pig Latin
function translatePhrase(phrase) {
    return phrase.split(' ').map(translateWord).join(' ');
}

// Main function
function translateToPigLatin() {
    const phrase = process.argv.slice(2).join(' ');
    if (!phrase) {
        console.log('Please provide a phrase to translate.');
        return;
    }

    const translatedPhrase = translatePhrase(phrase);
    console.log(translatedPhrase);
}

// Start the translation
translateToPigLatin();
