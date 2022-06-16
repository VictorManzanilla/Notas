const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('../models/user')


exports.login = async (req, res) => {
    const {username, password} = req.body

    if(password === process.env.PASSWORD) {
        //generate token and send client/react
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return res.json({token, username})
    } 
    else if(password != process.env.PASSWORD) {
        const user = await User.findOne({
            username: username,
            password: password,
        })
        //jsonwebtoken
        if(user) {
            const token = jwt.sign({
                username: user.username,
                password: user.password
            }, process.env.JWT_SECRET)
            
            return res.json({ status: 'ok', user: token })
        }
    } else {
        return res.status(400).json({
            error: 'Incorrect password'
        })
    }
}

exports.register = async (req, res) => {
    console.log(req.body)

try {
    const user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
    })
    res.json({ status: 'ok'})
} catch (err) {
    res.json({ status: 'error', error: 'Duplicate email'})
}
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,  //require signin middleware
    algorithms: ["HS256"], // added later
    //userProperty: "auth",
  });