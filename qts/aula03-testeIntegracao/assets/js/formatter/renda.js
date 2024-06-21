const renda = document.getElementById("rendaMensal");
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.target.value = e.target.value.toFixed(2);
});
