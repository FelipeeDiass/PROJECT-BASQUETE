// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// // modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

function listarMvp() {
    fetch('/usuarios/listarMvp').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {

                console.log('Dados:', JSON.stringify(resposta))
                containerJogador.innerHTML = ''

                for (let i = 0; i < resposta.length; i++) {
                    var posicao = resposta[i]

                    containerJogador.innerHTML += `
                    <div class="card-jogador">
                    <h1 class="titulo-jogador">${posicao.nomejogador}</h1>
                    <img src="${posicao.img}" alt="">
                    <button onclick="votarMvp(${sessionStorage.ID_USUARIO},${posicao.idjogador})">Votar</button>
                </div>`
                }
            })
        }

    })

}

function votarMvp(idUsuario,idjogador) {

    fetch('/usuarios/votarMvp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            idjogadorServer: idjogador,
        }),
    }).then(function (resposta) {
        console.log('resposta: ', resposta);
        if (resposta.ok) {
            alert('Votação realizada com sucesso')
        } else {
            alert('Erro ao realizar o voto')
            throw 'Houve um erro ao tentar realizar o cadastro!';
        }
    }).catch(function (resposta) {
        console.log('#ERRO: ${resposta}');
    });
    return false;
}