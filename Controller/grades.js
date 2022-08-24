//import do express
import express from 'express'
//import das funções do model
import model from '../Model/Grades.js'
//função para adicionar os dados dos alunos no json
async function cadastrar(req, res) {
  var aluno = {
    nome: req.body.nome,
    date: req.body.date,
    materia: req.body.materia,
    atividade: req.body.atividade,
    nota: req.body.nota
  }
  model.cadastrar(aluno)
  res.redirect('/')
}
//função para exibir na tela
async function listar(req, res) {
  var exibir = await model.listar()
  console.log(exibir)
  res.render('cadastrar', { Dados: exibir })
}
//função para editar os alunos
async function editar(req, res) {
  var edit = await model.editar()
}
//função para deletar os alunos
async function delet(req, res) {
  var deletar = await model.deletar(req.query.id)
  res.redirect('/')
}
//mandando os dados do  model
export default { cadastrar, listar, delet, editar }
