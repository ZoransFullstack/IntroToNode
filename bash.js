const { pwd } = require('./pwd.js');
const { ls } = require('./ls.js');

// Output a prompt
process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
  }

  // process.stdout.write('You typed: ' + cmd);
});
