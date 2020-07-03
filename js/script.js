const popupOpenLink = document.getElementById('popup-link')
const popupCloseBtn = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')

popupOpenLink.addEventListener('click', () =>{
    openPopup(popup);
})

popupCloseBtn.addEventListener('click', () =>{
    closePopup(popup);
})

function openPopup(popup){
    if (popup == null) return
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active');
    overlay.classList.remove('active');
}