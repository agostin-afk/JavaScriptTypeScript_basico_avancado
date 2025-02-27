let myname = "Agosto";
// get Char
console.log(myname.charAt(0));
// concatenar
console.log(myname.concat(" ","Ferreira"));
console.log(myname) //não altera a string original
// inicio de palavra
console.log(myname.concat(" ","Ferreira").indexOf("Ferreira"));
// caso passe um int dps da string ele usa esse int como index inicial para a busca
// lestIndexOf() é a mesma coisa, só que começa de tras para frente
for(i =0 ; i<myname.length; i++){
    console.log(myname[i])
}
// existe o replace():
let myString = "O rato roeu roupa do rei de roma";
console.log(myString.replace(/r/g, "$%"));