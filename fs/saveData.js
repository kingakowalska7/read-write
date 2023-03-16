const fs = require('fs');
const path = require ('path');

// let filePath = "/2-read-write-users.json";

// fs.readFile(__dirname+filePath, "utf8", (err, jsonString) => {
//         if (err) {
//           console.log("File read failed:", err);
//           return;
//       }
//         console.log("File data:", jsonString);
//       });
  
      // fs.mkdir(path.join(__dirname, 'writeUser'), function(err){
      // if (err) {
      //  console.log(err);
      //   } else {
      //     console.log('Stworzono folder')
      //   }
      // })
       
      // fs.writeFile(path.join(__dirname, 'writeUser', 'newUser.txt'), 'test', function(err){
      //   if (err) {
      //     console.log(err);
      //      } else {
      //        console.log('Stworzono plik')
      //      }
      // })

      
    function saveData(filePath, folderName, overwrite) {

     const rData = fs.readFileSync(filePath);
     const data = JSON.parse(rData);
    

      
          const dirPath = path.join(__dirname, folderName);
             if (!fs.existsSync(dirPath)) {
               fs.mkdirSync(dirPath);
             } else if (overwrite) {
               const files = fs.readdirSync(dirPath);
               files.forEach(file => {
                const filePath = path.join(dirPath, file);
                 fs.unlinkSync(filePath);
               });
             } else {
               console.log(`Folder ${folderName} już istnieje i nie zostanie nadpisany.`);
               return;
             }
      
             data.forEach(user => {
             const fileName = `${user.id}-${user.name}.txt`;
            
             const filePath = path.join(dirPath, fileName);
      
             const userData = `Name:${user.name}\nStreet:${user.address.street}\nZip Code:${user.address.zipcode}\nCity:${user.address.city}\nPhone:${user.phone}\n`;
               fs.writeFileSync(filePath, userData);
      
               console.log(`Zapisano dane użytkownika ${user.name} w pliku ${fileName}.`);
             });
           }
      
           module.exports = { saveData };




        
