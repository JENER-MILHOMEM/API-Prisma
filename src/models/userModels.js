const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const createUser = async(data)=>{
    return await prisma.user.create({
        data:{
            email : data.email,
            senha : data.senha,
            nome : data.nome,
        }
    })
}
const getAll = async()=>{
   return await prisma.findMuser.any()
}

const update = async(req)=>{
    const data = req.body
    return await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        email: data.email,
        senha: data.senha,
        nome: data.nome,
      },
    });
}
const deleteUser = async(id)=>{
    return await prisma.user.delete({
  where: {
    id: Number(id),
  },
})
}
module.exports = {
    createUser,
    getAll,
    update,
    deleteUser  
}