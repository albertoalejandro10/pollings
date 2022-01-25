const regex = {
	// title: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	title: /^[a-zA-Z0-9À-ÿ\_\-\s]{4,64}$/, // Letras y espacios, pueden llevar acentos.
	description: /^[a-zA-Z0-9À-ÿ\-._\s]+$/, // Letras y espacios, pueden llevar acentos.
    description_table: /^[a-zA-ZÀ-ÿ\s]{10,30}$/, // Letras y espacios, pueden llevar acentos.
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	number: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
	title: false,
	description: false,
    description_table: false,
    name: false,
	mail: false,
    number: false,
}

const form = document.getElementById('form')
const title = document.getElementById('title')
const description = document.getElementById('description')
const info_inputs = document.querySelectorAll('.form-info input, .form-info textarea, .form-date input')

const validateForm = (e) => {
    switch ( e.target.name ) {
        case "title":
            validateField( regex.title, e.target, 'title' )
            break;
        case "description":
            validateField( regex.description, e.target, 'description' )
            break;
        case "polldate-start":
            
            break;
        case "polltime-start":
            
            break;
        case "polldate-end":
            
            break;
        case "polltime-end":
            
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

info_inputs.forEach( input => {
    input.addEventListener('keyup', validateForm)
    // input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if ( fields.title && fields.description ) {
        form.reset()

        document.getElementById('form__message-success').classList.add('form__message-success-active')
        
        setTimeout( () => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active')
        }, 5000)

        Array.from(document.getElementsByClassName("form__group-correct")).forEach(function(icon) {
            icon.classList.remove('form__group-correct')
         });
    } else {
        document.getElementById('form-message').classList.add('form-message-active')
    }
})