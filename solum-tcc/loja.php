<?php require_once("./utils/session.php") ?>
<?php require_once("./utils/header.php");

if (isset($_SESSION['usuID'])) {

  require_once("./utils/navbar_logado.php");
} else {

  require_once("./utils/navbar_nao-logado.php");
}
?>

<?php require_once("handlerSelectLojas.php") ?>


<div class="containerLojas">

  <h1 class="titulo">Nossas Lojas Parceiras</h1>

  <p class="titulo-descricao">
    Conheça as lojas que compartilham nossa missão de sustentabilidade
  </p>

  <div class="stores-grid">

    <?php foreach ($lojas as $loja): ?>

      <div class="store-card" data-store-id="<?php echo $lojId; ?>">

        <div class="store-header">
          <img src="<?php echo $lojLogo ?>"
            alt="<?php echo $lojNome; ?>"
            loading="lazy">
        </div>

        <div class="store-info">
          <h3 class="store-name"><?php echo $lojNome; ?></h3>

          <!-- <div class="store-rating">
            <!-- <div class="stars">
            </div>
          </div> -->

          <!-- <div class="store-stats">
            <i class="fas fa-box"></i>  produtos
          </div> -->

          <p class="store-description"><?php echo $lojDescricao; ?></p>

          <a href=?page=store&name=<?php echo $lojNome; ?>" class="btn-primary">
            <i class="fas fa-store"></i> Visitar Loja
          </a>

        </div>

      </div>
    <?php endforeach; ?>
  </div>

</div>




<?php require_once("./utils/footer.php") ?>