//                1

function xRunning(lista) {
    let arr = lista
    for (let i = 0; i < arr.length; i++) {
        arr[0] = "-"
        arr[1] = "-"
        arr[2] = "-"
        arr[3] = "-"
        arr[4] = "-"
        arr[5] = "-"
        arr[6] = "-"
        arr[7] = "-"
        arr[8] = "-"
        arr[9] = "-"
        arr[i] = "x"
        console.log(lista)
    }
}
xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"])



//                     2    

function vowelsCounte(lista) {
    let posisao1 = 0
    let posisao2 = 0
    let posisao3 = 0
    let posisao4 = 0
    let posisao5 = 0
    let posisao6 = 0
    let arr = []
    for (let i = 0; i < 20; i++) {
        if (lista[0][i] == "a" || lista[0][i] == "e" || lista[0][i] == "i" || lista[0][i] == "o" || lista[0][i] == "u") {
            posisao1++
        }
        if (lista[1][i] == "a" || lista[1][i] == "e" || lista[1][i] == "i" || lista[1][i] == "o" || lista[1][i] == "u") {
            posisao2++
        }
        if (lista[2][i] == "a" || lista[2][i] == "e" || lista[2][i] == "i" || lista[2][i] == "o" || lista[2][i] == "u") {
            posisao3++
        }
        if (lista[3][i] == "a" || lista[3][i] == "e" || lista[3][i] == "i" || lista[3][i] == "o" || lista[3][i] == "u") {
            posisao4++
        }
        if (lista[4][i] == "a" || lista[4][i] == "e" || lista[4][i] == "i" || lista[4][i] == "o" || lista[4][i] == "u") {
            posisao5++
        }
        if (lista[5][i] == "a" || lista[5][i] == "e" || lista[5][i] == "i" || lista[5][i] == "o" || lista[5][i] == "u") {
            posisao6++
        }
    }
    arr.push(posisao1)
    arr.push(posisao2)
    arr.push(posisao3)
    arr.push(posisao4)
    arr.push(posisao5)
    arr.push(posisao6)
    return arr
}
console.log(vowelsCounte(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]))




//                     3

function stringTripletGroup(string) {
    let frase = ""
    let espacos = []
    for (let i = 0; i < string.length; i++) {
        frase += string[i]
        if (frase.length == 3) {
            espacos[0] = frase
        }
        if (frase.length == 6) {
            espacos[1] = frase[3]
            espacos[1] += frase[4]
            espacos[1] += frase[5]
        }
        if (frase.length == 9) {
            espacos[2] = frase[6]
            espacos[2] += frase[7]
            espacos[2] += frase[8]
        }
        if (frase.length == 12) {
            espacos[3] = frase[9]
            espacos[3] += frase[10]
            espacos[3] += frase[11]
        }
        if (frase.length == 15) {
            espacos[4] = frase[12]
            espacos[4] += frase[13]
            espacos[4] += frase[14]
        }
        if (frase.length == 18) {
            espacos[5] = frase[15]
            espacos[5] += frase[16]
            espacos[5] += frase[17]
        }
        if (frase.length == 20) {
            espacos[6] = frase[18]
            espacos[6] += frase[19]
            espacos[6] += " "
        }
    } return espacos
}
console.log(stringTripletGroup("Os três mosqueteiros"))



//                        4

function dominantPet(lista) {
    let pets = lista
    let contadorGato = 0
    let contadorCachorro = 0
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].toUpperCase() == "CAT") {
            contadorGato++
        }
        else if (pets[i].toUpperCase() == "DOG") {
            contadorCachorro++
        }
    }
    if (contadorGato > contadorCachorro) {
        return "CAT!"
    }
    else if (contadorGato < contadorCachorro) {
        return "DOG!"
    }
    else {
        return "DRAW!"
    }
}
console.log(dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"]))





//                        5

function divisibleList(lista, numero) {
    let numero1 = 0
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % numero == 0) {
            numero1 = lista[i]
            resultado.push(numero1)
        }
    } return resultado
}
console.log(divisibleList([14, 25, 32, 50, 35, 30,], 5))




//                    6

function trustMeOrNot(bool, numero) {
    let saida = []
    for (let i = 0; i < numero; i++) {
        saida.push(bool)
    } return saida
}
console.log(trustMeOrNot(true, 8))



//                     7

function changeLampStatus(lista) {
    let listaInvertida = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == true) {
            listaInvertida.push(false)
        }
        else if (lista[i] == false) {
            listaInvertida.push(true)
        }
    } return listaInvertida
}
console.log(changeLampStatus([false, false, true, false, true, true, true]))




//                           8

function gradeAverage(lista) {
    let soma = parseFloat(0)
    let contador = 0
    let media = 0
    for (let i = 0; i < lista.length; i++) {
        contador++
        soma += lista[i]
    }
    media = soma / contador
    return `"A média das notas é: ${media.toFixed(2)}" `
}
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))


//                        9

function canvasDeliveriesPercentage(lista) {
    let soma = parseFloat(0)
    if (lista.length > 10) {
        return "Não pode se registrado mais de 10 notas"
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > 10.0) {
            return "A nota do aluno não pode ser maior do que 10.0"
        }
        soma += lista[i]
    }
    return `A porcentagem total de entregas atingida é: ${soma.toFixed(2)}%
Pois foram distribuidos 100 pontos e o aluno conseguiu apenas ${soma.toFixed(1)} deles.`
}
console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7,]))

//                        10

function shouldIGo(lista) {
    let semafaro = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toUpperCase() == "R") {
            semafaro.push("Stop!")
        }
        else if (lista[i].toUpperCase() == "Y") {
            semafaro.push("Attention!")
        }
        else if (lista[i].toUpperCase() == "G") {
            semafaro.push("Go!")
        }
    } return semafaro
}
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]))