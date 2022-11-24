
        document.addEventListener("scroll", function() {
            let isRemoved = false;
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                document.querySelector("section.top div.welcome div.right-welcome p").classList.add("hide")
            } else {
                document.querySelector("section.top div.welcome div.right-welcome p").classList.remove("hide")

            }
    })