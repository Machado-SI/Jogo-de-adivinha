#!/usr/bin/env node

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSecreto
let tentativas = 0
const MAX_TENTATIVAS = 10
const MIN_NUMERO = 1
const MAX_NUMERO = 100

function InicialJogo() {
    //gera um número aleatório
    numeroSecreto = Math.floor(Math.random() * (MAX_NUMERO - MIN_NUMERO + 1)) + MIN_NUMERO
    tentativas = 0
    console.log(
        `Olá bem vindo ao jogo de adivinhar número!
         Tente adivinhar o número secreto entre ${MIN_NUMERO} e ${MIN_NUMERO}
         Você tem ${tentativas} tentativas. Boa sorte
        `
    )
    pedirPalpite()
}

function pedirPalpite() {
    if(tentativas >= MAX_TENTATIVAS) {
        console.log(`\nFim de jogo! Você excedeu o limite de ${MAX_TENTATIVAS} tentativas.`)
        console.log(`O número secreto era ${numeroSecreto}.`)
        rl.close()
        return
    }

    rl.question('Qual é seu palpite: ', (resposta) => {
        const palpite = parseInt(resposta)
        tentativas++

        if(isNaN(palpite)) {
        console.log('Digite um número válido')
        pedirPalpite()
        return
    }

    if(palpite === numeroSecreto) {
        console.log(`\nParábens! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`)
        rl.close()
    } else if (palpite < numeroSecreto) {
        console.log(`O número secreto é MAIOR que ${palpite}. Tentativas: ${tentativas}`)
        pedirPalpite()
    } else if (palpite > numeroSecreto) {
        console.log(`Número secreto é MENOR que ${palpite}. Tentativas: ${tentativas}`)
        pedirPalpite()
    }
    })
}

InicialJogo()