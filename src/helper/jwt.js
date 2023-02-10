const jwt = require ('jsonwebtoken');

module.exports = {
    createToken: (payload, exp='24h') => {
        let token = jwt.sign(payload,'Ayaka', {
            expiresIn: exp
        })
        return token;
    }
}

// disederhanakan
module.exports ={
    createToken: (payload, exp ='24h') => jwt.sign(payload,'ayaka',{
        expreseIn: exp
    })
}