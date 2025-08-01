<?php

require_once "config/db.php";
require_once "model/Produto.php";

//Conexão com BD

$database = new Database();
$db = $database->getConnection();

$loja = new Loja(db: $db);

$stmt = $loja->readAll();
$num = $stmt->rowCount();

?>