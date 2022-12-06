//Objetos que referenciam o campo de digitação do número e o botão.
let numero = document.querySelector("#numero")
let button = document.querySelector("button")
let tabuada = document.querySelector("#tabuada")

numero.focus()

//Event listener para executar a função assim que o botão for clicado.
button.addEventListener("click", gerarTabuada)

//Função
function gerarTabuada() {

    //Teste que verifica se o número foi inserido.
    if (numero.value === "") {
        window.alert("Erro! Verifique se o número foi inserido corretamente.")
        numero.focus()
    }
    else {
        //Convertendo o número digitado pra number.
        let numeroEscolhido = Number(numero.value)

        //Deixando o select limpo pra poder executar o programa mais de uma vez sem problemas.
        tabuada.innerHTML = ""

        //Gerando a tabuada.
        for (i = 0; i <= 10; i++) {
            //Criando um option pro select.
            let item = document.createElement("option")

            //Editando o html do option.
            item.innerHTML = `${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`

            //Adicionando o item pro select.
            tabuada.appendChild(item)
        }
    }
}
