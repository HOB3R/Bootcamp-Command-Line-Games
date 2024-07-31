# Bootcamp Command Line Games

This project is a part of the Full Stack Web & App Bootcamp at [WBS Coding School](https://www.wbscodingschool.com/). The goal of this project was to create small interactive command-line games using Node.js, manage changes through pull requests, and enhance JavaScript skills in a new environment.

## Table of Contents

- [Project Overview](#project-overview)
- [Games](#games)
  - [Rock Paper Scissors](#rock-paper-scissors)
  - [English to Pig Latin Translator](#english-to-pig-latin-translator)
  - [Caesar Cipher](#caesar-cipher)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Learning Outcomes](#learning-outcomes)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Bootcamp Command Line Games project involves creating three interactive games that run directly in the command line using Node.js. This project emphasizes individual development, code management via GitHub, and enhancing JavaScript skills in a non-browser environment.

## Games

### Rock Paper Scissors

Implement a basic Rock Paper Scissors game.
- Takes the player’s move as an input from `process.argv`.
- Randomly generates a move for the computer.
- Determines the winner based on the rules of Rock Paper Scissors.
- Outputs the result (win, lose, or draw) to the console.

### English to Pig Latin Translator

Create a program that translates English text to Pig Latin.
- Takes an English phrase as an input from `process.argv`.
- Converts each word to Pig Latin based on specified rules.
- Outputs the translated phrase to the console.

### Caesar Cipher

Implement a basic Caesar Cipher encryption.
- Takes a phrase and a shift number as inputs from `process.argv`.
- Encrypts the phrase by shifting each letter by the specified number.
- Outputs the encrypted phrase to the console.

## Technologies Used

<p>
  <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
</p>

## Usage

To play any of the games, use the following commands in your terminal:

### Rock Paper Scissors
```bash
node rockPaperScissors.js <your_move>
# Example: node rockPaperScissors.js rock
```

### English to Pig Latin Translator
```bash
node pigLatin.js "<your_phrase>"
# Example: node pigLatin.js "Pig Latin is hard to speak"
```

### Caesar Cipher
```bash
node caesarCipher.js "<your_phrase>" <shift_number>
# Example: node caesarCipher.js "hello world" 3
```

## Learning Outcomes

Through this project, I gained valuable experience and skills in the following areas:

<ul>
  <li>🚀 Developing command-line applications using Node.js</li>
  <li>🛠️ Applying JavaScript in a non-browser environment</li>
  <li>💻 Managing project versions and collaboration using GitHub</li>
  <li>🧠 Enhancing problem-solving skills through interactive games</li>
</ul>

## Future Enhancements

Some potential enhancements for the Bootcamp Command Line Games project include:

<ul>
  <li>👥 Adding a multiplayer mode for Rock Paper Scissors</li>
  <li>🔀 Implementing additional translation rules for the Pig Latin Translator</li>
  <li>🔒 Including decryption functionality for the Caesar Cipher</li>
</ul>

## Contributing

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

### Disclaimer

This project is created for educational purposes as part of the WBS Coding School Bootcamp.
