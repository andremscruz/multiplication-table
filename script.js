function gerar(){
    var num = document.getElementById("num");
    var numero = Number(num.value);
    var caixa = document.getElementById("box");

    function removeOpts(selectElement){
        var i, L = selectElement.options.length - 1;
        for(i = L; i >= 0; i--){
            selectElement.remove(i);
        }
    }

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