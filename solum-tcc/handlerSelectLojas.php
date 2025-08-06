<?php

require_once "config/db.php";
require_once "model/Produto.php";

//Conexão com BD

$database = new Database();
$db = $database->getConnection();

$lojas = new Loja(db: $db);

$stmt = $lojas->readAll();
$num = $stmt->rowCount();

?>