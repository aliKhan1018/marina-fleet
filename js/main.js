console.log('main.js connected')

const limit = 550

window.onscroll = function () {
    if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-10vh";
    }
}
    ;


