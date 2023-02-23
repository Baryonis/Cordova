import './style.scss';

const corps = document.querySelector('body');

corps?.addEventListener( 'click', function() {
    const square = document.createElement("div");
    const titre = document.querySelector('h1');
    square.className = 'square';
    corps.appendChild(square)
})
