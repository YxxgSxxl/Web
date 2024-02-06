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
    <title>La SPA - Accueil</title>
</head>

<body>
    <section style="height: fit-content;">
        <div class="p1-container">
            <div class="p1-gauche">
                <h1>Offrez <span class="span-cercle">un cocon</span> à une adorable boule de poils.</h1>

                <p>Adoptez selon vos critères! Offrez un foyer à une boule de poils adorable. Explorez nos actions,
                    impliquez-vous grâce au bénévolat!</p>

                <a href="index.php?action=adopter" class="p1-button"><button>Trouver un compagnion <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg></button></a>
            </div>

            <!-- Debug Inscription -->
            <a href="index.php?action=register">HERE</a>

            <div class="p1-droite">
                <img src="./img/p1-chien.png" alt="Chien joyeux assis en première page">
            </div>

            <div class="p1-banner">
                <div class="banner">
                    <p>Soutenez-nous grâce aux dons. Chaque don aide directement un annimal ! Chamallow a retrouvé sa
                        famille grâce à ça !</p>
                </div>
            </div>
        </div>
    </section>

    <section style="height: fit-content;">
        <div class="p2-container">
            <div class="p2-gauche">
                <a href="index.php?action=adopter">
                    <div class="img-gauche1">
                        <p>Trouver votre compagnon</p>
                        <img src="./img/p2-gauche1.png" alt="Trouver votre compagnion dame qui est sereine">
                    </div>
                </a>
            </div>

            <div class="p2-droite">
                <a href="https://soutenir.la-spa.fr/b/mon-don">
                    <div class="img-droite1">
                        <p>Nous soutenir</p>
                        <img src="./img/p2-droite1.png" alt="Boite de donation">
                    </div>
                </a>
                <a href="index.php?action=nosactions">
                    <div class="img-droite2">
                        <p>Apprendre à nous connaitre</p>
                        <img src="./img/p2-droite2.png" alt="6 mains entre-croisées">
                    </div>
                </a>
            </div>
        </div>
    </section>

    <?php
    include "gabarit_footer.php";
    ?>
</body>

</html>