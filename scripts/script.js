let container = document.querySelector('.root__container');
let all = '2000';
let progress = '35';

for (let i = 1; i <= all; i++) {
    if (i <= progress) {
        container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square square_active"></span>');
        //container.innerHTML += '<span class="square square_active"></span>';
    } else {
        container.insertAdjacentHTML('beforeend', '<span title="' + i + '" class="square"></span>');
        //container.innerHTML += '<span class="square"></span>';
    }
}