// Script to update caniuse-lite in package-lock.json
import fs from 'fs';
import { execSync } from 'child_process';

console.log('Updating caniuse-lite...');

try {
  // Get the latest version of caniuse-lite
  const latestVersion = execSync('npm show caniuse-lite version').toString().trim();
  console.log(`Latest caniuse-lite version: ${latestVersion}`);

  // Read the package-lock.json file
  const packageLockPath = './package-lock.json';
  if (!fs.existsSync(packageLockPath)) {
    console.error('package-lock.json not found');
    process.exit(1);
  }

  const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));

  // Update the caniuse-lite version in dependencies and packages
  let updated = false;

  // Update in dependencies
  if (packageLock.dependencies && packageLock.dependencies['caniuse-lite']) {
    packageLock.dependencies['caniuse-lite'].version = latestVersion;
    updated = true;
  }

  // Update in packages
  if (packageLock.packages) {
    for (const pkg in packageLock.packages) {
      if (pkg.endsWith('node_modules/caniuse-lite') || pkg === 'node_modules/caniuse-lite') {
        packageLock.packages[pkg].version = latestVersion;
        updated = true;
      }
    }
  }

  if (updated) {
    // Write the updated package-lock.json
    fs.writeFileSync(packageLockPath, JSON.stringify(packageLock, null, 2));
    console.log('Successfully updated caniuse-lite in package-lock.json');
  } else {
    console.log('No caniuse-lite entries found in package-lock.json');
  }
} catch (error) {
  console.error('Error updating caniuse-lite:', error);
  process.exit(1);
}
