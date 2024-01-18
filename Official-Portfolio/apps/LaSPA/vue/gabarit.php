<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $nomSite ?>
    </title>
    <link rel="stylesheet" href="./stylesheet/index.css">
    <link rel="stylesheet" href="./stylesheet/khyayfont.css">
</head>

<body>
    <header>
        <a class="header-logo" href="./index.php?action=accueil">
            <img src="./apps/LaSPA/img/logospa.png" alt="Logo association site de la SPA" loading="lazy">
        </a>

        <!-- Header Menu -->
        <div class="header-menu">
        <button type="button" class="header-menuexit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </button>
        <nav>
            <ul>
                <?= $menu ?>
            </ul>
        </nav>
        </div>

        <button type="button" class="header-burgericon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </header>

    <script src="./js/index.js"></script>
</body>

</html>