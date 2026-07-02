function FormCadastro({prevProdutos, setProdutos}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const nome = formData.get('nome')
        const preco = formData.get('preco')
        const descricao = formData.get('descricao')

        const novoProduto = {
            id: prevProdutos.length + 1,
            nome: nome,
            preco: preco,
            descricao: descricao
        }

        setProdutos((prevProdutos) => [...prevProdutos, novoProduto])
    }

    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>
            <label>
                Nome: 
                <input type="text" name="nome" />
            </label>
            <label>
                Preço: 
                <input placeholder="R$" type="number" name="preco" />
            </label>
            <label>
                Descrição: 
                <input type="text" name="descricao" />
            </label>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export { FormCadastro }