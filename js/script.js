document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "../images/JungleRuins.jpg",
        "../images/IceWorld.jpg",
        "../images/Future.jpg",
        "../images/Future2.jpg",
        "../images/DesertRuins.jpg",
        "../images/DesertRuins2.jpg",
        "../images/Sky.jpg",
        "../images/City.jpg",
        "../images/JungleVillage.jpg",
        "../images/JungleVillage2.jpg",
    ];

    let randomImage = images[Math.floor(Math.random() * images.length)];

    document.body.style.setProperty('--random-bg-image', 'url(' + randomImage + ')');
});

document.addEventListener("scroll", function () {
    let parallaxIntensity = window.innerWidth > 475 ? 0.08 : 0.04;
    const translateY = window.pageYOffset;
    document.body.style.setProperty('--scroll', `${-translateY * parallaxIntensity}px`);
});

// const splash = document.querySelector(".splash");

// document.addEventListener("DOMContentLoaded", (e) => {
//     setTimeout(() => {
//         splash.classList.add("display-none");
//     }, 2000);
// })