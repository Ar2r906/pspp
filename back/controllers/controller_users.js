const { user } = require('../models/users')

const getUserByUid = async(req, res) => {
    try {
        const currentUser = await user.findOne({
            where: {uid: req.userUid}
        });

        if(!currentUser) { return res.status(404).send('User not found'); }
    
        return res.status(200).send({
            currentUser: currentUser
        })
    } catch (error) {
        return res.ststus(500).send({
            message: 'Server error',
            error: error,
        })
    }
}

module.exports = {
    getUserByUid
}