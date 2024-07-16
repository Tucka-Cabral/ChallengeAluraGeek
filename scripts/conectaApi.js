async function listacards() {
    const conexao = await fetch("http://localhost:3000/cards");
    const conexaoConvertida = await conexao.json();

   return conexaoConvertida;
}

async function incluiuProdutoNaApi(nome, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                imagem: imagem
            }),
        })

        conexaoConvertida = await conexao.json();

        return conexaoConvertida;

    }

export const conectaApi = {
    listacards,
    incluiuProdutoNaApi
}



