const counts = document.querySelectorAll('.count')
const speed = 9
counts.forEach((counter)=> {
function upData(){
const target = Number(counter.getAttribute('data-target'))
const count = Number(counter.innerText)
const inc = target / speed

if(count < target){
counter.innerText = Math.floor(inc + count)
setTimeout(upData, 100)
}else{
counter.innerText = target
}
}
upData()
})

//for cursor
function mouse() {
    document.addEventListener("mousemove", (e)=>{
        gsap.to(".cursor",{
            top: e.y,
            left: e.x,
            duration: 1,
            // delay: 0.5
        })
    })
}
mouse()

function nav() {
    gsap.from("nav", {
        y: -100,
        opacity:0,
        duration: 1,
        
        scrollTrigger: {
            trigger: "nav",
            scroller: ".body",
            start: "top 0",
            end: "top -10%",
        }
    })

}
nav()

// gsap.from("nav .b1",{
//     y:-100,
//     opacity:0,
//     duration: 2,
//     stagger:1,
//     delay:1
// })

gsap.from('.page2 h1',{
    y:-50,
    opacity:0,
    duration: 1,
    delay:1,
    scrollTrigger:{
        trigger:".page2 h1",
        scroll:"main",
        markers:true
    }
    
})


