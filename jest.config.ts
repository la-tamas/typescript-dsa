import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__test__/.*|(\\.|/)(test|spec)\\.[jt]sx?$)',
    moduleFileExtensions: [
        'js',
        'ts',
        'jsx',
        'tsx',
        'json',
        'node',
    ],
    verbose: true,
    collectCoverage: true,
};

export default config;
