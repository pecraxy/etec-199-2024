const nome = document.getElementById('name');
nome.addEventListener('keyup', formatar);
nome.addEventListener('keydown', formatar);
const sobrenome = document.getElementById('sobrenome');
sobrenome.addEventListener('keyup', formatar);
sobrenome.addEventListener('keydown', formatar);
function formatar(e){
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u00C0-\u00FF'\s]+/g, '');
    e.target.value = e.target.value.replace(/\s+/g, ' ');
}