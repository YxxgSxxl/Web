// burger Menu //
let burgerIcon = document.querySelector("button.header-burgericon"); // burgerIcon to open headerMenu
let exitMenu = document.querySelector("button.header-menuexit"); // Cross to close headerMenu
let headerMenu = document.querySelector("header .header-menu") // headerMenu with all the hyperlinks
let menuTag = document.querySelectorAll("ul li a"); // All headerMenu hyperlinks


// Burger Menu Opening
burgerIcon.addEventListener("click", ()=> {
    headerMenu.classList.toggle('header-open');
    
    setTimeout(() => {
        burgerIcon.classList.add('no-visibility');
      }, "500");
})

// Closing Header Menu
exitMenu.addEventListener("click", ()=> {
    headerMenu.classList.toggle('header-open');
    burgerIcon.classList.remove('no-visibility');
})

// Closing Header Menu When Clicking On A Hyperlink
// HERE

// Detect if Phone goes from portrait to landscape mode
window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;

    if (portrait) {
        null;
    } else {
        function phoneLandscapeMode()
        {
            if (window.innerHeight < window.innerWidth) {
                alert("Pour une meilleure expérience, veuillez naviguer sur ce site en mode portrait. (FR)");
            }
            setTimeout(phoneLandscapeMode, 60000); // Every 1 minutes, it will repeat in landscape mode
        }
        setTimeout(phoneLandscapeMode, 1000); // Time it takes to make the alert when landscape mode is detected
    }
});