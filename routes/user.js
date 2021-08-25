const express = require('express');
const router = express.Router();

// file system module to process json file I/O operations..
const fs = require('fs'); 


const {saveUser,getAllUser,generateId} = require('../utils/uitl')
// // Utility Methods...

// function saveUser(data){
//     const stringfiedData = JSON.stringify(data);
//     fs.writeFileSync('./mockDb.json',stringfiedData);
// }
// function getAllUser(){
//     const userData = fs.readFileSync('./mockDb.json');
//     return JSON.parse(userData,null,2);
    
// }


router.post('/add-user',(req,res,next)=>{
    
    const id = generateId();
    const exUserAccounts = getAllUser();
    exUserAccounts[id] = req.body
    saveUser(exUserAccounts);
    res.send({message:"user added succesfully",success:true})

})
router.get('/list-user',(req,res,next)=>{
    const users = getAllUser();
    res.setHeader('Content-Type','application/json')
    res.send(users);
})
router.put('/update-user/:id',(req,res,next)=>{
    
    fs.readFile('./mockDb.json','utf-8',(err) => {
        const exUserAccounts = getAllUser();
        const accountId = req.params['id'];
        exUserAccounts[accountId] = req.body;
        saveUser(exUserAccounts);
        res.send({message:`user details of ${accountId} has been updated syccessfully`,sucess:true})
    })
})
router.delete('/delete-user/:id',(req,res,next)=>{
    fs.readFile('./mockDb.json','utf-8',(err) => {
        const exUserAccounts = getAllUser();
        const accountId = req.params['id'];
        delete exUserAccounts[accountId];
        saveUser(exUserAccounts);
        res.send({message:`user details of ${accountId} has been deleted syccessfully`,sucess:true})
    })

})

router.get('/',(req,res,next)=>{
    res.send('Hey Welcome to Home Page!')
})
module.exports = router;