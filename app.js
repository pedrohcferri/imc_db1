function calcularIMC(event){

    event.preventDefault();

    let alturaSelect = parseFloat(document.getElementById('altura').value);
    let pesoSelect = parseInt(document.getElementById('peso').value);

    let imc=pesoSelect/(alturaSelect*alturaSelect);
    // alert("Seu IMC é: " + imc.toFixed(2));

    // let resultado = document.getElementById('resultado');
    // resultado.innerHTML=`<div class="campo_resultado" id="resultado"><label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} </label>
    //  <img src="imc_15748_l.webp" alt="referência imc" width="50%" height="100%"></img></div>`;
    
    if(imc < 18.5){
        
    let resultado = document.getElementById('resultado');
         resultado.innerHTML=`<div class="campo_resultado" id="resultado"><label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} <br>Você está a baixo do peso!</label><img src="hulk.jpeg" alt="referência imc" width="30%" height="100%"></img></div>`;
    
    } else if(imc > 18.5 && imc <24.9){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML=`<div class="campo_resultado" id="resultado"><label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} <br>Você está com o peso na média!</label><img src="mclove.jpg" alt="referência imc" width="40%" height="100%"></img></div>`;
    } else if(imc >= 25 && imc < 29.9){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML=`<div class="campo_resultado" id="resultado"><label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} <br>Você está com sobrepeso!</label><img src="thor.png" alt="referência imc" width="30%" height="100%"></img></div>`;
    } else if(imc >= 30){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML=`<div class="campo_resultado" id="resultado"><label class="campo_texto">Seu IMC é: ${imc.toFixed(2)} <br>Você está acima do peso!</label><img src="gordin.jpg" alt="referência imc" width="30%" height="100%"></img></div>`;
    }
   
}
