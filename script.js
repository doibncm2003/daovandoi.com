document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});
/////
document.addEventListener('DOMContentLoaded', function() {
    const raindropsContainer = document.querySelector('.raindrops-container');

    for (let i = 5; i < 20; i++) { // Tăng số lượng giọt mưa
        createRaindrop();
    }

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = (Math.random() * 2 + 2) + 's';
        raindropsContainer.appendChild(raindrop);
    }
});
