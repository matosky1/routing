const express = require('express')
const router = express.Router()
 
router.get('/', (req, res, next) => {
    res.send('Home Page');
});
 
router.get('/login', (req, res, next) => {
     res.send('Login Page')
});
 
router.get('/register', (req, res, next) => {
    res.send('Register Page');
});
 
router.use((req, res) => {
    res.status(404).send('Page Not Found');
  });
 
module.exports = router