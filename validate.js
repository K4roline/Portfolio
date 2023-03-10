document.getElementById("formcontato__botao").addEventListener('click', MeuAlerta)

function MeuAlerta() {

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ', seus dados foram encaminhados com sucesso para contato!')
    }
}
