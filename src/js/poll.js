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


const pollVote = () => {
    const votes = document.querySelectorAll('.btn.poll');
    votes.forEach( (button, index) => {
        button.className += " btn-opacity" 
        button.disabled = true;
    });
}