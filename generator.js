const min = document.querySelector("#min");
const max = document.querySelector("#max");
const move = document.querySelector("#move");

move.addEventListener('click', function(){    
    const randomNumber = (parseInt)(Math.random() * (Number(max.value)-Number(min.value)+1) + Number(min.value));
    localStorage.setItem("result", randomNumber);

    location.href = 'card.html';
});