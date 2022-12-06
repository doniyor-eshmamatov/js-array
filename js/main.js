var elText = document.querySelector('.js-text');
var elForm = document.querySelector('.js-form');
var elInput1 = document.querySelector('.js-input1');
var elInput2 = document.querySelector('.js-input2');

var elStart = document.querySelector('.start');
var elEnd = document.querySelector('.end');

var elArrayVal = [
    'Bugatti',
    'Corvette',
    'BMW',
    'Lambarghini',
    'Mercades',
    'Toyota'
];

elText.textContent = elArrayVal;

elStart.addEventListener('click', function (evt) {
    if (elInput1.value == '') {
        return;
    }
    elArrayVal.unshift(elInput1.value);
    elText.textContent = elArrayVal;
})

elEnd.addEventListener('click', function (evt) {
    if (elInput2.value == '') {
        return;
    }
    elArrayVal.push(elInput2.value);
    elText.textContent = elArrayVal;
})



elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (elInput1.value !== '' && elInput2.value !== '') {
        elArrayVal.unshift(elInput1.value);
        elText.textContent = elArrayVal;

        elArrayVal.push(elInput2.value);
        elText.textContent = elArrayVal;
        return;
    }

    // else if (elInput1.value == '') {
    //     // elArrayVal.push(elInput2.value);
    //     elText.textContent = elArrayVal;

    //     return;
    // }
    // else if (elInput2.value == '') {
    //     // elArrayVal.unshift(elInput1.value);
    //     elText.textContent = elArrayVal;

    //     return;
    // }


})


