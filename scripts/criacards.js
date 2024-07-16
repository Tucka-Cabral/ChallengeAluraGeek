import { conectaApi } from "./conectaApi";

const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento){
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criarCard(nome, valor, imagem);

}

formulario.addEventListener("submit", evento => criarCard(evento));