#!/bin/bash
# Script to update caniuse-lite and other dependencies

echo "Updating caniuse-lite and other dependencies..."

# Install the latest version of caniuse-lite
npm install caniuse-lite@latest --no-save

# Update browserslist database
npx update-browserslist-db@latest

echo "Dependencies updated successfully!"
