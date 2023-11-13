const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')


const listItems = document.querySelector('.list-item')
const main = document.querySelector('main')

openMenu.addEventListener('click',()=>{

    listItems.classList.toggle('active')
    main.classList.toggle('Classmain')
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click',()=>{
        listItems.classList.remove('active')
        closeMenu.style.display = 'none'
        openMenu.style.display = 'block'
        main.classList.remove('Classmain')
        oneDrop.classList.remove('activeDrop')
        twodrop.classList.remove('activeDrop')
})

const dropDownArrow = document.querySelector('.dropDownOne')
const oneDrop = document.querySelector('.one')

dropDownArrow.addEventListener('click',()=>{

    oneDrop.classList.toggle('activeDrop')
    // if(oneDrop.classList.contains('show')){
    //     oneDrop.classList.toggle('activeDrop')
    // }
    oneDrop.classList.toggle('show')


})

const dropDownTwo = document.querySelector('.dropDownTwo')
const twodrop = document.querySelector('.two')

dropDownTwo.addEventListener('click',()=>{
    twodrop.classList.toggle('activeDrop')
    twodrop.classList.toggle('show')


})
