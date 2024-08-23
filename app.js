let welcome = document.querySelector("h1");
let optionsSilder = document.querySelector(".optionsSilder")
let menu = document.querySelector(".options")
let closeB = document.querySelector(".close")

$(welcome).textillate({
    in :{effect:"fadeIn"},
})
welcome.addEventListener("mouseenter",()=>{
     $(welcome).textillate('in');
})

let tl = gsap.timeline()

tl.to(".optionsSilder",{
    right :"0",
    duration :0.5,
})
tl.pause();

menu.addEventListener("click",()=>{tl.play()})
closeB.addEventListener("click",()=>{tl.reverse()})

    
    