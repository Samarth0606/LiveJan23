
const jwt = require('jsonwebtoken');

const generateAuthToken = function(data){

    data = JSON.stringify(data);
    const token = jwt.sign(data , 'SAMARTHVOHRAWEBDEVMENTOR')
    return token;
}

module.exports = generateAuthToken;