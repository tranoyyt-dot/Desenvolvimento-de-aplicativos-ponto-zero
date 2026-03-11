let botao = document.getElementById('botaoCor');
botao.addEventListener('click',() => {

    let corAtual = 
      document.body.style.backgroundColor;
      if(corAtual== 'green'){
        document.body.style.backgroundColor = 'grey';
      } else  {
        document.body.style.backgroundColor = 'green';     
    }});
