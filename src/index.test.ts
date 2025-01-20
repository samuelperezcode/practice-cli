import { describe, expect, it, beforeEach, vi } from 'vitest';
import { Command } from 'commander';

vi.mock('commander', () => ({
	Command: vi.fn().mockReturnValue({
		argument: vi.fn().mockReturnThis(),
		action: vi.fn().mockReturnThis(),
		description: vi.fn().mockReturnThis(),
		parse: vi.fn(),
	}),
}));

describe('CLI Program', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it('should throw an error when run without a string argument', () => {
		process.argv = ['node', 'index.js'];
		const program = new Command();
		expect(() => program.parse(process.argv)).toThrow();
	});
});
