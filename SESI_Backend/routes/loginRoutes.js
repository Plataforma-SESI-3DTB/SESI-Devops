const express = require('express');
const router = express.Router();
const passport = require("passport");
// const loginControllers = require('../controllers/loginControllers')

// router.get('/', loginControllers.login)

router.get("/", (req, res, next) =>{
    if(req.query.fail)
        res.send("Usuário ou senha inválidos")
    else
        res.send("Foi")
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: "/login?fail=true"
}));


module.exports = router
