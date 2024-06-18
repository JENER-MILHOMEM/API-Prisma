const userModels = require('../models/userModels')


const create = async(req, res)=>{
    try {
        const user = await userModels.createUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
}
const getAll = async(req, res)=>{
    try {
        const user = await userModels.getAll()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
}
const update = async(req, res)=>{
    try {
        const user = await userModels.update(req)
        res.status(202).send(user)
    } catch (error) {
        res.status(404).send(error)
        console.log("deu erro");
        console.log(error)
    }
}

const deleteUser = async(req, res)=>{
    try {
        const user = await userModels.deleteUser(req)
        res.status(202).send(user)
    } catch (error) {
        res.status(404).send(error)
        console.log(error);
    }
}


module.exports = {
    create,
    getAll,
    update,
    deleteUser
}