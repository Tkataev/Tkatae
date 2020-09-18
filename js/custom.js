const button = $('#submit');
const form = $('#form');
button.on('click', function(event){
    event.preventDefault();
    let data = form.serialize()
    console.log(data)
})



const initOwl = function() {
    $("owl-carousel").owlCarousel();
}

$(document).ready(initOwl);

const closePopupButton = document.getElementById('popup-close');
const openPopupButton = document.getElementById('popup-open');

const popup = document.getElementById('popup');

closePopupButton.onclick = function(event){
    event.preventDefault();
    popup.classList.add('hidden');
}

openPopupButton.onclick = function(event){
    event.preventDefault();
    popup.classList.remove('hidden');
}

