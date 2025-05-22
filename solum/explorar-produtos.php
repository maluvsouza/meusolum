<?php require_once("./utils/header.php") ?>
<?php require_once("./utils/navbar.php") ?>


<?php require_once("handlerSelectProdutos.php") ?>
<!-- <h1>Todos os Produtos Cadastrados</h1> -->

<?php
echo "<div class='explorar-container'>";
echo "<div class='lista-produtos'>";
if ($num > 0) {




    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        extract($row);



        echo "<a href='produto.php?proID={$proID}'> ";
        echo "    <div class='item-produto'>";
        // echo "        <img src='$proFoto' alt='Produto' >";
        echo "        <img src='https://picsum.photos/id/237/300' alt='Produto 1' >";
        echo "        <h3>{$proNome}</h3>";
        echo "        <p>'R$'{$proPreco}</p>";
        echo "          <p class=''>Vendido por <a href='loja.php'> {$proVenLoja} </a></p>";
        echo "</a> ";

        echo "    </div>";






        // echo "<div class='product-container'>";
        //     echo "<div class='product-card'>";
        //     echo "<img src='$proFoto' alt='Produto 1'>";
        //      echo"<div class='product-info'>";
        //        echo"<h3>{$proNome}</h3>";
        //         echo "<p class='price'>{$proPreco}</p>";
        //         echo "<p>Vendido por <a href='loja.php'> Mundo Verde </a></p>";
        //      echo"</div>";
        //     echo "</div>";



    }
} else {
    echo "<p>Nenhum produto foi encontrado</p>";
}

echo " </div>";
echo "  </div>";

?>

</div>


<?php require_once("./utils/footer.php") ?>