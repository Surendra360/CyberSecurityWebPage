//for cursor
function mouse() {
    document.addEventListener("mousemove", (e)=>{
        gsap.to(".cursor",{
            top: e.y,
            left: e.x,
            duration: 1,
            delay: 0.5
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
//     // y:-100,
//     width:0,
//     opacity:0,
//     duration: 1,
//     stagger:0.2,
//     // delay:1
// })

// gsap.from("nav ul .b2 ",{
//     y:-50,
//     opacity:0,
//     duration: 1,
//     stagger:0.2,
//     delay:1
// })


