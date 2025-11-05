export default {
	// Use the ts-jest preset for ESM projects
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'node',
		transform: {
			'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json', useESM: true }],
		},
	// Tell Jest to treat .ts files as ESM
	extensionsToTreatAsEsm: ['.ts'],
		// ts-jest config moved into transform to avoid deprecated globals usage
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
