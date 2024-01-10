function init() {
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
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

// function loco(){
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }

function clock(){ 
    function createClock(city, offset, containerId, top, left) {
       // Create clock container
       var clockContainer = document.createElement("div");
       clockContainer.className = "clock";
       clockContainer.style.top = top + "px";
       clockContainer.style.left = left + "px";
     
       // Create hour hand element
       var hourHand = document.createElement("div");
       hourHand.className = "hour-hand";
       clockContainer.appendChild(hourHand);
     
       // Create minute hand element
       var minuteHand = document.createElement("div");
       minuteHand.className = "minute-hand";
       clockContainer.appendChild(minuteHand);
     
       // Create second hand element
       var secondHand = document.createElement("div");
       secondHand.className = "second-hand";
       clockContainer.appendChild(secondHand);
     
       // Append clock to the container
       document.getElementById(containerId).appendChild(clockContainer);
     
       function rotateClockHands() {
         var date = new Date();
     
         // Calculate the local time for the given city based on the offset
         var localTime = new Date(date.getTime() + offset * 3600000);
     
         // Calculate rotation angles for the hour, minute, and second hands
         var seconds = localTime.getSeconds();
         var minutes = localTime.getMinutes() + seconds / 60;
         var hours = localTime.getHours() + minutes / 60;
     
         // Apply rotation transforms to the clock hands
         secondHand.style.transform = `rotate(${seconds * 6}deg)`;
         minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
         hourHand.style.transform = `rotate(${hours * 30}deg)`;
       }
     
       // Set the initial time
       rotateClockHands();
     
    // Update the clock hands every second
    setInterval(rotateClockHands, 1000);
   }
   
   // Create clocks for different cities with their respective time offsets and positions
   createClock("London", 7.5, "clocks-container", 400, 400);
   createClock("New York", -.5, "clocks-container", 740, 1100);
   createClock("Santiago", 2.5, "clocks-container", 1000, 150);
   createClock("Los Angeles", 2.5, "clocks-container", 1300, 1150);
   createClock("Dallas", -2.5, "clocks-container", 1690, 250);
   createClock("Bucharest", 1.5, "clocks-container", 1800, 1080);
   createClock("Durham", 2.5, "clocks-container", 2150, 550);
//    createClock("Durham", 5.5, "clocks-container", 2350, 550);
}

