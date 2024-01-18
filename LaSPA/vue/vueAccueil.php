<?php
$nomSite = NOMSITE; // Intégration du nom du site dans le HTML title
$menu = MENU; // Intégration des pages du sites dans le header

require "gabarit.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <div class="p1-container">
        <div class="p1-gauche">
            <h1>Offrez <span class="span-cercle">un cocon</span> à une adorable boule de poils.</h1>

            <p>Adoptez selon vos critères! Offrez un foyer à une boule de poils adorable. Explorez nos actions,
                impliquez-vous grâce au bénévolat!</p>

            <button class="p1-button">Trouver un compagnion <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></button>
        </div>

        <div class="p1-droite">
            <img src="./img/p1-chien.png" alt="Chien joyeux assis en première page">
        </div>

        <div class="p1-banner">
            <div class="banner">
                <p>Soutenez-nous grâce aux dons. Chaque don aide directement un annimal ! Chamallow a retrouvé sa famille grâce à ça !</p>
            </div>
        </div>
    </div>

    <div class="p2-container">
        
    </div>

</body>

</html>