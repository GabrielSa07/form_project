const email = document.querySelector('#email')
const emailConfirm = document.querySelector('#emailConfirm')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#passwordConfirm')
const button = document.querySelector('#button-page1')

button.addEventListener('click', (ev) => {
    if(email.value !== emailConfirm.value && password.value !== passwordConfirm.value) {
        ev.preventDefault()
        console.log('email e senha errados')
    } else if (email.value !== emailConfirm.value) {
        ev.preventDefault()
        console.log('email errado')
    }else if(password.value !== passwordConfirm.value) {
        ev.preventDefault()
        console.log('senha errada')
    }
})