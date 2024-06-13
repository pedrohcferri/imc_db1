const banner = document.querySelector('.img_imc');   


document.getElementById('meuForm').addEventListener('submit', function(event) {
    var campoValor = document.getElementById('campo').value;
    
    if (campoValor.trim() === '') {
        alert('Por favor, preencha o campo!');
        event.preventDefault(); // Impede o envio do formulário
        }
        });

function calcularIMC(event){
    
            
            event.preventDefault();
    let alturaSelect = parseFloat(document.getElementById('altura').value);
    let pesoSelect = parseInt(document.getElementById('peso').value);
    let imc=pesoSelect/(alturaSelect*alturaSelect);
    

    let resultado = document.getElementById('resultado');
    let mensagem, imagem;

    
    switch(true){
        case imc < 18.5:
            mensagem = "Você está abaixo do peso!";
            imagem = "hulk.jpeg";
            break;
            case imc < 24.9:
                mensagem = "Você está com o peso na média!";
                imagem = "mclove.jpg";
                break;
                case imc < 29.9:
                    mensagem = "Você está com sobrepeso!";
                    imagem = "thor.png";
                    break;
                    case imc >= 30:
                        mensagem = "Você está acima do peso!";
            imagem = "gordin.jpg";

            
    }
 resultado.innerHTML = `
 <div class="campo_resultado" id="resultado">
 <label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} <br>${mensagem}</label>
 <img src="${imagem}" alt="referência imc" width="35%" height="100%">
 </div>`;
 
 }
 
 // if (imc < 18.5) {
 //     mensagem = "Você está abaixo do peso!";
 //     imagem = "hulk.jpeg";
 // } else if (imc < 24.9) {
 //     mensagem = "Você está com o peso na média!";
 //     imagem = "mclove.jpg";
 // } else if (imc < 29.9) {
 //     mensagem = "Você está com sobrepeso!";
 //     imagem = "thor.png";
 // } else {
 //     mensagem = "Você está acima do peso!";
 //     imagem = "gordin.jpg";
 // }