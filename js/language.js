var choose = document.querySelector('#choose');

        choose.addEventListener('change', () => {
            
            let language = choose.value;
            let linguagemAtual = location.pathname
            console.log('linguagem:', language)
            console.log('atual:', linguagemAtual);

            if (linguagemAtual === '/' || linguagemAtual === '/index.html') {
                if (language === 'pt') {
                    console.log('Não faça nada');
                } else{
                    location.href = '/es/index.html';
                }
            }
        })