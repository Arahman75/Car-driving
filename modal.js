var openBtn = document.getElementById('open-btn');
var closeBtn = document.getElementById('close-btn');
var modal = document.getElementById('modal');

openBtn.addEventListener('click', function(){
    modal.classList.add('show');
   
})

closeBtn.addEventListener('click',function(){
    modal.classList.remove('show')
})