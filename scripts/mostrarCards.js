import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem) {
    const card = document.createElement("li");
    card.className = "bloco__produtos__cards__card";
    card.innerHTML = `<div class="bloco__produtos__cards__card__detalhe">
                    <img src="${imagem}" alt="Imagem do Produto">
                    <h3> ${nome} </h3>
                    <p> ${preco} </p>
                </div>`
    return card;
}

async function listacards() {
    const listaApi = await conectaApi.listacards();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
}

listacards();