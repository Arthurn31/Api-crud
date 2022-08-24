//import do express
import { promises as fs } from 'fs'
//função de adicionar os alunos no json
async function cadastrar(aluno) {
  var dados = JSON.parse(await fs.readFile('./Data/grades.json'))
  dados.grades.push({
    id: dados.nextId,
    student: aluno.nome,
    subject: aluno.materia,
    type: aluno.materia,
    value: aluno.nota,
    timestamp: aluno.date
  }),
    dados.nextId++
  fs.writeFile('./Data/grades.json', JSON.stringify(dados, null, 2))
}
//função para mostrar adiconar na lista de alunos
async function listar() {
  var dados = JSON.parse(await fs.readFile('./Data/grades.json'))
  return dados.grades
}
//editar a tabela dos alunos
async function editar() {
  var dados = JSON.parse(await fs.readFile('./Data/grades.json'))
  
}
//deletar a função dos alunos
async function deletar(id) {

  var dados = JSON.parse(await fs.readFile('./Data/grades.json'))
  dados.grades = dados.grades.filter(element => element.id != id)

  fs.writeFile('./Data/grades.json', JSON.stringify(dados, null, 2))
}
//exportar as funções do controller
export default { cadastrar, listar, editar, deletar }
