const solutions = {
    'galdera1': 'ez',
    'galdera2': 'gal',
    'galdera3': '7,0-8,9',
    'galdera4': 'bai-berezitasun',
    'galdera5': '7',
    'galdera6': 'iradokizun',
    'galdera7': ['kideak', 'irakasleak'],
    'galdera8': 'bakar',
    'galdera9': 'ez'
};

function getResponses() {
    let responses = {};

    const erantunza1Element = document.querySelector('input[name="galdera1"]:checked');
    responses['galdera1'] = erantunza1Element ? erantunza1Element.value : '';

    const erantunza2Element = document.querySelector('input[name="galdera2"]:checked');
    responses['galdera2'] = erantunza2Element ? erantunza2Element.value : '';

    const erantunza3Element = document.querySelector('input[name="galdera3"]:checked');
    responses['galdera3'] = erantunza3Element ? erantunza3Element.value : '';

    const erantunza4Element = document.querySelector('input[name="galdera4"]:checked');
    responses['galdera4'] = erantunza4Element ? erantunza4Element.value : '';

    const erantunza5Element = document.querySelector('input[name="galdera5"]:checked');
    responses['galdera5'] = erantunza5Element ? erantunza5Element.value : '';

    const erantunza6Element = document.querySelector('input[name="galdera6"]:checked');
    responses['galdera6'] = erantunza6Element ? erantunza6Element.value : '';

    const erantzuna7Elements = document.querySelectorAll('input[name="galdera7"]:checked');
    responses['galdera7'] = erantzuna7Elements ? Array.from(erantzuna7Elements).map(elem => elem.value) : [];

    const erantunza8Element = document.querySelector('input[name="galdera8"]:checked');
    responses['galdera8'] = erantunza8Element ? erantunza8Element.value : '';

    const erantunza9Element = document.querySelector('input[name="galdera9"]:checked');
    responses['galdera9'] = erantunza9Element ? erantunza9Element.value : '';
    
    return responses;
}

function checkFormResponse() {
    let message = '';
    const messageOk = '<p>Ederto! Erantzun guztiak zuzenak dira!</p>'
    const responses = getResponses();
    for (let i = 1; i <= 9; i++) {
        let responseI = JSON.stringify(responses[`galdera${i}`]);
        let solutionI = JSON.stringify(solutions[`galdera${i}`]);
        if (responseI != solutionI) {
            message += `<p>${i}. galderaren erantzuna okerra da!</p>`
        }
    }
    if (message === '') {
        message = messageOk;
    }
    return message;
}

const galdetegia = document.getElementById("galdetegia");
galdetegia.addEventListener('submit', event => {
    event.preventDefault();
    if (galdetegia.checkValidity()) {
        let modalBody = document.querySelector('#answers-modal .modal-body');
        modalBody.innerHTML = checkFormResponse();
    }
});

const answersModal = document.getElementById("answers-modal");
answersModal.addEventListener('show.bs.modal', event => {
    if (!galdetegia.checkValidity()) {
        event.preventDefault();
    }
});
