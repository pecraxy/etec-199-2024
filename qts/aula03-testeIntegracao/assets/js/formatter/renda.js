const renda = document.getElementById("rendaMensal");
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    
    e.target.value = parseFloat(e.target.value).toFixed(2);
});
