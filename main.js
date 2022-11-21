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


// --------------------------------------------------------------------------------------------


var login = document.querySelector('.popup_wrapper')
var showw = document.querySelector('.backgroundLogin')
var showwcadastro = document.querySelector('.backgroundcadastro')
var sectioncadastro = document.querySelector('.cadastrowrapper')
var w = document.querySelector('body')



function loginOverflwY() {
    if (w.classList.contains('overflowY')){
    w.classList.remove('overflowY')}
    else 
    {w.classList.add('overflowY')}
    }
    function openLogin() {
        if (login.classList.contains('show')) {
          login.classList.remove('show')
        } else {
          login.classList.add('show')
        }
      }
          
      function showww() {
          if (showw.classList.contains('showw')) {
              showw.classList.remove('showw')}
        else {showw.classList.add('showw')}
    }
       
    
    function contentcadastro() {
        if (sectioncadastro.classList.contains('show')) {
        sectioncadastro.classList.remove('show')}
        else {
          sectioncadastro.classList.add('show')}
    }
    
    
      function backcadastro() {
        if (showwcadastro.classList.contains('showw')) {
          showwcadastro.classList.remove('showw')}
          else {showwcadastro.classList.add('showw')}
        }
    
    
    
      function menuShow() {
        if (ul.classList.contains('open')) {
          ul.classList.remove('open')
        } else {
          ul.classList.add('open')
        }
      }
      
      function closeMenu() {
        if (ul.classList.contains('open')) {
          ul.classList.remove('open')
        }
      }
      function hidden() {
        if (w.classList.contains('hidden')) {
          w.classList.remove('hidden')
        } else {
          w.classList.add('hidden')
        }
      }
      
      function menuShoww() {
        menuShow();
        hidden()
      }
      function allbackcadastro() {
        // overshowlogin();
        backcadastro();
        contentcadastro();
        loginOverflwY()
      }
      function closecadastro() {
        contentcadastro();
        backcadastro();
        loginOverflwY()
      
      }
      function overshowlogin() {
          openLogin();
        loginOverflwY();
        // showww()
      }