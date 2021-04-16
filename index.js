var btnTranslate = document.querySelector('#btn-translate');
var textarea = document.querySelector('#text-area');

btnTranslate.addEventListener('click' , function clickEventHandler(){
    console.log("input is : " , textarea.value);
})