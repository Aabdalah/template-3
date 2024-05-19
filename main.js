let ourSkills = document.querySelector(".our-skills");
let firstEl = document.querySelector(".meter-container:nth-child(1) .front")
let second = document.querySelector(".meter-container:nth-child(2) .front")
let third = document.querySelector(".meter-container:nth-child(3) .front")
let fourth = document.querySelector(".meter-container:nth-child(4) .front")
console.log(firstEl)

window.addEventListener("scroll",function(){
    console.log(ourSkills.getBoundingClientRect().top)
    if(ourSkills.getBoundingClientRect().top < 300){
        firstEl.style.width = "80%"
        second.style.width = "85%"
        third.style.width = "70%"
        fourth.style.width = "80%"
    }
})
