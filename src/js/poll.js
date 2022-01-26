const valuesInputs = {
    title: 'Elecciones Argentinas',
    description: 'Elecciones Argentinas 2022',
    startDate: '15/01/2022',
    startTime: '5:00 PM',
    duration: '4h30m',
    type: 'por Token',
}

const candidates = {
    name: 'Carlos',
    description: 'Softsystems',
    image: 'letra-x.png'
}

const title = document.getElementById('title').textContent = valuesInputs.title
const description = document.getElementById('description').textContent = valuesInputs.description
const startDate = document.getElementById('start-date').textContent = valuesInputs.startDate
const startTime = document.getElementById('start-time').textContent = valuesInputs.startTime
const duration = document.getElementById('duration').textContent = valuesInputs.duration

const getValueInput = () => {
    let valueInput = document.getElementById('total-boxes').value
    let buttonTest = document.getElementById('test')
    buttonTest.disabled = true;
    let inputNumber = parseInt(valueInput)
    for (let index = 0; index < inputNumber; index++) {
        let  group__thumbs = document.getElementById('group__thumbs');
        let box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
                        <p class="candidate">${candidates.name}<br>
                        <span>${candidates.description}</span></p>
                        <img class="thumb" src="./assets/images/${candidates.image}" alt="candidate-photo">
                        <button type="submit" id="vote-${index}" class="btn poll" onclick="pollVote()"><span>Votar</span></button>
                        `
        group__thumbs.appendChild(box);
    }
}

const pollVote = () => {
    const votes = document.querySelectorAll('.btn.poll');
    votes.forEach( (button, index) => {
        button.className += " btn-opacity" 
        button.disabled = true;
    });
}

// // Popup
// const clickBtn = document.getElementById("clickBtn");
// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("closeBtn");

// clickBtn.addEventListener('click', ()=>{
//     popup.style.display = 'block';
// });
// closeBtn.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });
// popup.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });