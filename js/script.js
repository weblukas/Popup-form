const popupOpenLink = document.getElementById('popup-link')
const popupCloseBtn = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')
const form = document.querySelector('form')

const nameInput = document.getElementById('name-input')


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

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const formData = new FormData(form);


    // testowy url test.html
    fetch('http://127.0.0.1:5500/test.html', {
        method: 'post',
        body: formData
    }).then(function (response){
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    })
    

})

