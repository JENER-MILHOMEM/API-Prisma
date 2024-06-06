const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwc = require("jsonwebtoken");

const autenticate = async(req, res)=>{
    const {email, senha} = req.body

    const user = await prisma.user.findUnique({where: {email: email}})

    if (!user) {
        return res.status(404).send("usuario ou senha não encotrada");
    }
    if (user.senha !== senha) {
        return res.status(401).send('usuario ou senha não encotrada')
    }

    const token = jwc.sign({id: user.id}, "secret", {expiresIn: "1d"}) 

    return res.json({
        user: user,
        token:token})
}

module.exports = {
    autenticate
}