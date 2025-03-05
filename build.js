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
// Copy all files from dist/client to dist (not to dist/client/client)
const clientDir = 'dist/client';
const targetDir = 'dist';
if (fs.existsSync(clientDir) && fs.lstatSync(clientDir).isDirectory()) {
  const files = fs.readdirSync(clientDir);
  files.forEach(function(file) {
    const sourcePath = path.join(clientDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // For directories, copy recursively
      copyDirRecursive(sourcePath, targetPath);
    } else {
      // For files, just copy
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

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

// Function to recursively copy a directory
function copyDirRecursive(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  
  // Copy all files and subdirectories
  const files = fs.readdirSync(source);
  files.forEach(function(file) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy subdirectories
      copyDirRecursive(sourcePath, targetPath);
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}
