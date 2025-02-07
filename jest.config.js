module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
	"globals": {
		'ts-jest': {
			diagnostics: false
		}
	},

	"testEnvironment": "node",


	// Setup Enzyme
	"snapshotSerializers": ["enzyme-to-json/serializer"],
	"setupTestFrameworkScriptFile": "<rootDir>\\setupEnzyme.ts",
}