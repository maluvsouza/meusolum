<?php require_once("./utils/header.php") ?>
<?php require_once("./utils/navbar.php") ?>

<!-- Botão para abrir o modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cadastroModal">
    Cadastrar
</button>

<!-- Modal -->
<div class="modal fade" id="cadastroModal" tabindex="-1" aria-labelledby="cadastroModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cadastroModalLabel">Cadastro</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="row m-2">
                    <div class="col-md-4">
                        <label for="inputAddress" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="inputAddress" required>
                    </div>

                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required>
                    </div>

                    <div class="col-md-3">
                        <label for="inputPassword4" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="inputPassword4" aria-describedby="passwordHelpBlock" required>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Sua senha deve ter entre 8 e 20 caracteres.
                        </small>
                    </div>

                    <div class="col-md-5">
                        <label for="inputCity" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="inputCity" required>
                    </div>

                    <div class="col-md-2">
                        <label for="inputState" class="form-label">Estado</label>
                        <select id="inputState" class="form-select" required>
                            <option selected>Escolha...</option>
                            <option>São Paulo</option>
                            <option>Minas Gerais</option>
                            <option>Espírito Santo</option>
                            <option>Rio de Janeiro</option>
                        </select>
                    </div>

                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Cep</label>
                        <input type="text" class="form-control" id="inputZip" required>
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required>
                            <label class="form-check-label" for="gridCheck">
                                Ao utilizar este site, você concorda com a nossa Política de Privacidade.
                            </label>
                        </div>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Criar conta</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php require_once("./utils/footer.php") ?>
