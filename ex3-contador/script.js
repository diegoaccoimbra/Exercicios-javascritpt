//Objetos que refenciam os campos dos números digitados, o botão e o campo de resultado.
let numeroInicio = document.querySelector("#numeroInicio")
let numeroFim = document.querySelector("#numeroFim")
let numeroPasso = document.querySelector("#numeroPasso")
let button = document.querySelector("button")
let resultado = document.querySelector("#resultado")

numeroInicio.focus()

//Event listener para o botão executar a função "contar".
button.addEventListener("click", contar)

//Função para realizar a contagem.
function contar() {
    //Teste pra saber se o usuário digitou os números.
    if (numeroInicio.value === "" || numeroFim.value === "" || numeroPasso.value === "") {
        //Mensagem de erro
        window.alert("Erro! Verifique se os números foram inseridos corretamente.")
    }
    else {
        //Convertendo os números de string para number.
        let inicio = Number(numeroInicio.value)
        let fim = Number(numeroFim.value)
        let passo = Number(numeroPasso.value)

        //Laço pra retorner o resultado.
        for (i = inicio; i <= fim; i = i + passo) {
            resultado.innerHTML = resultado.innerHTML + i + " → "
        }
        resultado.innerHTML = resultado.innerHTML + "FIM"

        //Desativando os campos de digitação e o botão.
        numeroInicio.disabled = true
        numeroFim.disabled = true
        numeroPasso.disabled = true
        button.disabled = true

        //Criando o botão pra reiniciar o programa.
        buttonReiniciar = document.createElement("button")
        //Adicionando o conteúdo "Reiniciar" no botão.
        buttonReiniciar.innerHTML = "Reiniciar"
        //Criando uma referência pra tag main e adicionando o botão no final da tag.
        let tagMain = document.querySelector("main")
        tagMain.appendChild(buttonReiniciar)
        //Event listener pra reiniciar o programa quando o botão de reiniciar for clicado.
        buttonReiniciar.addEventListener("click", reiniciar)
    }
}

//Função pra reinicar o programa.
function reiniciar() {
    //Ativando os campos de digitação e o botão. 
    numeroInicio.disabled = false
    numeroFim.disabled = false
    numeroPasso.disabled = false
    button.disabled = false

    numeroInicio.focus()

    //Limpando os campos de digitação e o campo de resultado.
    numeroInicio.value = ""
    numeroFim.value = ""
    numeroPasso.value = ""
    resultado.innerHTML = ""

    //Removendo o botão de reiniciar
    buttonReiniciar.parentNode.removeChild(buttonReiniciar)
}
