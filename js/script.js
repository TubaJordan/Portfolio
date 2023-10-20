// document.addEventListener("scroll", function () {
//     const translateY = window.pageYOffset;
//     document.body.style.setProperty('--scroll', `${-translateY * 0.15}px`);
// });

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
    let parallaxIntensity = window.innerWidth > 475 ? 0.15 : 0.08; // Adjust the 0.08 value for smaller screens based on testing
    const translateY = window.pageYOffset;
    document.body.style.setProperty('--scroll', `${-translateY * parallaxIntensity}px`);
});