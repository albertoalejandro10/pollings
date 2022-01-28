// Expresiones regulares para validar datos desde el Frontend
const regex = {
	title: /^[a-zA-Z0-9À-ÿ\_\-\s]{4,64}$/, // Letras y espacios, pueden llevar acentos.
	description: /^[a-zA-Z0-9À-ÿ\-._\s]+$/, // Letras y espacios, pueden llevar acentos.
    description_table: /^[a-zA-ZÀ-ÿ\s]{10,30}$/, // Letras y espacios, pueden llevar acentos.
    startDate: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, //Fecha mm/dd/yyyy
    startTime: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Tiempo hh:mm 24 hours
    timeDuration: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Tiempo hh:mm 24 hours
    // name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// number: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
	title: false,
	description: false,
    startDate: false,
    startTime: false,
    timeDuration: false,
    // name: false,
	// mail: false,
    // number: false,
}


const form = document.getElementById('form')
const title = document.getElementById('title')
const description = document.getElementById('description')
const startDate = document.getElementById('start-date')
const startTime = document.getElementById('start-time')
const timeDuration = document.getElementById('time-duration')
const info_inputs = document.querySelectorAll('.form-info input, .form-info textarea, .form-date input')

const validateForm = (e) => {
    switch ( e.target.name ) {
        case "title":
            validateField( regex.title, e.target, 'title' )
            break;
        case "description":
            validateField( regex.description, e.target, 'description' )
            break;
        case "start-date":
            validateTime( regex.startDate, e.target, 'startDate')
            break;
        case "start-time":
            validateTime( regex.startTime, e.target, 'startTime')
            break;
        case "time-duration":
            validateTime( regex.timeDuration, e.target, 'timeDuration')
            break;
    
        default:
            break;
    }
}

const validateField = ( phrase, input, field ) => {
    if ( phrase.test( input.value ) ) {
        document.getElementById(`group-${field}`).classList.remove('form__group-incorrect')
        document.getElementById(`group-${field}`).classList.add('form__group-correct')
        document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle')
        document.querySelector(`#group-${field} i`).classList.add('fa-check-circle')

        document.querySelector(`#group-${field} .form__input-error`).classList.remove('form__input-error-active')
        fields[field] = true

    } else {
        document.getElementById(`group-${field}`).classList.remove('form__group-correct')
        document.getElementById(`group-${field}`).classList.add('form__group-incorrect')
        document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle')
        document.querySelector(`#group-${field} i`).classList.add('fa-times-circle')

        document.querySelector(`#group-${field} .form__input-error`).classList.add('form__input-error-active')
        fields[field] = false
    }
}

const validateTime = ( phrase, input, field ) => {
    if( phrase.test( input.value ) ) {
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect')
        document.getElementById(`group__${field}`).classList.add('form__group-correct')

        fields[field] = true

    } else {
        document.getElementById(`group__${field}`).classList.remove('form__group-correct')
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect')

        fields[field] = false
    }
}

// Ciclo foreach para escuchar cada «keyup» sobre los inputs
info_inputs.forEach( input => {
    input.addEventListener('keyup', validateForm)
})

// Evento preparado para el envio de datos
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if ( fields.title && fields.description && fields.startDate && fields.startTime && fields.timeDuration ) {
        
        document.getElementById('form__message-success').classList.add('form__message-success-active')
        
        setTimeout( () => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active')
        }, 5000)
        
        Array.from(document.getElementsByClassName("form__group-correct")).forEach(function(icon) {
            icon.classList.remove('form__group-correct')
        });

        form.reset()
    } else {
        document.getElementById('form-message').classList.add('form-message-active')
    }
})