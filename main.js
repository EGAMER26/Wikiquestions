const navFix = document.querySelector(".allNave")
const navImg = document.querySelector(".navContent1 a")
const h = document.querySelector('#divButton')
ScrollReveal({
    origin: 'bottom',
    distance: '1600px',
    duration: 1400,
  }).reveal(`header,
  .q1,
  .comment1,
  .q2,
  .answer,
  .q3,
  .answer2`);

function navvScroll() {
    if(scrollY > 2) {
        navFix.classList.add("fixed")

    } else {
        navFix.classList.remove("fixed")

    }
    if(scrollY > 2) {
        navImg.classList.add("scrollImg")

    } else {
        navImg.classList.remove("scrollImg")

    }

    
    
}
function buttonOn() {
if (scrollY > 200) {
    h.classList.add('show')
    
} else {
    h.classList.remove('show')
    
}
}

function navScroll() {
    navvScroll();
    // buttonOn()
}
const btn = document.querySelector('.divButton');

if(btn) {

function button() {
    btn.addEventListener("scroll", function() {

        if(window.pageYOffset > 2) {
            btn.classList.add('buttonIn')
            
        } else {
            btn.classList.remove('buttonIn')
            
        }
    })
}
}
//    button() 

   
// window.addEventListener('scroll', function() {
//     navScroll();

// })


// const onfixed = document.querySelector('.random')

// function fixed() {
//     if(onfixed.classList.contains('random')) {
//         onfixed.classList.
//     }
// }


// function animeScroll() {
//     const windowTop = window.pageYOffset;
//     console.log(windowTop)
// }
// window.addEventListener('scroll', function() {
//     animeScroll();
// })


// function fixed() {
//     const point = document.querySelector('.random')

//     if (scrollY > 1802) {
//         point.classList.add('ramdonFixed')
//     } 
//     if (scrollY < 1802) {
//         point.classList.remove('ramdonFixed')
//     } 
//     if (scrollY > 2802) {
//         point.classList.remove('ramdonFixed')
//     } 
//     if (scrollY > 2802) {
//         point.classList.add('ramdonFixedd')
//     } 
//     if (scrollY < 2802) {
//         point.classList.remove('ramdonFixedd')
//     } 
// }

// window.addEventListener('scroll', function() {
//     fixed();
// })