window.onload = function() {
    console.warn("OLAAAA MUNDO")

    let meuForm = $("#formProduto")

    console.log(meuForm)

    meuForm.on("submit", function(event) {
        event.preventDefault()
        console.log("Clicou")
        prepararBotao()
    })
    
    function prepararBotao() {
        let botao = $("#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }

    function clicou(){
        prepararBotao()
    }
}