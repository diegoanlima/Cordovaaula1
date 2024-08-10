function carregou() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'A página carregou!';

    document.addEventListener('deviceready', dispositivoPronto, true);
    document.addEventListener('pause', pause, true);
    document.addEventListener('resume', resume, true);

} 

function dispositivoPronto() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>0 dispositivo está pronto!';

    
}
function pause() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>0 dispositivo pausado!';
}
function resume() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>resume!';
}
