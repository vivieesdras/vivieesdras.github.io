document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    
    document.querySelectorAll(".parallax-item.-left").forEach((item) => {
        let speed = item.getAttribute("data-speed"); 
        item.style.transform = `translateY(${scrollY * speed * -0.1}px) rotate(86deg) scale(1.8)`;
    });

    document.querySelectorAll(".parallax-item.-right").forEach((item) => {
        let speed = item.getAttribute("data-speed"); 
        item.style.transform = `translateY(${scrollY * speed * -0.1}px) rotate(303deg) scale(1.9)`;
    });

    document.querySelectorAll(".parallax-item.-obj").forEach((item) => {
        let speed = item.getAttribute("data-speed"); 
        item.style.transform = `translateY(${scrollY * speed * -0.1}px)`;
    });

});
