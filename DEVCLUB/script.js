/* variaveis = um espaço da memória do computador que armazena dados*/
//função = um trecho do código que só é executado quando é chamado//

let chave = "d784c0a25984ee1aedd8d2915c35a439"

function colocarNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

function cliqueNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}