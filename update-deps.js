#!/usr/bin/env node
// Cross-platform script to update caniuse-lite and other dependencies

import { execSync } from 'child_process';

console.log('Updating caniuse-lite and other dependencies...');

try {
  // Install the latest version of caniuse-lite
  console.log('Installing latest caniuse-lite...');
  execSync('npm install caniuse-lite@latest --no-save', { stdio: 'inherit' });

  // Update browserslist database
  console.log('Updating browserslist database...');
  execSync('npx update-browserslist-db@latest', { stdio: 'inherit' });

  console.log('Dependencies updated successfully!');
} catch (error) {
  console.error('Error updating dependencies:', error.message);
  process.exit(1);
}
