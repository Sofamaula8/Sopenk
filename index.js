const readline = require('readline');
const say = require('say');
const fs = require('fs');

// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter text input
rl.question('Masukkan teks yang ingin dikonversi menjadi suara: ', (text) => {
  // Options for the 'say' library
  const sayOptions = {
    // Set the voice for the speech to 'id'
    voice: 'id',
    // Set the speed for the speech
    speed: 1
  };

  // Convert text to speech using 'say' library
  say.export(text, null, sayOptions, (err, buffer) => {
    if (err) {
      console.log(err);
      return;
    }

    // Save the speech buffer to a WAV file
    fs.writeFile('output.wav', buffer, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('WAV file created successfully!');
      // Close the readline interface
      rl.close();
    });
  });
});

