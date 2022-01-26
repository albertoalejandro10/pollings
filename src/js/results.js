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

const polls = [2, 3, 10, 4, 5, 12, 24, 7]
polls.sort(function(a, b){return b-a})

const title = document.getElementById('title').textContent = valuesInputs.title
const description = document.getElementById('description').textContent = valuesInputs.description
const startDate = document.getElementById('start-date').textContent = valuesInputs.startDate
const startTime = document.getElementById('start-time').textContent = valuesInputs.startTime
const duration = document.getElementById('duration').textContent = valuesInputs.duration

const getValueInput = () => {
    let valueInput = document.getElementById('total-boxes').value
    let buttonTest = document.getElementById('test')
    buttonTest.disabled = true
    let inputNumber = parseInt(valueInput)
    for (let index = 0; index < inputNumber; index++) {
        if ( index != 0 ) {

            const  group__thumbs = document.getElementById('group__thumbs')
            const box = document.createElement('div')
            box.className = 'box'
            box.id = `box-${index}`
            box.innerHTML = `
                            <p class="candidate">${candidates.name}<br>
                            <span>${candidates.description}</span></p>
                            <img class="thumb" src="./assets/images/${candidates.image}" alt="candidate-photo">
                            <button id="vote-${index}" class="btn__votes" disabled>${polls[index]} votos</button>
                            `
            group__thumbs.appendChild(box)
                  
        } else {

            const winnerBox = document.getElementById('winner__thumb')
            const winner = document.createElement('div')
            winner.className = 'box box__winner'

            winner.innerHTML = `
                                <h6>Ganador</h6>
                                <p class="candidate">${candidates.name}<br>
                                <span>${candidates.description}</span></p>
                                <img class="thumb" src="./assets/images/${candidates.image}" alt="candidate-photo">
                                <button id="vote-${index}" class="btn__votes btn__winner" disabled>${polls[index]} votos</button>
                               `
            winnerBox.appendChild(winner)      

        }
    }
}