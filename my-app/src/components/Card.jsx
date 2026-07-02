import { ProdutoCard } from './Produto'

function Card({ produtos }) {
  return (
    <div className='card'>
      {produtos.map((element) => (
        <ProdutoCard key={element.id} produto={element} />
      ))}
    </div>
  )
}

export { Card }