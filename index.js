//import do express
import express from 'express'
import bodyP from 'body-parser'
// import da pasta controler
import controller from './Controller/grades.js'
// variavel para criar o express
const server = express()
server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(bodyP.urlencoded({ extended: true }))
server.use(bodyP.json())
// puxando dados do controller
server.get("/",controller.listar)

server.post('/op', controller.cadastrar)
server.post('/del',controller.delet)

// servidor que exibe a tela
server.listen(3000, () => {
  console.log('http://localhost:3000')
})
