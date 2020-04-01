console.log('main.js connected')

const limit = 550
const downBtns = document.getElementsByClassName('down')
const submit_input = document.getElementById('submit')
const email_input = document.getElementById('email')

// for (let i = 0; i < downBtns.length; i++) {
//     downBtns[i].addEventListener('click', scrollDown)
// }

submit_input.addEventListener('click', function(){
    let email = email_input.value
    if(email === ''){
        alert('Email is empty')
    }
})


window.onscroll = function () {
    console.log(window.scrollY)
    if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-20vh";
    }
}
    
function scrollDown(multiplier){
    window.scrollTo(0, 682 * multiplier)
}





