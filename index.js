const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const { json } = require('body-parser')
const { query } = require('express')

const app = express()



app.use(cors())
app.use(json())

app.get('/create', (req, res) => {
  // http://localhost:4001/create?nome=a&cpf=b&endereco=c
  console.log(req.query)
  const { nome, cpf, endereco, telefone } = req.query
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()
  action.query(
    `insert into cliente (nome, cpf, endereco, telefone) values('${nome}', '${cpf}', '${endereco}', '${telefone}')`,
    (error, results, fields) => {
      if (error) console.log(error)
      res.json({
        msg: 'Criado',
      })
    }
  )
})


app.get('/add', (req, res) => {
  // http://localhost:4001/create?nome=a&cpf=b&endereco=c
  console.log(req.query)
  const { nome, cpf, endereco, telefone } = req.query
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()
  action.query(
    `insert into cliente (nome, cpf, endereco, telefone) values('${nome}', '${cpf}', '${endereco}', '${telefone}')`,
    (error, results, fields) => {
      if (error) console.log(error)
      res.json({
        msg: 'Criado',
      })
    }
  )
})



app.get('/login', (req, res) => {
  // http://localhost:4001/login

  console.log(req.query)
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()

  action.query(`select * from cliente where cpf = '${req.query.cpf}'` , (error, results, fields) => {
    console.log(results)

    console.log(`select * from cliente where cpf = '${req.query.cpf}'`)
    if (error) console.log(error)
    res.json(results)
  })
})


app.get('/read', (req, res) => {
  // http://localhost:4001/read
  console.log(req.query)
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()
  action.query(`select * from cliente`, (error, results, fields) => {
    if (error) console.log(error)
    res.json(results)
  })

})

app.get('/update', (req, res) => {
  // http://localhost:4001/update?id=1&nome=a&cpf=b&endereco=c
  console.log(req.query)
  const { id, nome, cpf, endereco, telefone } = req.query
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()
  action.query(
    `update cliente set nome = '${nome}', cpf = '${cpf}', endereco = '${endereco}', telefone = '${telefone}' where id = '${id}'`,
    (error, results, fields) => {
      if (error) console.log(error)
      res.json({
        msg: 'Atualizado',
      })
    }
  )
})

app.get('/delete', (req, res) => {
  // http://localhost:4001/delete?id=3
  console.log(req.query)
  const { id } = req.query
  const action = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'pGOTWZFbg9',
    password: 'v0f3o3Gu62',
    database: 'pGOTWZFbg9',
  })
  action.connect()
  action.query(
    `delete from cliente where id = '${id}'`,
    (error, results, fields) => {
      if (error) console.log(error)
      res.json({
        msg: 'Deletado',
      })
    }
  )
})

action.end(function(err) {
  if (err) {
    return console.log('Error:' + err.message);
  }
  console.log('Conexão com o banco encerrada.');
});
app.listen(process.env.PORT || 4001)