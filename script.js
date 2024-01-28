const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;
function circleChaptaKaro(){
    //define def scale value

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove" , function(dets){
        
        
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },100)
    });
}

circleChaptaKaro();

function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}


function firstPageAnim() {
    var tl= gsap.timeline();

    tl.from("#nav" , {
        y : '-10',
        opacity : 0,
        duration : 2,
        ease : Expo.easeInOut
    })

    tl.to(".boundingelem",{
        y : 0,
        ease : Expo.easeInOut,
        duration : 2,
        delay: -1,
        stagger : .2
    })

    tl.from("#herofooter" , {
        y : -10,
        opacity : 0,
        duration : 1.5,
        delay:-1,
        ease : Expo.easeInOut
    })


}

circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave" , function(dets){
        gsap.to(elem.querySelector("img"),{
                opacity : 0,
                ease : Power1,
                duration: .5,
            });

            gsap.to(elem.querySelector("h1"),{
                opacity : 1,
                paddingLeft : 0,
                duration: .5,
            })
    });


    elem.addEventListener("mousemove" , function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
    
        gsap.to(elem.querySelector("img"),{
                opacity : 1,
                ease : Power1,
                top : diff-100,
                left : dets.clientX,
                rotate : gsap.utils.clamp(-20,20,diffrot)
            });


        gsap.to(elem.querySelector("h1"),{
            opacity : .3,
            paddingLeft : elem.getBoundingClientRect().left
        })
    });

    // elem.addEventListener("click", function(){
    //     console.log(" ELEM CLICKED");
    //      window.location.href = "https://github.com/tanaysarkar0408";
    // });
});

// document.querySelector(".boundingelemMenu").addEventListener("click", function(elem){
//     console.log(" ELEM CLICKED");
    
// });

function moveMenuDown() {
    window.addEventListener("click",function(dets){
        console.log(" Menu CLICKED");
        document.querySelector(".boundingelemMenu").style.transform = "translateY(100%)";
        document.querySelector(".boundingelemMenu").style.opacity = 0;
    });
}
function moveResumeDown() {
    window.addEventListener("click",function(dets){
        console.log(" Resume CLICKED");
        document.querySelector(".hiddenText").style.transform = "translateY(-10%)";
        document.querySelector(".hiddenText").style.opacity = 1;
    });
}

moveResumeDown();
moveMenuDown();


document.querySelector(".elem").addEventListener("click", function(){
    window.location.href = "https://github.com/tanaysarkar0408/messenger";
});
document.querySelector(".elemsecond").addEventListener("click", function(){
    console.log(" ELEM 2 CLICKED");
    window.location.href = "https://github.com/tanaysarkar0408/movie_app";
});
document.querySelector(".elemlast").addEventListener("click", function(){
    window.location.href = "https://tanay35sarkar44.wixsite.com/mysite";
});
document.querySelector("#subscribe").addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/channel/UCf7uZDrJr0eVgzVKIu1QxjA";
});