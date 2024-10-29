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

$('#editProductForm').on('submit', function(event) {
    event.preventDefault();
    const productId = $('#editProductId').val();
    const method = productId ? 'PUT' : 'POST';
    const url = productId ? `${apiUrl}/${productId}` : apiUrl;

    const productData = {
        id: $('#editProductId').val(),
        nome: $('#editName').val(),
        descricao: $('#editDescription').val(),
        qtd: $('#editQuantity').val(),
        marca: $('#editBrand').val(),
        preco: $('#editPrice').val(),
        validade: $('#editExpiry').val()
    };
    $.ajax({
        url: url,
        type: method,
        contentType: 'application/json',
        data: JSON.stringify(productData),
        success: function(response) {
            $('#editProductModal').modal('hide');
            loadProducts();
            $('#editProductForm').reset();
        }
    });
});

// Função para editar produto
$(document).on('click', '.edit-btn', function() {
    const row = $(this).closest('tr'); // Seleciona a linha que contém o botão
    const productId = $(this).data('id'); // Pega o ID do produto (assumindo que o botão tem o data-id)
    
    // Pega os dados das células da linha
    const productData = {
        nome: row.find('td:nth-child(2)').text(),
        descricao: row.find('td:nth-child(3)').text(),
        qtd: row.find('td:nth-child(4)').text(),
        marca: row.find('td:nth-child(5)').text(),
        preco: row.find('td:nth-child(6)').text(),
        validade: row.find('td:nth-child(7)').text()
    };

    // Abre o modal e preenche os campos do formulário com os dados da linha
    $('#editProductModal').modal('show');
    $('#editProductId').val(productId);
    $('#editName').val(productData.nome);
    $('#editDescription').val(productData.descricao);
    $('#editQuantity').val(productData.qtd);
    $('#editBrand').val(productData.marca);
    $('#editPrice').val(productData.preco);
    $('#editExpiry').val(productData.validade);

    

});

// Função para excluir produto
$(document).on('click', '.delete-btn', function() {
    const productId = $(this).data('id');
    const request = {
        id: productId
    }
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        $.ajax({
            url: `${apiUrl}`,
            type: 'DELETE',
            data: JSON.stringify(request),
            success: function(response) {
                console.log(response)
                loadProducts();
            }
        });
    }
});

// Evento de clique para abrir o modal ao clicar em uma célula <td>
$(document).on('click', 'td', function() {
    const $cell = $(this); // A célula que foi clicada
    const $row = $cell.closest('tr'); // A linha que contém a célula
    const productId = $row.find('.edit-btn').data('id'); // Obtém o ID do produto (assumindo que existe no botão)

    // Mapeia as colunas da tabela aos campos de dados
    const fieldsMap = {
        1: 'nome',         // Coluna "Nome"
        2: 'descricao',    // Coluna "Descrição"
        3: 'qtd',          // Coluna "Quantidade"
        4: 'marca',        // Coluna "Marca"
        5: 'preco',        // Coluna "Preço"
        6: 'validade'      // Coluna "Validade"
    };

    const colIndex = $cell.index(); // Índice da coluna
    const campo = fieldsMap[colIndex]; // Campo correspondente

    if (!campo) return; // Se não houver campo correspondente, sai da função
    console.log(campo)
    const valorAtual = $cell.text(); // Valor atual da célula

    // Define o ID e o campo para o modal e exibe o valor atual
    $('#singleModal').modal('show');
    $('#tipoCampo').text(campo);
    $('#singleProductId').val(productId);
    $('#editValor').val(valorAtual);
});

// Evento de clique para salvar a alteração no modal
$('#singleProductForm').on('submit', function(event) {
    event.preventDefault();
    const productId = $('#singleProductId').val();
    const campo = $('#tipoCampo').text();
    const valor = $('#editValor').val(); // Novo valor a ser salvo
    
    // Envia a requisição PATCH para o servidor
    $.ajax({
        url: `${apiUrl}`, // URL da sua API
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify({
            id: productId,
            campo: campo,
            valor: valor
        }),
        success: function(response) {
            // Atualiza a célula com o novo valor
            console.log(response)
            $('#singleModal').modal('hide');
            loadProducts();
        },
        error: function(error) {
            console.error('Erro ao atualizar o campo:', error);
            alert('Erro ao atualizar o campo.');
        }
    });
});


// Carregar produtos na inicialização
$(document).ready(function() {
    loadProducts();
});
