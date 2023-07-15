let menuBtn = document.querySelector('.menu_burger');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

const modalButtons = document.querySelectorAll('[data-modal-btn]')
const modalClose = document.querySelectorAll('[data-modal]')
modalButtons.forEach(function(item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalBtn;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden')

        modal.querySelector('.window').addEventListener('click', function(e){
            e.stopPropagation();
        })
    });
});

modalClose.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
})
