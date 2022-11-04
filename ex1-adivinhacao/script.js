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
    }
    //Aqui verifica se o limite de palpites foi atingido. Se sim, exibe a mensagen abaixo.
    else if (contagemPalpites === 10) {
        ultimoResultado.innerHTML = "Você atingiu o limite de palpites."
        //altoOuBaixo com a mensagem vazia pra não aparecer quando o limite for atingido.
        altoOuBaixo.innerHTML = ""
    }
    //Aqui é caso o número digitado seja errado. Exibindo a seguinte mensagem com o estilos aplicados.
    else {
        ultimoResultado.innerHTML = "Você errou!"
        ultimoResultado.style.backgroundColor = "lightcoral"
        ultimoResultado.style.maxWidth = "100px"
        ultimoResultado.style.padding = "10px"
        ultimoResultado.style.borderRadius = "5px"

        //Verificando se o número digitado é maior ou menor que o número aleatório escolhido pelo computador para exibir a mensagem de o valor está alto ou baixo.
        if (numeroDigitado < numeroAleatorio) {
            altoOuBaixo.innerHTML = "O seu palpite está baixo"
        }
        else {
            altoOuBaixo.innerHTML = "O seu palpite está alto"
        }
    }


    //Atualizando o contador de palpites
    contagemPalpites = contagemPalpites + 1
}
