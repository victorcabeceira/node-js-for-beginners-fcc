const fs = require('fs');

// fs.mkdir('tutorial', error => {
//   if (error) console.log('Error on mkdir: ', error);
//   else {
//     console.log('Folder successfully created');
//     fs.writeFile('./tutorial/example.txt', '123', error => {
//       if (error) console.log('Error on creating file', error);
//       else console.log('Succesfully created file');
//     });
//   }
// });

/* Deletes an empty directory */
// fs.rmdir('tutorial', error => {
//   if (error) console.log('Error on rmdir: ', error);
//   else console.log('Folder successfully deleted');
// });

/* Deletes a directory with one file inside */
// fs.unlink('./tutorial/example.txt', error => {
//   if (error) console.log('Error on unlink: ', error);
//   else {
//     console.log('File successfully deleted');
//     fs.rmdir('tutorial', error => {
//       if (error) console.log('Error on rmdir: ', error);
//       else console.log('Folder successfully deleted');
//     });
//   }
// });

/* Deletes all files inside of directory */
fs.readdir('example', (error, files) => {
  if (error) console.log('Reading directory error: ', error);
  else {
    console.log('files', files);
    for (const file of files) {
      fs.unlink(`./example/${file}`, error => {
        if (error) console.log('Error on unlink: ', error);
        else {
          console.log('File deleted successfully: ', file);
        }
      });
    }
  }
});
