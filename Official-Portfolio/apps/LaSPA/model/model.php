<?php
// Connexion à la BDD
function connexionBDD() {
try { // Connexion à la base de données
$options=array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
$base=new PDO('mysql:host='.DBHOST.';dbname='.DBNAME, DBUSER, DBPWD, $options);
}
catch(Exception $err) { // Erreur lors de la connexion à la BDD
throw new Exception("Connexion à la BDD"); //.$err->getMessage());
}
return $base;
}

function displayAdmin() {
    $bdd = connexionBDD();
    $reponse = $bdd->query("SELECT * FROM admin");
    $admin = $reponse->fetch(PDO::FETCH_ASSOC);
    return implode($admin);
}