var jwt = require('jsonwebtoken');
var {posts} = require('./db.json');
module.exports = (req, res,next) => {
    console.log("HIHIHIHI")
    console.log(req.headers)
    console.log(posts[0])
    console.log(req.body)
    console.log("Middleware executed")
    if(req.body.username){
        var token = jwt.sign(req.body, 'edosecretkey');
        res.header('X-Hello','World')
        res.header('token',token)
        res.json({msg:"loginsuccess",token})
    }
    else{
        if(req.headers.token){
            next()
        }
        else{
            res.json({msg:'pleaselogin'})
        }
    }
    next()
}