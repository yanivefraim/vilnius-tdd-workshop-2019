module.exports = {
  projects: [
    {
      displayName: 'e2e',
      preset: 'jest-puppeteer',
      testMatch: ['<rootDir>/**/*.e2e.+(js|ts){,x}'],
      setupFilesAfterEnv: [require.resolve('./__tests__/setup')]
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/**/*.test.js'],
      transform: {
        '^.+\\.(js|jsx)$': require.resolve('babel-jest'),
        '^.+\\.css$': require.resolve(
          'react-scripts/config/jest/cssTransform.js'
        ),
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': require.resolve(
          'react-scripts/config/jest/fileTransform.js'
        )
      }
    }
  ]
};
