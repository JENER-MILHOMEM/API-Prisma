const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const createUser = async(data)=>{
    return prisma.user.create({
        data: {
            email: data.email,
            senha: data.senha,
            nome: data.nome,
        }
    });
}
const getAll = async()=>{
   return prisma.user.findMany();
}

const update = async(req)=>{
    const data = req.body
    return  prisma.user.update({
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

const deleteUser = async(req)=>{
    return prisma.user.delete({
        where: {
          id: Number(req.params.id),
        },
      });
}

module.exports = {
    createUser,
    getAll,
    update,
    deleteUser
}