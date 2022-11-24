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

// -----------------------------BUTTONS----------------------------------
function buttonOn() {
let h = document.querySelector(".divButton");


if (scrollY > 800) {
    h.classList.add("showw")
    
} else {
    h.classList.remove('showw')
    
}
}

function buttonBackOn() {
    let backSectionButton = document.querySelector(".buttonback")


}



// ----------------------------------------------------------------------
function navScroll() {
    navvScroll();
    buttonOn()
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

// ----------------------------------------------------------------------------------------------

function enemOn() {
  let sla = document.getElementById("enemSection");
  let backSectionButton = document.querySelector(".buttonback");


  if(sla.classList.contains("showw")) {
    sla.classList.remove("showw")
  } else {
    sla.classList.add("showw")
    
  }
   if (backSectionButton.classList.contains("randonDiv")) {
    backSectionButton.classList.add("buttonbackOn")

   }
    
  offBody()
}
function redacaoOn() {
  let sla = document.getElementById("redacaoSection");
  let backSectionButton = document.querySelector(".buttonback");


  if(sla.classList.contains("showw")) {
    sla.classList.remove("showw")
  } else {
    sla.classList.add("showw")
    
  }
  if (backSectionButton.classList.contains("randonDiv")) {
    backSectionButton.classList.add("buttonbackOn")

   }
  offBody()
}
function mathOn() {
  let sla = document.getElementById("MathSection");
  let backSectionButton = document.querySelector(".buttonback");


  if(sla.classList.contains("showw")) {
    sla.classList.remove("showw")
  } else {
    sla.classList.add("showw")
    
  }
  if (backSectionButton.classList.contains("randonDiv")) {
    backSectionButton.classList.add("buttonbackOn")

   }
  offBody()
}
function historyOn() {
  let sla = document.getElementById("historySection");
  let backSectionButton = document.querySelector(".buttonback");


  if(sla.classList.contains("showw")) {
    sla.classList.remove("showw")
  } else {
    sla.classList.add("showw") 
  }
  if (backSectionButton.classList.contains("randonDiv")) {
    backSectionButton.classList.add("buttonbackOn")

   }
  offBody()
}
function offBody() {
  let backBOdy = document.getElementById("allContent");
  let sla = document.getElementById("enemSection");
  let sla2 = document.getElementById("redacaoSection");
  let sla3 = document.getElementById("MathSection");
  let sla4 = document.getElementById("historySection");


  if(sla.classList.contains("showw")) {
    backBOdy.classList.add("none")
  }
  if(sla2.classList.contains("showw")) {
    backBOdy.classList.add("none")
  }
  if(sla3.classList.contains("showw")) {
    backBOdy.classList.add("none")
  }
  if(sla4.classList.contains("showw")) {
    backBOdy.classList.add("none")
  } 

}
// --------------------------------------------------------------------------------------------------------------------------------
function backToBody() {
  let backBOdy = document.getElementById("allContent");
  let sla = document.getElementById("enemSection");
  let sla2 = document.getElementById("redacaoSection");
  let sla3 = document.getElementById("MathSection");
  let sla4 = document.getElementById("historySection");
  let backSectionButton = document.querySelector(".buttonback");


  if(sla.classList.contains("showw")) {
    backBOdy.classList.toggle("none")
    sla.classList.toggle("showw")
  }
  if(sla2.classList.contains("showw")) {
    backBOdy.classList.toggle("none")
    sla2.classList.toggle("showw")

  }
  if(sla3.classList.contains("showw")) {
    backBOdy.classList.toggle("none")
    sla3.classList.toggle("showw")

  }
  if(sla4.classList.contains("showw")) {
    backBOdy.classList.toggle("none")
    sla4.classList.toggle("showw")

  }  else {
    backSectionButton.classList.remove("buttonbackOn")
    
   }
 
  
  
}

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
var login = document.querySelector('.popup_wrapper')

        if (login.classList.contains('show')) {
          login.classList.remove('show')
        } else {
          login.classList.add('show')
        }
      }
          
      function showww() {
var showw = document.querySelector('.backgroundLogin')

          if (showw.classList.contains('showw')) {
              showw.classList.remove('showw')}
        else {showw.classList.add('showw')}
    }
       
    
    function contentcadastro() {
var sectioncadastro = document.querySelector('.cadastrowrapper')

        if (sectioncadastro.classList.contains('show')) {
        sectioncadastro.classList.remove('show')}
        else {
          sectioncadastro.classList.add('show')}
    }
    
    
      function backcadastro() {
var showwcadastro = document.querySelector('.backgroundcadastro')

        if (showwcadastro.classList.contains('showw')) {
          showwcadastro.classList.remove('showw')}
          else {showwcadastro.classList.add('showw')}
        }
    
    
    
      function menuShow() {
var ul = document.querySelector('nav ul')

        if (ul.classList.contains('open')) {
          ul.classList.remove('open')
        } else {
          ul.classList.add('open')
        }
      }
      
      function closeMenu() {
var ul = document.querySelector('nav ul')

        if (ul.classList.contains('open')) {
          ul.classList.remove('open')
        }
      }
      function hidden() {
var w = document.querySelector('body')

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
        showww()
      }