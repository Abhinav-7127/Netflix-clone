//     document.querySelector('#faq1').addEventListener('click', ()=>{
//         document.getElementById('ans1').classList.toggle('show')
// })

//     document.querySelector('#faq2').addEventListener('click', ()=>document.getElementById('ans2').classList.toggle('show'))

//     document.querySelector('#faq3').addEventListener('click', ()=>document.getElementById('ans3').classList.toggle('show'))

//     document.querySelector('#faq4').addEventListener('click', ()=>document.getElementById('ans4').classList.toggle('show'))

//     document.querySelector('#faq5').addEventListener('click', ()=>document.getElementById('ans5').classList.toggle('show'))

//     document.querySelector('#faq6').addEventListener('click', ()=>document.getElementById('ans6').classList.toggle('show'))

let answers = document.querySelectorAll('.faq-containers')

answers.forEach((accordian) => {
    accordian.addEventListener('click', ()=>{
        if(accordian.classList.contains('hide')){
            accordian.classList.add('show')
            accordian.classList.remove('hide')
        }
        else{
            accordian.classList.remove('show')
            accordian.classList.add('hide')
        }
    }) })