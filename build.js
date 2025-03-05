// Cross-platform build script for Cloudflare Pages
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Run the Vite build
console.log('Running Vite build...');
execSync('npm run build', { stdio: 'inherit' });

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copy files from dist/client to dist
console.log('Copying files from dist/client to dist...');
copyFolderRecursiveSync('dist/client', 'dist');

console.log('Build completed successfully!');

// Function to copy a folder recursively
function copyFolderRecursiveSync(source, target) {
  const targetFolder = path.join(target, path.basename(source));
  
  // Create target folder if it doesn't exist
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy all files and subfolders
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

// Function to copy a file
function copyFileSync(source, target) {
  const targetFile = path.join(target, path.basename(source));
  fs.copyFileSync(source, targetFile);
}
