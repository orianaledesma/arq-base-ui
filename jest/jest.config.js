module.exports = {
    rootDir: '../src',
    transform: {
        '\\.jsx?$': 'babel-jest',
        '\\.js$': 'babel-jest'
    },
    testRegex: '\\.(test|spec)\\.(js|jsx)$',
    moduleFileExtensions: ['jsx', 'js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['../jest/setup.js'],
    snapshotResolver: '../jest/jest.snapshot.resolver.js',
    collectCoverage: true,
    coverageDirectory: '../coverage',
    transformIgnorePatterns: [
        // compile just antd for tests
        '/node_modules/(?!antd|css-animation|rc-[s]*).+\\.js$'
    ],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/../jest/fileMock.js',
        '\\.png$': '<rootDir>/../jest/fileMock.js',
        '\\.scss$': '<rootDir>/../jest/fileMock.js'
    }
};
