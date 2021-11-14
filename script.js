let popup = document.querySelector('.b_menuPopup');
let popupClose = document.querySelector('.b_close');
let burger = document.querySelector('.b_menuMobile');
let popupLinks = document.querySelectorAll('.b_link.b_linkPopup');



burger.addEventListener('click', ()=>{
    popup.style.display = 'block';
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
})
popupLinks.forEach((item) => {
    item.addEventListener('click', () => {
        popup.style.display = 'none';
    })
})
window.addEventListener('click', (e) => {
    if (e.target == popup){
        popup.style.display = "none";
    }
}) 