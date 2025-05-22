<?php 

class Cliente{
    private $conn;
    private $table_name = "cliente";

    //Atributos

    public $cliID;
    public $cliNome;
    public $cliEmail;
    public $cliSenha;
    public $cliEndID;
   
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
    
}
