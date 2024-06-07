const z = require('zod')


const userSchema = z.object({
    email: z.string({
        required_error: "email é obrigatorio",
        invalid_type_error: "o tipo do email deve ser string"
    }).email({message: "tem q ser um email valido"}),
    senha: z.string().min(6),
    nome: z.string()
})

module.exports = userSchema