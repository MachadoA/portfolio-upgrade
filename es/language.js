var choose = document.querySelector('#choose');

        choose.addEventListener('change', () => {
            
            let language = choose.value;
            let linguagemAtual = location.pathname
            console.log('linguagem:', language)
            console.log('atual:', linguagemAtual);

            if (linguagemAtual === '/es/' || linguagemAtual === '/es/index.html') {
                if (language === 'es') {
                    console.log('Não faça nada');
                } else{
                    location.href = '../index.html';
                }
            }
        })