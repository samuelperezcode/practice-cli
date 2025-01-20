#!/usr/bin/env node

import { Command } from 'commander';

// Declare the program
const program = new Command();

// Add actions
program
	.argument('<string>', 'string to log')
	.action((message: string) => {
		console.log(`Hello World ${message}`);
	})
	.description('Log a message');

// Execute the CLI
program.parse(process.argv);
