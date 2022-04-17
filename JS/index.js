function abrirLink(delay, link) {
    setTimeout(
        function(){
            window.location = link;
        }
        
    , delay*1000);
};




function menuMobile(botao, menu, checkBox) {
    setTimeout(
        function(){

            const menu = document.getElementById('menu-mobile');
            const checkBox = document.getElementById('menu-mobile-check');
            const botao = document.getElementById('menu-mobile-button');
            const headerLogo = document.getElementById('header-logo-box-imagem');


            
            if (checkBox.checked) {
                botao.style.transform = 'rotate(-90deg)';

                menu.style.transform = 'translateY(0)';
                console.log('abriu');

                botao.style.color = 'rgb(102, 102, 102)';
                headerLogo.style.filter = 'brightness(0.4)';

                document.getElementById('header').style.position = 'fixed';
    
            }
            else {
                botao.style.transform = 'rotate(0)';

                menu.style.transform = 'translateY(-100%)';
                console.log('fechou');

                botao.style.color = 'white';
                headerLogo.style.filter = 'none';

                document.getElementById('header').style.position = 'absolute';
            }

        }
    , 1)
};

function fecharMenuMobile() {
    
    const menu = document.getElementById('menu-mobile');
    const checkBox = document.getElementById('menu-mobile-check');
    const botao = document.getElementById('menu-mobile-button');
    const headerLogo = document.getElementById('header-logo-box-imagem');


    botao.style.transform = 'rotate(0)';

    menu.style.transform = 'translateY(-100%)';
    console.log('fechou');

    botao.style.color = 'white';
    headerLogo.style.filter = 'none';

    checkBox.checked = false;

    document.getElementById('header').style.position = 'absolute';

}


function abrirModalTime(game, n1, c1, n2, c2, n3, c3, n4, c4, titulosNum) {
    var modal = document.getElementById('ver-time-modal');
    var modalBack = document.getElementById('ver-time-modal-back');

    const gameTime = document.getElementById('m-t-game');

    const num1 = document.getElementById('m-t-num-1');
    const nome1 = document.getElementById('m-t-nome-1');

    const num2 = document.getElementById('m-t-num-2');
    const nome2 = document.getElementById('m-t-nome-2');


    const num3 = document.getElementById('m-t-num-3');
    const nome3 = document.getElementById('m-t-nome-3');


    const num4 = document.getElementById('m-t-num-4');
    const nome4 = document.getElementById('m-t-nome-4');

    const titulos = document.getElementById('ver-time-modal-conquistas-numero');

    
    gameTime.innerHTML = `${game}`;

    nome1.innerHTML = n1;
    num1.innerHTML = c1;

    nome2.innerHTML = n2;
    num2.innerHTML = c2;

    nome3.innerHTML = n3;
    num3.innerHTML = c3;

    nome4.innerHTML = n4;
    num4.innerHTML = c4;

    titulos.innerHTML = titulosNum;


    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.transform = 'translate(-50%, -50%)';

    modalBack.style.visibility = 'visible';
    modalBack.style.opacity = '1';
    
}

function fecharModalTime() {
    var modal = document.getElementById('ver-time-modal');
    var modalBack = document.getElementById('ver-time-modal-back');

    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -100%)';

    modalBack.style.visibility = 'hidden';
    modalBack.style.opacity = '0';
}

//fecharModal Fortnite dados

const fortTimeDados = ['SEVEN FORTNITE', '7. Overt4ker', '7', '0. Blackx', '0', '0. Rafael', '0', '8. William', '8', '0'];

