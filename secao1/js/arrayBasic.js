let nomes = ["Agosto", "Pedro", "Lucas"];
// adiciona no final da lista
nomes[nomes.length] = "Luiza";
nomes.push("Jamal");
// add comeco da lista
nomes.unshift("Felipe");

// remove final da lista, retorna o item removido
const removido = nomes.pop();
console.log(removido);
// remove comeco da lista, retorna o item removido
const removido_init = nomes.shift();
console.log(removido_init);

console.log(nomes)

// tipo e isntancia:
console.log(typeof nomes);
console.log(nomes instanceof Array);

// slice funciona para arrays, assim como outros metodos de string