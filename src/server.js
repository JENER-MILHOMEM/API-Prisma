const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()
PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log(`ta rodando na porta ${PORT}`);
})