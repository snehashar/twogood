 const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation()


















document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})


var tl=gsap.timeline()

tl.from("#page1 h1",{
    y:80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
    delay:0.4
})

tl.from("#page1 #video-container",{
    scale:0.8,
    delay:0.3,
    duration:0.5,
    opacity:0
})



var videocontainer=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")

videocontainer.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    }) 
})

videocontainer.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
})

videocontainer.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})

//  var details=document.querySelector("#details")
//details.addEventListener("hover",function(){
//    details.append(url(https://cdn.sanity.io/images/w8f1ak3c/production/ee658cdd0e3a23d7c6ec86001a9e098934c1109e-5000x5000.png/66.png?w=320&h=320&auto=format))
// })

/*gsap.from("#page5 #ourimpact img",{
    scale:0,
    duration:2,
     
    scrollTrigger:{
        trigger:"#page5 #ourimpace img",
        scroller:"#main",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5

    }

})  */

    document.addEventListener("mousemove", function(dets) {
        console.log("Mousemove Event Detected:", dets); // This should log whenever the mouse moves on any section
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        });
    });
    

