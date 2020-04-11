console.log('main.js connected')

// Caching DOM
const limit = 550
const downBtns = document.getElementsByClassName('down')
const submit_input = document.getElementById('submit')
const email_input = document.getElementById('email')
const form = document.getElementById('form')
const feedback_form = document.getElementById('feedback-form')
const thanksSubscription_div = document.getElementById('thanksSub')
const contact_form = document.getElementById('contact-form')
const form_div = document.getElementById('formDiv')
const nav = document.getElementById("nav")


// Newsletter subscription
submit_input.addEventListener('click', function () {
    if (isEmpty()) {
        alert('Email is empty.')
    }
    else if (form.checkValidity()) {
        alert('Thanks for subscribing!')
    }
    else if (!form.checkValidity()) {
        alert('Email not valid.')
    }
    else {
        alert('please check your email.')
    }
})


// Showing and hiding dynamic navbar
if (nav) {
    window.onscroll = function () {
        console.log(window.scrollY)
        if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit)
            nav.style.top = '0'
        else
            nav.style.top = '-20vh'

    }
}

// Functions
function isEmpty() {
    let email = email_input.value
    if (email === '') {
        return true
    }
    return false
}

function scrollDown(y) {
    window.scrollTo(0, y)
}

function feedback() {
    if (feedback_form.checkValidity())
        alert('Thanks for your feedback!')
    else
        alert('Please fill the form correctly')
}

function contactSubmission() {
    if (contact_form.checkValidity())
        alert('Form submitted successfully!\nWe will contact you as soon as possible.')
    else
        alert('Please fill the form correctly')

}


