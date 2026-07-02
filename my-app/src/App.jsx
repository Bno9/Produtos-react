import './components/App.css'
import './components/Form-cadastro.css'
import './components/Card.css'
import { Card } from './components/Card'
import { FormCadastro } from './components/Cadastro'
import { useState } from "react"


function App() {
  const [produtos, setProdutos] = useState([{
    id: 1,
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    preco: 10.00
  }, {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Descrição do Produto 2',
    preco: 20.00
  },
  {
    id: 3,
    nome: 'Produto 3',
    descricao: 'Descrição do Produto 3',
    preco: 30.00
  }])

  return (
    <div>
      <h1>Catálogo de produtos</h1>
      <FormCadastro prevProdutos={produtos} setProdutos={setProdutos}></FormCadastro>

      <Card key={"card"} produtos={produtos}></Card>
    </div>
  )
}

export default App

