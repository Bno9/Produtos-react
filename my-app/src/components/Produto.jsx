function ProdutoCard({ produto }) {
    return (
        <div className="card card-produto">
            <h2>{produto.nome.toUpperCase()}</h2>
            <p>{produto.descricao}</p>
            <h3>R$ {produto.preco}</h3>
        </div>
    )
}

export { ProdutoCard }