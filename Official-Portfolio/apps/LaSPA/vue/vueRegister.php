<?php
$nomSite = NOMSITE; // Intégration du nom du site dans le HTML title
$menu = MENU; // Intégration des pages du sites dans le header

require "gabarit.php";

// Système d'envoi du formulaire d'inscription
$erreur = "";

if (isset($_POST['submit'])) {
    if (!empty($_POST['user'] AND !empty($_POST['pass']) AND !empty($_POST['mail']))) {
        if (!empty($_POST['checkbox'])) {
            $user = htmlspecialchars($_POST['user']);
            $mail = htmlspecialchars($_POST['mail']);
            $pass = sha1($_POST['pass']);
            $insertUser = $bdd->prepare('INSERT INTO parrainage()');
        } else {
            $erreur = "<div class='infoRegister'>Pour finaliser votre inscription, veuillez accepter les conditions générales (<span style='color: red;'>*</span> = Obligatoire)</div>";
        }
    } else {
        $erreur = "<div class='infoRegister'>Veuillez compléter votre inscription (<span style='color: red;'>*</span> = Obligatoire)</div>";
    }
} 

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La SPA - Inscription 🐶</title>
</head>

<body>
    <h1>Créez vorte compte</h1>

    <form method="POST" action="">
        <label for="user">Nom d'utilisateur<span style="color: red;">*</span> :</label>
        <input type="text" name="user" autocomplete="off" placeholder="Nom d'utilisateur">
        
        <br>
        <label for="mail">Adresse mail<span style="color: red;">*</span> :</label>
        <input type="email" name="mail" autocomplete="off" placeholder="Adresse mail">
        <br>
        <label for="pass">Mot de passe<span style="color: red;">*</span> :</label>
        <input type="password" name="pass" autocomplete="off" placeholder="Mot de passe">
        <br><br>
        <input type="checkbox" name="checkbox">
        <label for="checkbox"> J'ai lu et j'accepte les <a href="index.php?action=conditions#conditionsutilisation">conditions d'utilisation</a> ainsi que les <a href="index.php?action=conditions#mentionslegales">mentions légales</a>.<span style='color: red;'>*</span></label>
        <br><br>
        <input type="submit" name="submit">
        <div class="infoRegister"><?=$erreur?></div>
    </form>

</body>

</html>