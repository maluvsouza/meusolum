<div class="nav">
  <spam class="nav-cima"> </spam>
  <div class="navlogo">
    <a href="index.php"> <img src="assets\imagens\logo-solum.png"> </a>
  </div>


  <div class="navlink">
    <input type="search" placeholder="Busque por lojas, produtos ou categorias." class="navpesquisa" name="buscar" id="buscar">
  </div>

  <style>
    #buscar::placeholder {
      color: #ccc !important;
    }
  </style>

  <div class="navlink">

    <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bi bi-bag azul"> <span class="badge text-bg-secondary">4</span> </i></div>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header cinza">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body cinza">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>



  </div>





  <div class="navlink">

    <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-bookmark-heart-fill azul"></i></div>

    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Favoritos</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>




  </div>


  <div class="navlink">
    <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <i class="bi bi-person azul"></i>
    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header cinza">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Entrar na conta</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body cinza">
        <div>


          <h5>

            <form action="index.php" method="post">

              <label>E-mail</label><br>
              <input class="cadastro-caixa" type="email" name="email" required><br><br>

              <label>Telefone</label><br>
              <input class="cadastro-caixa" type="number" name="telefone" required><br><br>

              <label>Senha</label><br>
              <input class="cadastro-caixa" type="password" name="senha" required><br><br>

              <h5> Não possui uma conta? <a href="cadastro.php">Crie uma aqui!</a></h5>



              <input type="submit" value="Entrar" class="cadastro-caixa">
          </h5>

          </form>
        </div>

      </div>
    </div>
  </div>


</div>

<div class="navcategoria">



  <div class="navlinkcategoria">
    Nos contate
  </div>


  <div class="navlinkcategoria">
    <a href="explorar-produtos.php" style="text-decoration: none; color: #ff6b00; ">Todos os produtos</a>
  </div>

  <div class="dropdown">
    <div class="dropbtn">Categorias</div>
    <div class="dropdown-content">


      <?php require_once("handlerSelectCategorias.php") ?>


      <?php
      if ($num > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

          extract($row);

          echo "<a href='#'>{$catNome}</a> ";
        }
      } else {
        echo "<p>Nenhuma categoria foi encontrada</p>";
      }

      ?>

    </div>

  </div>



  <div class="navlinkcategoria">
    <a href="loja.php" style="text-decoration: none; color: #ff6b00; "> Explorar Lojas </a>
  </div>


  <div class="navlinkcategoria">Vender</div>


</div>