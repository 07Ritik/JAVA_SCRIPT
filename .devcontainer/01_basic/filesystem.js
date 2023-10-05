const fs = require('fs');
const path = require('path');

const baseDirectory = './filesystem'; // Change this to your desired base directory

// Function to create a new file
function createFile(fileName, data, callback) {
  const filePath = path.join(baseDirectory, fileName);

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, 'File created successfully');
  });
}

// Function to read a file
function readFile(fileName, callback) {
  const filePath = path.join(baseDirectory, fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

// Function to update a file
function updateFile(fileName, newData, callback) {
  const filePath = path.join(baseDirectory, fileName);

  fs.writeFile(filePath, newData, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, 'File updated successfully');
  });
}

// Function to delete a file
function deleteFile(fileName, callback) {
  const filePath = path.join(baseDirectory, fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, 'File deleted successfully');
  });
}

// Example usage
createFile('example.txt', 'Hello, World!', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);

    readFile('example.txt', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('File content:', data);

        updateFile('example.txt', 'Updated content', (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(result);

            deleteFile('example.txt', (err, result) => {
              if (err) {
                console.error(err);
              } else {
                console.log(result);
              }
            });
          }
        });
      }
    });
  }
});
