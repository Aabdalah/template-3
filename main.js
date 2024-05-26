let ourSkills = document.querySelector(".our-skills");
let firstEl = document.querySelector(".meter-container:nth-child(1) .front")
let second = document.querySelector(".meter-container:nth-child(2) .front")
let third = document.querySelector(".meter-container:nth-child(3) .front")
let fourth = document.querySelector(".meter-container:nth-child(4) .front")


window.addEventListener("scroll",function(){
    if(ourSkills.getBoundingClientRect().top < 300){
        firstEl.style.width = "80%"
        second.style.width = "85%"
        third.style.width = "70%"
        fourth.style.width = "80%"
    }
})

let containers = document.querySelectorAll(".square");

containers.forEach((el)=>{
    for(let i = 0 ; i < 132 ; i++){
        let div = document.createElement("div");
        el.append(div);
    }
})

let date = new Date();
date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(0)
date.setMinutes(0)
date.setSeconds(0)
date.setMilliseconds(0)

function getdays(){
    return (Date.parse(date)-Date.now())/1000/60/60/24;
}
function gethours(){
    return Number("0."+String(getdays()).split(".")[1])*24;
}
function getminutes(){
    return Number("0."+String(gethours()).split(".")[1])*60;
}
function getseconds(){
    return Number("0."+String(getminutes()).split(".")[1])*60;
}

let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let sec = document.querySelector(".second");

if(getdays() >= 10){
    day.textContent = parseInt(getdays())
}else{
    day.textContent = "0" + parseInt(getdays())
}
if(getseconds() >= 10){
    sec.textContent = parseInt(getseconds())
}else{
    sec.textContent = "0" + parseInt(getseconds())
}
if(getminutes() >= 10){
    minute.textContent = parseInt(getminutes())
}else{
    minute.textContent = "0" + parseInt(getminutes())
}
if(gethours() >= 10){
    hour.textContent = parseInt(gethours())
}else{
    hour.textContent = "0" + parseInt(gethours())
}

setInterval(() => {
    if(getseconds() >= 10){
        sec.textContent = parseInt(getseconds())
    }else{
        sec.textContent = "0" + parseInt(getseconds())
    }
    if(getminutes() >= 10){
        minute.textContent = parseInt(getminutes())
    }else{
        minute.textContent = "0" + parseInt(getminutes())
    }
    if(gethours() >= 10){
        hour.textContent = parseInt(gethours())
    }else{
        hour.textContent = "0" + parseInt(gethours())
    }
    if(getdays() >= 10){
        day.textContent = parseInt(getdays())
    }else{
        day.textContent = "0" + parseInt(getdays())
    }
    
}, 1000);


// let myRequest = new XMLHttpRequest();

// myRequest.open("GET","https://api.github.com/users/Aabdalah");

// myRequest.send();


// myRequest.onreadystatechange = ()=>{
//     if(myRequest.readyState == 4 && myRequest.status == 200){
//         console.log(JSON.parse(myRequest.response))
//         console.log(JSON.parse(myRequest.response)["created_at"])
//         console.log(JSON.parse(myRequest.response)["public_repos"])
//     }
// }