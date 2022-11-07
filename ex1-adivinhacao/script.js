//Número aleatório que vai ser escolhido pelo computador.
var numeroAleatorio = Math.floor(Math.random() * 100) + 1

//Objetos que referenciam o campo do número digitado pelo usuário e o botão de enviar o palpite.
var numero = window.document.querySelector("input#numero")
var enviar = window.document.querySelector("button#enviar")

//Objetos para o campo de resultados que vai conter: palpites, último resultado e se o valor é alto ou baixo, respectivamente.
var palpites = window.document.querySelector("p#palpites")
var ultimoResultado = window.document.querySelector("p#ultimoResultado")
var altoOuBaixo = window.document.querySelector("p#AltoOuBaixo")

//Variáveis que vão armazenar a quantidade de palpites e fazer uma referência para o botão de reiniciar o jogo, respectivamente.
var contagemPalpites = 1
var botaoReiniciar

//Colocando o event listener no objeto do botão para executar a função quando o evento de clique for disparado.
enviar.addEventListener("click", conferirPalpite)

//Função para conferir o palpite
function conferirPalpite() {
    //Convertendo o número fornecido pelo usuário de string pra number.
    var numeroDigitado = Number(numero.value)
    
    //Aqui ativa a mensagem do histórico de palpites feitos quando a contagem de palpites atinge o valor de 1.
    if (contagemPalpites === 1) {
        palpites.innerHTML = "Palpites anteriores: "
    }

    //Aqui atualiza o histórico de palpites com base nos números digitados pelo usuário.
    palpites.innerHTML = palpites.innerHTML + numeroDigitado + " "

    //Aqui verifica se o número digitado é o número aleatório escolhido pelo computador.
    if (numeroDigitado === numeroAleatorio) {
        //Caso o número seja igual, aparece a seguinte mensagem com os estilos aplicados.
        ultimoResultado.innerHTML = "Você acertou!"
        ultimoResultado.style.backgroundColor = "lightgreen"
        ultimoResultado.style.maxWidth = "100px"
        ultimoResultado.style.padding = "10px"
        ultimoResultado.style.borderRadius = "5px"

        //Colocando a mensagem vazia nesse objeto pra não aparecer se o valor é alto ou baixo quando o usuário acertar.
        altoOuBaixo.innerHTML = ""

        //Função que finaliza o jogo.
        fimDeJogo()
    }
    //Aqui verifica se o limite de palpites foi atingido. Se sim, exibe a mensagen abaixo com os estilos aplicados.
    else if (contagemPalpites === 10) {
        ultimoResultado.innerHTML = "Você atingiu o limite de palpites."
        ultimoResultado.style.backgroundColor = "lightcoral"
        ultimoResultado.style.maxWidth = "250px"
        ultimoResultado.style.padding = "10px"
        ultimoResultado.style.borderRadius = "5px"

        //altoOuBaixo com a mensagem vazia pra não aparecer quando o limite for atingido.
        altoOuBaixo.innerHTML = ""

        //Função que finaliza o jogo.
        fimDeJogo()
    }
    //Aqui é caso o número digitado seja errado. Exibindo a seguinte mensagem com o estilos aplicados.
    else {
        ultimoResultado.innerHTML = "Você errou!"
        ultimoResultado.style.backgroundColor = "lightcoral"
        ultimoResultado.style.maxWidth = "100px"
        ultimoResultado.style.padding = "10px"
        ultimoResultado.style.borderRadius = "5px"

        //Verificando se o número digitado é maior ou menor que o número aleatório escolhido pelo computador para exibir a mensagem de que o valor está alto ou baixo.
        if (numeroDigitado < numeroAleatorio) {
            altoOuBaixo.innerHTML = "O seu palpite está baixo"
        }
        else {
            altoOuBaixo.innerHTML = "O seu palpite está alto"
        }
    }


    //Atualizando o contador de palpites.
    contagemPalpites = contagemPalpites + 1
    //Deixando o campo de palpites vazio.
    numero.value = ""
    //Colocando o foco no campo de palpites para facilitar a digitação do usuário.
    numero.focus()

    //Função pra finalizar o jogo.
    function fimDeJogo() {
        //Desativando a entrada de texto do campo de palpites e o clique no botão de enviar.
        numero.disabled = true
        enviar.disabled = true

        //Criando o elemento "botão de reiniciar o jogo".
        botaoReiniciar = document.createElement("button")

        //Adicionando o conteúdo de "Jogar novamente" ao botão.
        botaoReiniciar.innerHTML = "Jogar novamente"
        
        //Adicionando o elemento no final do código HTML.
        document.body.appendChild(botaoReiniciar)
        
        //Event listener que quando disparado executa a função de reinicar o jogo.
        botaoReiniciar.addEventListener("click", reiniciarJogo)
    }

    //Função pra reiniciar o jogo.
    function reiniciarJogo() {
        //Colocando a contagem dos palpites em 1 novamente.
        contagemPalpites = 1

        //Colocando os campos da área de resultados vazios novamente.
        palpites.innerHTML = ""
        ultimoResultado.innerHTML = ""
        ultimoResultado.style.backgroundColor = "white"
        altoOuBaixo.innerHTML = ""

        //Ativando a entrada de texto do campo de palpites e o clique do botão de enviar.
        numero.disabled = false
        enviar.disabled = false
        //Deixando o campo de palpites vazio.
        numero.value = ""
        //Colocando o foco no campo de palpites para facilitar a digitação do usuário.
        numero.focus()

        //Removendo o botão de reiniciar o jogo.
        botaoReiniciar.parentNode.removeChild(botaoReiniciar)

        //Gerando um novo número aleatório pro novo jogo.
        numeroAleatorio = Math.floor(Math.random() * 100) + 1
    }
}
