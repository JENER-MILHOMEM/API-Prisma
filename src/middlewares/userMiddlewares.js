const userSchema = require('../schema/users')

const validation = async(req, res, next)=>{
    try {
        userSchema.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).send(error)
    }


}
module.exports = {
    validation
}