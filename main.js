let greenBtn = document.querySelectorAll('.green-btn-js')
let bookmark = document.querySelector('.bookmarked')
let bookmarkP= document.querySelector('.bookmark-p')
let hamburger = document.querySelector('.hamburger')
let modalHeader = document.querySelector('.modal-for-header')
let modalHeaderCloseBtn = document.querySelector('.modal-header-close-btn')
let modal = document.querySelector('.modal')
let sectionBorder = document.querySelectorAll('.bamboo-wrap')[0] 
let closeBtn = document.querySelector('#close-btn')
let pledgeMenu =  document.querySelector('.about-wrap-modal')
let inputBtns = document.querySelectorAll('.green-btn-continue')
let svgBtn = document.querySelector('.svg')
let finalSum = document.querySelector('#final-sum')
let totalBackers = document.querySelector('#total-backers')
let thankYou = document.querySelector('.final-window')
let thankYouBtn = document.querySelector('.thank-you')
let cards = document.querySelectorAll('.card-js')
let noReward = document.querySelector('.no-reward')
let min25 = document.querySelector('.min-25')
let min75 = document.querySelector('.min-75') 
/* --------------------------------------------- */
let noRewardBtn =  document.querySelector('.no-reward-btn')
let min25Btn =  document.querySelector('.min-25-btn')
let min75Btn =  document.querySelector('.min-75-btn')
let noRewardValue = document.querySelector('.no-reward-js').value


let error25 = document.querySelector('.error-25')
let error75 = document.querySelector('.error-75')


/* ------------------------------------------------Toggle bookmark-------------------------------------- */
bookmark.addEventListener('click', ()=> {
    
    bookmark.classList.toggle('toggle-class')
    if (bookmarkP.innerText = 'Bookmark') {
         bookmarkP.innerText = 'Bookmarked'
        
    }   else {
         bookmarkP.innerText = 'Bookmark'
    }    
}) 
/* -----------------------------Open Modal----------------------------------- */
greenBtn.forEach((btn) => btn.addEventListener('click', ()=>{
    modal.classList.add('active')
    pledgeMenu.style.display = 'block'
     
}))
/* ------------------------------Close Modal---------------------- */
closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('active')
})
/* -------------------------------Expand selected section in modal------------------------------------ */
  

    let pledgeTitle = document.querySelectorAll('h4')
    for(let item of pledgeTitle){
        
        item.addEventListener('click', ()=>{
            cards.forEach((card) =>{
                card.classList.remove('show')
            })
            if(item.classList.contains('no-reward-h4')) {
                noReward.classList.add('show')
            }
            
            if(item.classList.contains('min-25-h4')) {
                min25.classList.add('show')
            }
            
            if(item.classList.contains('min-75-h4')) {
                min75.classList.add('show')
            }
        })
    } 
    /* ------------------------------------------ Validation of input----------------------- */
    
        noRewardBtn.addEventListener('click', ()=>{   
        alert(8)
            pledgeMenu.style.display = 'none'      
            thankYou.style.display = 'flex'
    
    })
   
    min25Btn.addEventListener('click', ()=>{   
        let min25value = document.querySelector('.min-25-js').value
        if(min25value < 25){
            
            error25.classList.add('active')
        }   else{
        error25.classList.remove('active')
            pledgeMenu.style.display = 'none'      
            thankYou.style.display = 'flex'
            }
    })
    min75Btn.addEventListener('click', ()=>{   
        let min75value = document.querySelector('.min-75-js').value
        if(min75value < 75){
            alert(min75value)
            error75.classList.add('active')
        }   else{
        error75.classList.remove('active')
            pledgeMenu.style.display = 'none'      
            thankYou.style.display = 'flex'
            }
    })
    
/* -------------------------------------------------Final step--------------------------------------- */
thankYouBtn.addEventListener('click', ()=>{
    thankYou.style.display = 'none'
    modal.classList.remove('active')
})

/* -------------------------------------------MEDIA--------------------------------------------------- */

hamburger.addEventListener('click',()=>{
   
modalHeader.classList.add('active')
})
modalHeaderCloseBtn.addEventListener('click',()=>{
   
    modalHeader.classList.remove('active')
    })

    svgBtn.addEventListener('click',()=>{
       
        svgBtn.classList.toggle('toggle-class')
    })
