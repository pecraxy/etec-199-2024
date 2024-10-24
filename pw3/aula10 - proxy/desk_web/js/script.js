const apiUrl = 'http://localhost/aula09%20-%20Confec%c3%a7%c3%a3o%20&%20Consumo%20API/v1/Controller/produto.php'; // Substitua pela URL da sua API
var products;
// Função para carregar os produtos
function loadProducts() {
    $.get(apiUrl, function(data) {
        $('#productsTableBody').empty();
        data = JSON.parse(data);
        products = data;
        console.log(data);
        data.forEach(product => {
            
            $('#productsTableBody').append(`
                <tr>
                    <td>${product.id}</td>
                    <td>${product.nome}</td>
                    <td>${product.descricao}</td>
                    <td>${product.qtd}</td>
                    <td>${product.marca}</td>
                    <td>${product.preco}</td>
                    <td>${product.validade}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit-btn" data-id="${product.id}">Editar</button>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="${product.id}">Excluir</button>
                    </td>
                </tr>
            `);
        });
    });
}

// Função para salvar produto (adicionar ou editar)
$('#productForm').on('submit', function(event) {
    event.preventDefault();
    const productId = $('#productId').val();
    const method = productId ? 'PUT' : 'POST';
    const url = productId ? `${apiUrl}/${productId}` : apiUrl;

    const productData = {
        nome: $('#name').val(),
        descricao: $('#description').val(),
        qtd: $('#quantity').val(),
        marca: $('#brand').val(),
        preco: $('#price').val(),
        validade: $('#expiry').val()
    };
    console.log(productData)
    $.ajax({
        url: url,
        type: method,
        contentType: 'application/json',
        data: JSON.stringify(productData),
        success: function(response) {
            $('#productModal').modal('hide');
            console.log(response);
            loadProducts();
            $('#productForm').reset();
        }
    });
});

// Função para editar produto
$(document).on('click', '.edit-btn', function() {
    const productId = $(this).data('id');
    $.ajax({
        url: url,
        type: method,
        contentType: 'application/json',
        data: JSON.stringify(productData),
        success: function(response) {
            $('#productModal').modal('hide');
            console.log(response);
            loadProducts();
            $('#productForm').reset();
        }
    });
    $.ajax(`${apiUrl}/${productId}`, function(product) {
        $('#productId').val(product.ID);
        $('#name').val(product.Nome);
        $('#description').val(product.Descricao);
        $('#quantity').val(product.qtd);
        $('#brand').val(product.Marca);
        $('#price').val(product.Preco);
        $('#expiry').val(product.Validade);
        $('#modalTitle').text('Editar Produto');
        $('#productModal').modal('show');
    });
});

// Função para excluir produto
$(document).on('click', '.delete-btn', function() {
    const productId = $(this).data('id');
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        $.ajax({
            url: `${apiUrl}/${productId}`,
            type: 'DELETE',
            success: function(response) {
                console.log(response)
                loadProducts();
            }
        });
    }
});

// Carregar produtos na inicialização
$(document).ready(function() {
    loadProducts();
});
