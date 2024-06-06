const z = require('zod')


const userSchema = z.object({
    email: z.string().email(),
    senha: z.string().min(6),
    name: z.string()
})