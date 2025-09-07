const fs = require("fs");

// Promisify readFile
function readFileAsync(path, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Promisify writeFile
function writeFileAsync(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => {
      if (err) reject(err);
      else resolve("File written successfully");
    });
  });
}

// Clean file (empty content)
function cleanFile(path) {
  return writeFileAsync(path, "");
}

// Example usage
async function run() {
  try {
    await writeFileAsync("example.txt", "Hello, World!");
    const content = await readFileAsync("example.txt");
    console.log("File Content:", content);

    await cleanFile("example.txt");
    console.log("File cleaned!");
  } catch (err) {
    console.error(err);
  }
}

run();
