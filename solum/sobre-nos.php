<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

ini_set('session.cookie_secure', 1);
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_samesite', 'Lax');
session_start();
// echo "<pre>";
// print_r($_SESSION);
// echo "</pre>";

if (!isset($_SESSION['usuID'])) {
    echo "<script>
        alert('Você precisa estar logado para acessar o carrinho.');
        window.location.href = 'index.php';
    </script>";
    exit;
}


require_once("./utils/header.php");
if (isset($_SESSION['usuID'])) {
    
    require_once( "./utils/navbar_logado.php");
} else {
   
    require_once( "./utils/navbar_nao-logado.php");
}
?>


<?php require_once("./utils/footer.php") ?>