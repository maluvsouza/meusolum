<?php

require_once "config/db.php";
require_once "model/Loja.php";

// Conexão com BD
$database = new Database();
$db = $database->getConnection();


$lojID = $_GET['lojID'] ?? null;

if ($lojID) {
    $query = "SELECT * FROM lojas WHERE lojID = :lojID";
    $stmt = $db->prepare($query);
    $stmt->execute(['lojID' => $lojID]); 
    $lojas = $stmt->fetch();

    if ($lojas) {
        $lojID = $lojas['lojID'];
        $lojNome = $lojas['lojNome'];
        $lojEmail = $lojas['lojEmail'];
        $lojDescricao = $lojas['lojDescricao'];
        $lojogo = $lojas['lojLogo'];
    }
}
?>