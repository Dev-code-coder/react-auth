const {register,find} = require('./user');

const setTestController = ($router) =>{
 $router.post('/register', register)
 $router.post('/login', find)
}

module.exports = setTestController