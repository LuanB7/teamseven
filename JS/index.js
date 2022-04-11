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


function abrirModalTime() {
    var modal = document.getElementById('ver-time-modal');
    var modalBack = document.getElementById('ver-time-modal-back');

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