#!/usr/bin/env node

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSecreto
let tentativas = 0
const MIN_TENTATIVAS = 10
const MIN_NUMERO = 1
const MAX_NUMMERO = 100

function InicialJogo() {
    //gera um número aleatório
    const numeroAleatorio = Math.floor(Math.random() * (MAX_NUMMERO - MIN_NUMERO + 1)) + MIN_NUMERO
    tentativas = 0
    console.log(
        `Olá bem vindo ao jogo de adivinhar número!
         Tente adivinhar o número secreto entre ${MIN_NUMERO} e ${MIN_NUMERO}
         Você tem ${tentativas}. Boa sorte
        `
    )
    pedirPalpite()
}

function pedirPalpite() {

}