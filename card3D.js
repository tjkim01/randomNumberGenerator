const goBack = document.querySelector("#goBack");
const cardBack = document.querySelector('#test');

cardBack.innerHTML = localStorage.getItem("result");

goBack.addEventListener('click', function(){    
    location.href = 'index.html';
});