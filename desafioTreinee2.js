class Calculadora {

    array = [];

    constructor(array) {
        this.array = array;
    }

    printAll() {
        console.log(`
        Fatorial do primeiro elemento: ${this.fatorial(this.array[0])}
        Média aritimética: ${this.media()}
        Variância: ${this.variancia()}
        Desvio padrão: ${this.desvioPadrao()}
        Números ímpares: ${this.impares()}
        `)
    }

    fatorial(numero) {
        if (numero === 0) {
            return 1;
        } else {
            return numero * this.fatorial(numero - 1);
        }
    }

    media() {
        let soma = 0
        let mediaAritimetica = 0
        this.array.forEach(element => {
            soma += element
            mediaAritimetica = soma / this.array.length
        });
        return mediaAritimetica
    }

    variancia() {
        let media = this.media()
        let variancia = 0
        this.array.forEach(element => {
            variancia += ((element - media)**2)
        });
        variancia /= this.array.length
        return variancia
    }

    desvioPadrao() {
        let desvioPadrao = this.variancia() ** (1/2)
        return desvioPadrao
    }

    impares() {
        let arrayImpares = []
        this.array.forEach(element => {
            if (!(element%2 === 0)){
                arrayImpares.push(element)
            }
        });
        return arrayImpares
    }
}

let calc1 = new Calculadora([7, 8, 10, 24, 21, 38, 157, 3, 16]);
calc1.printAll();