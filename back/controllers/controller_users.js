const { user } = require('../models/users')

const getUserByUid = async(request, response) => {
    try {
        console.log(`request.userUid: ${request.userUid}`)
        const currentUser = await user.findOne({

            where: { uid: request.userUid }

        })
        if(!currentUser) return response.status(404).send({message: 'XUY'})
        return response.send(currentUser)
    } catch (error) {
        return response.ststus(500).send({ 
            message: error.message 
        })
    }
}

module.exports = {
    getUserByUid
}