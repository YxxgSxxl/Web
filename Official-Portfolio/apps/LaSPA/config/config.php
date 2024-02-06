<?php
define("NOMSITE", "La SPA");

// Header menu
define("MENU","<li><a class='lien' href='index.php?action=accueil'>Accueil</a></li>
<li><a class='lien' href='index.php?action=apropos'>À propos</a></li>
<li><a class='lien' href='index.php?action=adopter'>Adopter</a></li>
<li><a class='lien' href='index.php?action=nosactions'>Nos actions</a></li>
<li><a class='lien' href='index.php?action=contact'><span class='span-contact'>Contact</span></a></li>
<li style='transform: translateY(-5px);'><a class='lien' href='index.php?action=login'><svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3'/><circle cx='12' cy='10' r='3'/><circle cx='12' cy='12' r='10'/></svg></a></li>");

// DataBase Connexion
define("DBHOST", "localhost");
define("DBNAME", "laspa");
define("DBUSER", "root");
define("DBPWD", "");