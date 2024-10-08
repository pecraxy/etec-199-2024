<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Produtos</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h1>Gerenciador de Produtos</h1>
        <button class="btn btn-primary mb-3" id="addProductBtn" data-toggle="modal" data-target="#productModal">Adicionar Produto</button>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Validade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="productsTableBody">
                <!-- Produtos serão adicionados aqui -->
            </tbody>
        </table>
    </div>

    <!-- Modal para Adicionar/Editar Produto -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Adicionar Produto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="productForm">
                        <input type="hidden" id="productId">
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Descrição:</label>
                            <textarea class="form-control" id="description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantidade:</label>
                            <input type="number" class="form-control" id="quantity" required>
                        </div>
                        <div class="form-group">
                            <label for="brand">Marca:</label>
                            <input type="text" class="form-control" id="brand">
                        </div>
                        <div class="form-group">
                            <label for="price">Preço:</label>
                            <input type="text" class="form-control" id="price" required>
                        </div>
                        <div class="form-group">
                            <label for="expiry">Validade:</label>
                            <input type="date" class="form-control" id="expiry">
                        </div>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="./js/script.js"></script>
</body>
</html>
