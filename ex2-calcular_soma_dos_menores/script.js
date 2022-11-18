//Objetos que referenciam o campo de digitação e o botão.
let numero = document.querySelector("#numero")
let buttonAdicionar = document.querySelector("#buttonAdicionar")
numero.focus()

//Objetos que referenciam o parágrafo da lista de números adicionados e o resultado da soma.
let lista = document.querySelector("#lista")
let resultado = document.querySelector("#resultado")

//Botão pra calcular novamente e reiniciar o programa.
let buttonCalcularNovamente

//Array que vai armazenar os números.
let listaNumeros = []

//Event listener no botão para executar a dunção de adicionar numero na lista quando for clicado.
buttonAdicionar.addEventListener("click", adicionar_numero)

//Função que adiciona o número digitado na lista de números.
function adicionar_numero() {
    //Adicionando o valor digitado no campo na lista de números.
    listaNumeros.push(Number(numero.value))
    
    //Teste pra adicionar o parágrafo com os números digitados anteriormentes assim que o primeiro valor for inserido.
    if (listaNumeros.length === 1 ) {
        lista.innerHTML = "Você adicionou: "
    }
    //Atualizando o valor do parágrafo com os números digitados.
    lista.innerHTML = lista.innerHTML + numero.value + " "

    //Colocando o valor do campo de digitação vazio.
    numero.value = ""

    //Teste pra saber se o array já tem 6 itens pra poder desativar o campo de digitação e o botão.
    if (listaNumeros.length === 6) {
        numero.disabled = true
        buttonAdicionar.disabled = true
        calcula_minimo_2()
    }
    
    numero.focus()
}

//Função que calcula os dois menores números.
function calcula_minimo_2() {
    //Organizando os números da lista do menor para o maior.
    listaNumeros.sort()
    //Definindo o menor número, o segundo menor número e a soma deles.
    let menor = listaNumeros[0]
    let segundoMenor = listaNumeros[1]
    let soma = menor + segundoMenor

    //Retornando os resultados dos cálculos no parágrafo de resultado.
    resultado.innerHTML = `Menor: ${menor}\n Segundo menor: ${segundoMenor}\n Soma dos dois menores ${soma}`

    //Criando o elemento do botão de "calcular novamente".
    buttonCalcularNovamente = document.createElement("button")
    
    //Adicionando o conteúdo "Calcular novamente" ao botão.
    buttonCalcularNovamente.innerHTML = "Calcular novamente"

    //Adicionando o elemento no final do código HTML.
    document.body.appendChild(buttonCalcularNovamente)

    //Event listener para reiniciar o programa quando o botão for clicado.
    buttonCalcularNovamente.addEventListener("click", calcular_novamente)
}


//Função pra reiniciar o programa.
function calcular_novamente() {
    //Ativando os campos de digitação e o botão de adicionar.
    numero.disabled = false
    buttonAdicionar.disabled = false
    //Esvaziando a lista
    listaNumeros = []
    
    //Limpando o conteúdo dos parágrafos com a lista dos números digitados e o resultado.
    lista.innerHTML = ""
    resultado.innerHTML = ""

    //Removendo o botão de "Calcular novamente".
    buttonCalcularNovamente.parentNode.removeChild(buttonCalcularNovamente)

    numero.focus()
}
