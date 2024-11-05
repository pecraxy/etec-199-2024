const products = await fetch('http://127.0.0.1:5500/js/produtos.json').then((res) => {
    return res.json();
});
const productNames = products.map(product => product.nome);
const productQuantity = products.map(product => product.qtd)
const graphic = document.querySelector(".graphic1");
const backgroundColors = products.map((p) => {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
})
console.log(backgroundColors)
const data = {
  labels: productNames,
  datasets: [
    {
      label: '# Quantidade de produtos',
      data: productQuantity,
      backgroundColor: backgroundColors,
    },
  ],
};
const config = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
  },
};
new Chart(graphic, config);

function randomNumber() {
    return Math.floor(Math.random() * 256); 
}