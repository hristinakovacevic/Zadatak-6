let greenBtn = document.querySelectorAll('.green-btn-js')
let bookmark = document.querySelector('.bookmarked')
let bookmarkP= document.querySelector('.bookmark-p')
let hamburger = document.querySelector('.hamburger')
let modalHeader = document.querySelector('.modal-for-header')
let modalHeaderCloseBtn = document.querySelector('.modal-header-close-btn')
let modal = document.querySelector('.modal')
let sectionBorders = document.querySelectorAll('.bamboo-wrap')
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
let line = document.querySelector(".line")
let maxSum = 100000
/* --------------------------------------------- */
let noRewardBtn =  document.querySelector('.no-reward-btn')
let min25Btn =  document.querySelector('.min-25-btn')
let min75Btn =  document.querySelector('.min-75-btn')

/* -------------------------------------------------------------- */
let noRewardBorder =  document.querySelector('.no-reward-border')
let min25Border =  document.querySelector('.min-25-border')
let min75Border =  document.querySelector('.min-75-border')
/* --------------------------------------------------------------- */

let error25 = document.querySelector('.error-25')
let error75 = document.querySelector('.error-75')


/* ------------------------------------------------Toggle bookmark-------------------------------------- */
bookmark.addEventListener('click', ()=> {
    
    bookmark.classList.toggle('toggle-class')
    if (bookmarkP.innerText = 'Bookmark') {
         bookmarkP.innerText = 'Bookmarked'
        
    }   else if ( bookmarkP.innerText = 'Bookmarked'){
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
            sectionBorders.forEach((sectionBorder) =>{
                sectionBorder.classList.remove('add-border')
            })
            if(item.classList.contains('no-reward-h4')) {
                noReward.classList.add('show')
                noRewardBorder.classList.add('add-border')
            }
            
            if(item.classList.contains('min-25-h4')) {
                min25.classList.add('show')
                min25Border.classList.add('add-border')
            }
            
            if(item.classList.contains('min-75-h4')) {
                min75.classList.add('show')
                min75Border.classList.add('add-border')
            }

           


               
        })
    } 
    /* ------------------------------------------ Validation of input and update progress bar----------------------- */
    
        noRewardBtn.addEventListener('click', ()=>{   
            let noRewardValue = document.querySelector('.no-reward-js').value
            
           
            let currentSum = 89914
            currentSum = currentSum + parseInt(noRewardValue)
            let currentBackers = 5007
            currentBackers=currentBackers + 1
            finalSum.innerHTML=`$${currentSum}`
            totalBackers.innerHTML=`${currentBackers}`
            
          let changeWidth = (currentSum * 100)/maxSum;
          let lineWidth = changeWidth.toFixed(2) % 100;
         line.style.width = lineWidth.toString() + "%";
    
            pledgeMenu.style.display = 'none'      
            thankYou.style.display = 'flex'
    })
   
    min25Btn.addEventListener('click', ()=>{   
        let min25value = document.querySelector('.min-25-js').value
       
        let currentSum = 89914
        currentSum = currentSum + parseInt(min25value)
        let currentBackers = 5007
        currentBackers=currentBackers + 1
    
        
        if(min25value < 25){
            
            error25.classList.add('active')
        }   else{
        error25.classList.remove('active')
        let changeWidth = (currentSum * 100)/maxSum;
        let lineWidth =changeWidth.toFixed(2) % 100;
        line.style.width =
        lineWidth.toString() + "%";
        finalSum.innerHTML=`$${currentSum}`
        totalBackers.innerHTML=`${currentBackers}`
            pledgeMenu.style.display = 'none'      
            thankYou.style.display = 'flex'
            }
    })

    min75Btn.addEventListener('click', ()=>{   
        let min75value = document.querySelector('.min-75-js').value
        let currentSum = 89914
        currentSum = currentSum + parseInt(min75value)
        let currentBackers = 5007
        currentBackers=currentBackers + 1


        if(min75value < 75){
            
            error75.classList.add('active')
        }   else{
        error75.classList.remove('active')
        let changeWidth = (currentSum * 100)/maxSum;
        let lineWidth =changeWidth.toFixed(2) % 100;
        line.style.width =
        lineWidth.toString() + "%";
        finalSum.innerHTML=`$${currentSum}`
        totalBackers.innerHTML=`${currentBackers}`
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
