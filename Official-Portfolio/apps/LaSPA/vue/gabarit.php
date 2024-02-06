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

    <link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
    <link rel="manifest" href="./favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <header>
        <a class="header-logo" href="./index.php?action=accueil">
            <img src="./img/logospa.png" alt="Logo association site de la SPA" loading="lazy">
        </a>

        <!-- Header Menu -->
        <div class="header-menu">
            <button type="button" class="header-menuexit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="#B3D580" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5_8)">
                    <path d="M38.5 29.6364L17.5 29.6364" stroke="#B3D580" stroke-width="2" />
                </g>
                <rect x="17.5" y="28.2727" width="21" height="2.72727" stroke="#B3D580" stroke-width="1" />
                <g clip-path="url(#clip1_5_8)">
                    <path d="M38.5 2.36363H0.5" stroke="#B3D580" stroke-width="2" />
                </g>
                <rect x="1.5" y="1" width="38" height="2.72727" stroke="#B3D580" stroke-width="1" />
                <g clip-path="url(#clip2_5_8)">
                    <path d="M38.5 16H8.5" stroke="#B3D580" stroke-width="2" />
                </g>
                <rect x="8.5" y="14.6364" width="30" height="2.72727" stroke="#B3D580" stroke-width="1" />
                <defs>
                    <clipPath id="clip0_5_8">
                        <rect x="17.5" y="28.2727" width="21" height="2.72727" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_5_8">
                        <rect x="1.5" y="1" width="38" height="2.72727" fill="white" />
                    </clipPath>
                    <clipPath id="clip2_5_8">
                        <rect x="8.5" y="14.6364" width="30" height="2.72727" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    </header>

    <script src="./js/index.js"></script>
</body>

</html>