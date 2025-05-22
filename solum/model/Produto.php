<?php 

class Produto{
    private $conn;
    private $table_name = "produtos";

    //Atributos

    public $proID;
    public $proNome;
    public $proFoto;
    public $proFoto1;
    public $proFoto2;
    public $proDescricao;
    public $proPreco;
    public $proQuantEstoque;
    public $proCatID;
    public $proVenID;
    public $proVenLoja;
   
    //Construtor

    public function __construct($db){
    
        $this->conn = $db;
    
    }

    //listar todos os valores da tbl produto

    public function readAll(){
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    
    public function getProduct(){
    $query = "SELECT * FROM  . $this->table_name . WHERE proID = :proID";
    
   
    }
}
