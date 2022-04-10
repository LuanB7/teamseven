function abrirLink(delay, link) {
    setTimeout(
        function(){
            window.location = link;
        }
        
    , delay*1000);
};

