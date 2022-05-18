let scrollUpBtn = document.querySelector(".scrollUpBtn")

window.onscroll = () => {

    if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        scrollUpBtn.style.display = "block";
        scrollUpBtn.setAttribute("id","btnShow")
    }
    else {
        scrollUpBtn.style.display = "none";
    }
}
    
scrollUpBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
})

    