
// file system module to process json file I/O operations..
const fs = require('fs'); 


// Utility Methods...

function saveUser(data){
    const stringfiedData = JSON.stringify(data);
    fs.writeFileSync('./mockDb.json',stringfiedData);
}
function getAllUser(){
    const userData = fs.readFileSync('./mockDb.json');
    return JSON.parse(userData,null,2);
}
function generateId() {return  Math.floor(Math.random()*90000)+1000;}

module.exports = {saveUser,getAllUser,generateId}