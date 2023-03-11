var itens = []; 

document.querySelector('input[type=submit]').addEventListener('click',()=>{ //adicionando evento do clicl
    var nomeProduto = document.querySelector('input[name=nomeProduto]');// usando value para pegar oque foi digitado pelo usuario
    var valorProduto = parseFloat(document.querySelector('input[name=valorProduto]').value);
    var unidades = parseInt(document.querySelector('input[name=unidades]').value);
    var subTotal = valorProduto * unidades;
    
    itens.push({ // cadastrando os itens enviados pelo usuario
        nome: nomeProduto.value,
        valor: valorProduto,
        unidades: unidades,
        subTotal: subTotal,

    });
    let listaProdutos = document.querySelector('.listaProdutos');
    let soma = 0;
    listaProdutos.innerHTML ="";
   itens.map((val)=>{//usando.map em intems para recuperar os valores adcionados
    soma+=val.subTotal
    listaProdutos.innerHTML+=`
    <div class="listaProdutoSingle">
        <h3>`+val.nome+`</h3>
        <span>R$`+val.valor+`</span>
        <h4>`+val.unidades+` UND</h4>
        <h5>R$`+val.subTotal+`</h5>
    </div>
    `

   });
   soma = soma.toFixed(2) // funçã JS que define apenas 2 casas decimais
    nomeProduto.value = "";
   
   let elementoSoma = document.querySelector('.somaTotal h1');
    elementoSoma.innerHTML = 'R$'+soma;
   
});
document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    document.querySelector('.listaProdutos').innerHTML='';
    document.querySelector('.somaTotal h1').innerHTML='Total:R$0';
    itens=[];
})