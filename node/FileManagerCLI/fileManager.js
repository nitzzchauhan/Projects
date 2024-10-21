    // fileManager.js

const fs = require('fs');
const path = require('path');

// Create a file with content
function createFile(fileName, content) {
    fs.writeFileSync(fileName, content, 'utf8');
    console.log(`File '${fileName}' created successfully.`);
}

// Read content from a file
function readFile(fileName) {
    if (fs.existsSync(fileName)) {
        const content = fs.readFileSync(fileName, 'utf8');
        console.log(`Content of '${fileName}':\n${content}`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// Update a file by appending content
function updateFile(fileName, content) {
    if (fs.existsSync(fileName)) {
        fs.appendFileSync(fileName, content, 'utf8');
        console.log(`File '${fileName}' updated successfully.`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// Delete a file
function deleteFile(fileName) {
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
        console.log(`File '${fileName}' deleted successfully.`);
    } else {
        console.log(`File '${fileName}' does not exist.`);
    }
}

// Create a directory
function createDirectory(dirName) {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
        console.log(`Directory '${dirName}' created successfully.`);
    } else {
        console.log(`Directory '${dirName}' already exists.`);
    }
}

// List contents of a directory
function listDirectoryContent(dirName) {
    if (fs.existsSync(dirName)) {
        const files = fs.readdirSync(dirName);
        console.log(`Contents of '${dirName}':\n${files.join('\n')}`);
    } else {
        console.log(`Directory '${dirName}' does not exist.`);
    }
}

// Delete a directory
function deleteDirectory(dirName) {
    if (fs.existsSync(dirName)) {
        fs.rmdirSync(dirName, { recursive: true });
        console.log(`Directory '${dirName}' deleted successfully.`);
    } else {
        console.log(`Directory '${dirName}' does not exist.`);
    }
}

// Command-line arguments handling
const [,, command, ...args] = process.argv;

switch (command) {
    case 'create-file':
        createFile(args[0], args[1]);
        break;
    case 'read-file':
        readFile(args[0]);
        break;
    case 'update-file':
        updateFile(args[0], args[1]);
        break;
    case 'delete-file':
        deleteFile(args[0]);
        break;
    case 'create-dir':
        createDirectory(args[0]);
        break;
    case 'list-dir':
        listDirectoryContent(args[0]);
        break;
    case 'delete-dir':
        deleteDirectory(args[0]);
        break;
    default:
        console.log('Unknown command');
        break;
}
console.log(process.argv)