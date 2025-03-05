function mainInit(){
    const form = document.querySelector(".form");
    const result = document.querySelector(".resultado");
    const pessoa = [];
    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log("1")
    // };
    function recebeEventoForms(evento){
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const idade = form.querySelector(".idade");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        pessoa.push({nome: nome.value, idade: idade.value, peso: peso.value, altura: altura.value})
    
        console.log(pessoa);
        result.innerHTML += `<p>${nome.value} - ${idade.value}</p>`
    };
    form.addEventListener('submit', recebeEventoForms);
}
mainInit();