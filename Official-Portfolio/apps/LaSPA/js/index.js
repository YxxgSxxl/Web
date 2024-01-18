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
