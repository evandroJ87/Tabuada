// Criando uma tabuada //

alert("Seja Bem Vindo!!")
alert("Aqui você terá acesso a tabuada")


for (var i=1; i<11; i++){
    document.write("<p>Tabuada do "+i+"</p>")
    for (var j=1; j<11; j++){
        document.write(i + " x "+ j + " = " + (i*j)+"<br>")
    }
}