@echo off
REM Script to update caniuse-lite and other dependencies

echo Updating caniuse-lite and other dependencies...

REM Install the latest version of caniuse-lite
call npm install caniuse-lite@latest --no-save

REM Update browserslist database
call npx update-browserslist-db@latest

echo Dependencies updated successfully!
