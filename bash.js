// Output a prompt
process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  switch (cmd) {
    case 'pwd':
      process.stdout.write(process.cwd());
  }

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
});
