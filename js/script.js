//let star = document.querySelector('.star');
//star.innerHTML = '';

let numero = '';

function clicou(n) {



    let selecionado = document.querySelector('.selected');
    if (selecionado == null){
        numero = n;
        document.getElementById(numero).classList.add('selected');
    }else{
        document.getElementById(numero).classList.remove('selected');
        numero = n;
        document.getElementById(numero).classList.add('selected');
    }

    
    
    return numero;


}
function submit() {

    let click = addEventListener('click', () => {
        if (numero == '') {
            document.querySelector('.nota-selecionada').innerHTML = `Você não selecionou nada!`;
        } else {
            document.querySelector('.nota-selecionada').innerHTML = `You selected  ${numero}  out of 5`;
        }
    });
    document.querySelector('.tela-2').style.display = 'flex';
    document.querySelector('.tela-1').style.display = 'none';
    
}
function voltar(){
    window.location.reload(true);
}

