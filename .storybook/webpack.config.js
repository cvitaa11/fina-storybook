const rimraf = require('rimraf');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  // Clean build folder.
  // Rimraf used as a crossplatform solution to avoid rm -rf or del /S
  rimraf(process.cwd() + '/build', () => console.log('cleared build folder'));

  // Return the altered config
  return defaultConfig;
};
