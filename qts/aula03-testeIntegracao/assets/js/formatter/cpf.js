const cpf = document.getElementById("cpf");
cpf.addEventListener("keyup", formatarCPF);
cpf.addEventListener("keydown", formatarCPF);
function formatarCPF(e){
    var v = e.target.value.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    e.target.value = v;
} 