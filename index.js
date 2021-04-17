var btnTranslate = document.querySelector('#btn-translate');
var textarea = document.querySelector('#text-area');
var outputText = document.querySelector('#output')

btnTranslate.addEventListener('click' , function clickEventHandler(){
    outputText.innerText = textarea.value;
})