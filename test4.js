import fs from 'fs'
import express from 'express'

const app = express()

app.use(express.json())

let userData = JSON.parse(fs.readFileSync('./users.json' , "utf-8"))

app.get('/users' , (req ,res)=>{
    res.status(200).json({
        message : 'success',
        body : userData
    })
})

app.get('/user/:id' , (req ,res) =>{
    let {id} = req.params
    let userID = userData.find(user => user.id == id)
    if(!userID){
        res.status(404).json({
            message : "their is no id like that"
        })
    }else{
        res.status(200).json({
            message : 'success',
            body : userID
        })
    }
})

app.post('/add-user' , (req ,res) =>{
    let id = userData.length + 1 ;
    let {name , age , email} = req.body

    let emailExist = userData.find(u => u.email == email)

    if(emailExist){
        res.json({
            message : "this email is exist"
        })
    }else{
        userData.push({id, name , age , email})
        
    res.status(201).json({
        message : "success",
        body : userData
    })
    fs.writeFileSync('./users.json' , JSON.stringify(userData))
    }
})

app.patch('/update-user/:id' ,(req ,res) =>{
    let {id} = req.params
    let updateUser = userData.find(user => user.id == id)
    let {email, name,age} = req.body
    
    if(name) updateUser.name = name
    if(age) updateUser.age = age
    if(email) updateUser.email = email
    res.status(201).json({
        message : 'success',
        body : updateUser
    })

    fs.writeFileSync('./users.json' , JSON.stringify(userData))

})


app.delete('/delete-user/:id' , (req ,res)=>{
    let {id} = req.params
    let deleteUser = userData.findIndex(user=> user.id == id)
    if(deleteUser > -1){
        userData.splice(deleteUser , 1)
        res.json({
            message : ' the user is delete👌'
        })
    } else{
        res.json({
            message : 'not found'
        })
    }
})

app.get('/user' , (req ,res) =>{
    let {name} = req.query
    let userNAME = userData.find(user => user.name == name)
    if(!userNAME){
        res.status(404).json({
            message : "their is no name like that"
        })
    }else{
        res.status(200).json({
            message : 'success',
            body : userNAME
        })
    }
})

app.get('/user/filter', (req, res) => {
    let { minAge } = req.query;

    if (!minAge) {
        return res.status(400).json({
            message: "minAge query parameter is required"
        });
    }

    minAge = Number(minAge);

    if (isNaN(minAge)) {
        return res.status(400).json({
            message: "minAge must be a number"
        });
    }

    let filteredUsers = userData.filter(u => u.age >= minAge);

    if (filteredUsers.length === 0) {
        return res.status(404).json({
            message: "no users found"
        });
    }

    res.status(200).json({
        message: "success",
        body: filteredUsers
    });
});


const port =  3000
app.listen(port , ()=>{
    console.log(`The server is running on port ${port}😊`)
})
