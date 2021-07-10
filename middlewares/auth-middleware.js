// expire the token after a certain amount of time
// 256bit secret string should not be out in the wild.

const jwt = require('jsonwebtoken');
const  users  = require('../models/user');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const [authType, authToken] = (authorization || '').split(' ');
    console.log('authorization', authorization);
    console.log('auth type', authType);
    console.log('auth token', authToken);

    if (!authToken || authType !== 'Bearer') {
        res.status(401).send({
            message: 'authToken/authType error',
        });
        return;
    }

    try {
        const { userId } = jwt.verify(authToken, 'secretPlease');
        users.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (error) {
        console.log('error', error);
        res.status(401).send({
            message: '로그인 후 이용 가능한 기능입니다.',
        });
    }
};
