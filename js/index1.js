const email = document.querySelector('#email')
const emailConfirm = document.querySelector('#emailConfirm')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#passwordConfirm')
const button = document.querySelector('#button-page1')

button.addEventListener('click', (ev) => {
    if(email.value !== emailConfirm.value && password.value !== passwordConfirm.value) {
        ev.preventDefault()
        alert('email e senha errados')
    } else if (email.value !== emailConfirm.value) {
        ev.preventDefault()
        alert('email errado')
    }else if(password.value !== passwordConfirm.value) {
        ev.preventDefault()
        alert('senha errada')
    }
})

function seePassword () {
    password.type = 'text'
    passwordConfirm.type = 'text'
}

function dontSeePassword() {
    password.type = 'password'
    passwordConfirm.type = 'password'
}

password.addEventListener('mouseover', () => seePassword()) 
password.addEventListener('mouseout', () => dontSeePassword()) 

passwordConfirm.addEventListener('mouseover', () => seePassword()) 
passwordConfirm.addEventListener('mouseout', () => dontSeePassword()) 




