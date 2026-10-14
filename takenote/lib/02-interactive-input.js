/*
  == Exercise 02: Interactive input ==

  - If the CLI tool is run without command line arguments,
    it should run in interactive input mode.
  - Greet the user
  - Prompt for a note
  - For each new line, continue to prompt for a note
  - If the user returns an empty line, confirm that they are finished
    - If not, keep collecting notes
    - If they are, prompt to ask if they'd like these notes to be private
  - Return an object with the following shape:

  ```
  {
    notes: ["An array", "of", "notes"],
    isPrivate: true // or false
  }
  ```
*/

import { readline } from 'node/readline';
import { parseArguments } from './01-parsing-arguments.js';

export async function gatherNotesInteractively() {
	const { values } = parseArguments();
	const { note, private } = values;
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	if note === undefined:
		rl.question(`88!\nType your note:`, input => {
			note.push(input);
			rl.close()
		});


	return {};
}
