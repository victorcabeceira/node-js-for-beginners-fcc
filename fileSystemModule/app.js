const fs = require('fs');

/*
  Create a file
  File name, file content, callback
*/

// fs.writeFile('example.txt', 'This is an example', error => {
//   if (error) console.log('Found error: ', error);
//   else {
//     console.log('File succesfully created');
//     /*
//       Read a file
//       File name, file encoding, callback
//      */
//     fs.readFile('example.txt', 'utf8', (error, file) => {
//       if (error) console.log('Readfile error', error);
//       else console.log({ file });
//     });
//   }
// });

/*
  Rename a file
  File name, file new name, callback error
*/
// fs.rename('example.txt', 'example2.txt', error => {
//   if (error) console.log('Rename Error', error);
//   else console.log('Succesfully renamed the file');
// });

/*
  Appends data to a file
  File name, new content, callback
*/
// fs.appendFile('example2.txt', 'someData being appended', error => {
//   if (error) console.log('appendFile Error', error);
//   else console.log('Succesfully appendFile');
// });

/*
  Delete a file
  File name and callback
*/
// fs.unlink('example2.txt', error => {
//   if (error) console.log('unlink Error', error);
//   else console.log('Succesfully deleted the file');
// });
