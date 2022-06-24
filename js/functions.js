
// Cabeçalho fixo

$(window).scroll(function () {
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// Navegação Skills

$(function () {

    $('#ui_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_ui").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

    $('#dg_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_dg").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

    $('#ux_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_ux").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

    $('#di_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_di").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

    $('#il_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_il").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

    $('#ap_btn').click(function () {
        $(".conteudo_skill").hide();
        $("#area_ap").fadeIn('slow');
        $(".btn-SKILL").removeClass("ativo");
        $(this).addClass("ativo");
    });

})

// Linkedin Script


//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    var url = encodeURIComponent(window.location.href); //url
    var titulo = encodeURIComponent(document.title); //título
    var linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + titulo;

    //tenta obter o conteúdo da meta tag description
    var summary = document.querySelector("meta[name='description']");
    summary = (!!summary) ? summary.getAttribute("content") : null;

    //se a meta tag description estiver ausente...
    if (!summary) {
        //...tenta obter o conteúdo da meta tag og:description
        summary = document.querySelector("meta[property='og:description']");
        summary = (!!summary) ? summary.getAttribute("content") : null;
    }
    //altera o link do botão
    linkedinLink = (!!summary) ? linkedinLink + "&summary=" + encodeURIComponent(summary) : linkedinLink;
    document.getElementById("linkedin-share-btt").href = linkedinLink;
}, false);
