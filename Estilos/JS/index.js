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

            menu = document.getElementById('menu-mobile');
            checkBox = document.getElementById('menu-mobile-check');
            botao = document.getElementById('menu-mobile-button');
            headerLogo = document.getElementById('header-logo-box-imagem');


            
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
    
    menu = document.getElementById('menu-mobile');
    checkBox = document.getElementById('menu-mobile-check');
    botao = document.getElementById('menu-mobile-button');
    headerLogo = document.getElementById('header-logo-box-imagem');


    botao.style.transform = 'rotate(0)';

    menu.style.transform = 'translateY(-100%)';
    console.log('fechou');

    botao.style.color = 'white';
    headerLogo.style.filter = 'none';

    checkBox.checked = false;

    document.getElementById('header').style.position = 'absolute';

}