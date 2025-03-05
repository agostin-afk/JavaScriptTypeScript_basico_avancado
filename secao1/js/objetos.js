// No final é tudo struct
const pessoa ={
    nome: "Agosto",
    idade: 45,
    telefones: ["88-88888888", 999999999]
};
// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.telefones);
// criando uma funcao para criar um objeto:
function criarPessoa(nome, idade, telefones){
    // return {
    //     nome: nome,
    //     idade: idade,
    //     telefones: telefones
    // }
    return {nome, idade, telefones,falar(){console.log(`Olá, me chamo ${this.nome}`)}}
}
pessoa2 = criarPessoa("pedro", 19, [null]);
console.log(pessoa2);
pessoa2.falar()