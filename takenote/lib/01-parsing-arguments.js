/*
  == Exercise 01: Parsing arguments ==

  Add argument parsing that supports the following scenarios:

  ```
  takenote --note "Today I did a lot of coding"

  takenote --note "Today I did a lot of coding" --private

  takenote --note "Today I did a lot of coding" \
    --note "I also made dinner"

  takenote -n "Today I did a lot of coding" \
    -n "I also made dinner"

  takenote -n "Today I did a lot of coding" -p
  ```
*/

import { parseArgs } from 'node:util';

export const options = {
	note: {
		type: 'string',
		multiple: true,
		short: 'n'
	},
	private: {
		type: 'boolean',
		short: 'p'
	}
}

export function parseArguments() {
	return parseArgs({ options });
}

console.log(parseArguments());
