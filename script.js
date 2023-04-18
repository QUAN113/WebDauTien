const menuBar = document.querySelector(".header-top>i")
const closeBtn = document.querySelector(".header-top ul li")
menuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.trasform = "translate(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})
closeBtn.addEventListener("",function(){
    document.querySelector(".header-top ul").style.trasform = "translate(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})