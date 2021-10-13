let container = document.querySelector('.root__container');
let all = '1000';
let progress = '35';

for (let i = 0; i < all; i++) {
    if (i < progress) {
        container.innerHTML += '<span class="square square_active"></span>';
    } else {
        container.innerHTML += '<span class="square"></span>';
    }
}