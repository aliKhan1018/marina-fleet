console.log('main.js connected')

const limit = 550
const downBtns = document.getElementsByClassName('down')

// for (let i = 0; i < downBtns.length; i++) {
//     downBtns[i].addEventListener('click', scrollDown)
// }

window.onscroll = function () {
    console.log(window.scrollY)
    if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-10vh";
    }
}
    
function scrollDown(y){
    window.scrollTo(0,y)
}


