function gerar(){
    var num = document.getElementById("num");
    var numero = Number(num.value);
    var caixa = document.getElementById("box");

    

    if(num.value.length == 0){
        window.alert('Digite um numero e tente novamente');
        removeOpts(caixa);
    }
    else{
        removeOpts(caixa);
        for(var i = 0; i <= 10; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = `${numero} x ${i} = ${numero*i}`;
        caixa.appendChild(opt);
        }
    }
}