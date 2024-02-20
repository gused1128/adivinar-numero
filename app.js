let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 50;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'ves': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p','El numero secreto es menor.')
            asignarTextoElemento('h2',`Intentos fallidos ${intentos}/10`);
            asignarTextoElemento('h3',`Numero Anterior ${numeroDeUsuario}`);
            }
            else{
            asignarTextoElemento ('p','El numero secreto es mayor.')
            asignarTextoElemento('h2',`Intentos fallidos ${intentos}/10`);
            asignarTextoElemento('h3',`Numero Anterior  ${numeroDeUsuario}`);
            }
            intentos++;
            limpiarCaja();
        }

        
      
              
        
    return;
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
   
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
    }
}


function reiniciarJuego(){
    limpiarCaja();
    CondicionesIniciales();
    
}

CondicionesIniciales();