function imageanime(){ 
    let image = document.getElementById('image');
   let images = [ 
   'im6.jpg','im7.jpg','im8.jpg','im9.jpg','im10.jpg','im11.jpg','im12.jpg','im13.jpg','im14.jpg','im15.jpg'
   ]
   setInterval(function(){
       let ran = Math.floor(Math.random() * 10)
       image.src = images[ran];
   },200);
}
function modernclock(){
    setInterval(showtime,1000);
function showdateandmonth(){
    let dateo = new Date();
    let months = ['January','February','March','April', 'May' ,'June','July','August','September', 'October', 'November','December']

    let month =dateo.getMonth(); 
    let year =dateo.getFullYear(); 
    let date =dateo.getDate(); 

    let customdaymonth =  months[month] +"  "+ date + "th"  + ". " + year;
    document.getElementById("date").innerHTML = customdaymonth;
}
function showtime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec =time.getSeconds();
    // session = "AM";
    if (hour > 12){
        hour -= 12;
    }
    if (hour == 12){
        hr = 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
   sec =sec < 10 ? "0" + sec :sec;
   
   let currenttime = hour + " : " + min + " : " + sec ;
   document.querySelector(".h6e").innerHTML =  currenttime;
   document.querySelector(".h6f").innerHTML =  currenttime;
}
showdateandmonth();
}
function clock1(){
    var deg = 6
    var hr = document.querySelector("#hr")
    var mn = document.querySelector("#mn")
    var se = document.querySelector("#se")
    setInterval(()=> {
        var day = new Date();
        var hh = day.getHours() * 30;
        var mm = day.getMinutes() * deg;
        var ss = day.getSeconds() * deg;
    
        hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        se.style.transform = `rotateZ(${ss}deg)`;
})
}
function runner(){
    var tl = gsap.timeline();
     tl.to("#photo #imgdiv",{
        left:"-150%",  
        duration:2,
        scrollTrigger:{
            trigger:"#photo #imgdiv",
            scroller:"#main",
            start:"top 100%",
            // markers:true,
            scrub:2,
            end:"top -120%",
            // markers: {startColor: "pink", endColor: "white", fontSize: "1.5vw", indent: 2}
        }})
    tl.to("#imgdiv>img",{
        opacity:1,
        stagger:.5,
        delay:.1,
      scrollTrigger:{
        trigger:"#imgdiv img",
        scroller:"#main",
        start:"top 120%",
        end:"top -70%",
        scrub:2,
        // markers:true
    }})
    .from("#page1 h2",{
        rotate: 8,
        y: 100,
        opacity: 0,
        stagger: 10,         
        duration:10,
        scrollTrigger: {
            trigger: "#page1 h2",
            scroller: "#main",
            // markers: true,    
            start: "top 60%",
            end: "top 30%",
            scrub: 3
        } 
    },"-=1")
    .from("#page2 h2",{
        rotate: 8,
        y: 100,
        opacity: 0,
        stagger: 10,         
        duration:10,
        scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "#main",
            // markers: true,    
            start: "top 60%",
            end: "top 30%",
            scrub: 3
        } 
    },"-=1")
    .from("#page3 h2",{
        rotate: 8,
        y: 100,
        opacity: 0,
        stagger: 10,         
        duration:10,
        scrollTrigger: {
            trigger: "#page3 h2",
            scroller: "#main",
            // markers: true,    
            start: "top 60%",
            end: "top 30%",
            scrub: 3
        } 
    },"-=1")
    .from("#page5 h2",{
        rotate: 8,
        y: 100,
        opacity: 0,
        stagger: 10,         
        duration:10,
        scrollTrigger: {
            trigger: "#page5 h2",
            scroller: "#main",
            // markers: true,    
            start: "top 80%",
            end: "top 50%",
            scrub: 3
        } 
    },"-=1")
     tl.from(".clock",{
        y:200,
        // opacity:0.5,
        duration:.5,
        scrollTrigger:{
            trigger:".clock",
            scroller:"#main",
            start:"top 50%",
            // markers:true,
            end:"top -200%",
            scrub:2,
        }
     })
     .from("#page3 #h1,#page3 #h3, #page3 #h5 ,#page3 #h7",{
        x:-200,
        duration:1,
        scrollTrigger:{
            trigger:"#page3 #h1,#page3 #h3, #page3 #h5 ,#page3 #h7",
            scroller:"#main",
            start:"top 80%",
            // markers:true,
            end:"top -190%",
            scrub:2,
        }
     })
     .from("#page3 #h2,#page3 #h4, #page3 #h6",{
        x:250,
        duration:1,
        scrollTrigger:{
            trigger:"#page3 #h2,#page3 #h4, #page3 #h6",
            scroller:"#main",
            start:"top 80%",
            // markers:true,
            end:"top -190%",
            scrub:2,
        }
     })
     .from("#page4 #boxz1 img",{
        opacity:0,
        scrollTrigger :{
            trigger:"#page4  #boxz1 img",
            scroller:"#main",
            start:"top 80%",
            // markers:true,
            end:"top 60%",
            scrub:2,
        }
     })
     var boxi = document.querySelectorAll("#page6 .boxi");
     tl.from(boxi,{
        opacity:0,
        duration:2,
        y:"40%",
        ease:Expo.easeOut,
        stagger:6,
        scrollTrigger:{
            trigger:boxi,
            scroller:"#main",
            start:"center 80%",
            // markers:true,
            end:"top -80%",
            scrub:2,  
        }
     })
     var cir = gsap.timeline({
         scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 0%",
            pin:"#page7",
            end:"+="+(window.innerHeight*5),
            scrub:2,
            
            // markers:true
         }
     })
     cir.to("#circle",{
        clipPath: "circle(100% at 50% 50%)",
     },"anime")
     cir.from("#innerpage h1",{
        x:"70%",
     },"anime")
     cir.to("#innerpage h1 span",{
        color:" rgb(13, 13, 108)",
        // top:"0",
        // delay:15,
    
     })
     var page8 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page8",
            scroller:"#main",
            start:"top 90%",
            scrub:2,
            end:"top -70%",
            markers:true
        }
    })
    page8.from("#page8 #h8,#page8 #h10,#page8 #h12,#page8 #h14",{
        x:-700,
        // duration:5,
        // delay:2
    },"helo")
    page8.from("#page8 #h9,#page8 #h11,#page8 #h13",{
        x:700,
        // duration:5,
        // delay:2
    },"helo")
    }
init();

clock();
clock1();
modernclock();
imageanime();
//  var page2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"#main",
//         start:"top 80%",
//         end:"top 40%",
//         markers:true,
//         scrub:true,
//     }
//  })
//  page2.to("#head h2",{
//   opacity:1,
//  })
 
runner();





