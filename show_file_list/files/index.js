// const fs = require('fs');
// const path = require('path');
// // const dirPath = path.join(__dirname, 'files', 'files1');
// const dirPath = path.join(__dirname);
// console.log(dirPath);

// // for(let i = 0; i < 5; i++) {
// //     fs.writeFileSync("hello" + i + ".txt", "This is the simple file");
// // }

// fs.readdir(dirPath, (err, files)=> {
//     console.log(files)
// });



// CRUD
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
console.log(filePath);
// To write the data in the file.
// fs.writeFileSync(filePath, 'This is a simple text file');

// To read the files data. If you not pass the second parameter as utf-8 then it will print the numbers format data.
// fs.readFile(filePath, 'utf-8', (err, item) => {
//     console.log(err)
//     console.log(item)
// });

// To update the data in the same file.
// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log('file is updated');
//     }
// });

// To rename the existing file.
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//     if(!err) {
//         console.log('file has been renamed');
//     }
// });

// To delete the file.
// fs.unlinkSync(`${dirPath}/fruits.txt`);
