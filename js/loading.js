window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const loaderBg = document.querySelector(".loader-bg");
    const titulo = document.querySelector(".main-title");
    const flowers = document.querySelector(".flowers");
    const topTitle = document.querySelector(".top-title");
    const menu = document.querySelector(".main-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const btn = document.querySelector(".-btn");
    const siteContent = document.querySelector(".site-content");
    const sectionInicio = document.querySelector(".-inicio");

    console.log(sectionInicio);
    setTimeout(function () {
        sectionInicio.classList.remove("position-fixed");
    }, 5000)


    // Aguarda o tempo do loader antes de iniciar a transição
    setTimeout(function () {
        loader.classList.add("invisible");
        loaderBg.classList.add("invisible");
    }, 3500)
        // Aguarda um pequeno tempo e então anima os elementos
        setTimeout(function () {
            titulo.classList.add("visible");
            topTitle.classList.add("visible");
            flowers.classList.add("visible");
            menu.classList.add("visible");
            menuMobile.classList.remove("hidden");
            
        }, 4000); // Pequeno delay para um efeito mais suave

        setTimeout(function () {
            flowers.classList.add("overflow-hidden");
            btn.style.opacity = "1";
            siteContent.classList.add("display-block")
        }, 5000);

        // Remove o loader completamente após a transição
        setTimeout(function () {
            loader.classList.add("hidden");
        }, 4000);
    }, 4000); // Tempo de exibição do loader antes da transição

    