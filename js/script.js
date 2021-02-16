window.onload = () => {
    let btnMain = document.querySelectorAll(".btn-main");
    let btnClose = document.querySelectorAll(".btn-close");
    let btnHamburger = document.querySelector("#hamburger-menu");
    let btnCheck = document.querySelector("#btn-check");
    let btnHamburgerStatus = true;

    let cheeryBox = document.querySelector("#cheery-box");

    let mainMenu = document.querySelector("#main-menu");
    let about = document.querySelector("#about");
    let services = document.querySelector("#services");
    let getInTouch = document.querySelector("#get-in-touch");

    btnHamburger.onclick = () => {
        if (btnHamburgerStatus) {
            btnHamburgerStatus = false;

            mainMenu.style.animation = "mainMenuOpen 0.3s linear";
        }

        else {
            btnHamburgerStatus = true;

            mainMenu.style.animation = "mainMenuClose 0.3s linear";
        }

        mainMenu.style.animationFillMode = "forwards";
    };

    for (let i = 0; i < btnMain.length; i ++) {
        btnMain[i].onclick = () => {
            if (!btnHamburgerStatus) {
                btnHamburgerStatus = true;
    
                mainMenu.style.animation = "mainMenuClose 0.3s linear";
                mainMenu.style.animationFillMode = "forwards";
            }

            btnHamburger.style.visibility = "hidden";
    
            cheeryBox.style.animation = "cheeryBoxOpen 0.7s linear";
            cheeryBox.style.display = "block";
    
            setTimeout(() => {
                switch (btnMain[i].textContent) {
                    case "Sobre mim":
                        about.style.display = "block";
                        break;
                    case "Serviços":
                        services.style.display = "block";
                        break;
                    case "Contato":
                        getInTouch.style.display = "block";
                }

                document.body.style.overflowY = "scroll";
            }, 500);
    
            cheeryBox.onanimationend = () => {
                cheeryBox.style.animation = "none";
                cheeryBox.style.display = "none";
            };
        };
    
        btnClose[i].onclick = () => {
            cheeryBox.style.animation = "cheeryBoxClose 0.7s linear";
            cheeryBox.style.display = "block";
            btnHamburger.style.visibility = "visible";
            btnCheck.checked = false;
            
            setTimeout(() => {
                switch (btnMain[i].textContent) {
                    case "Sobre mim":
                        about.style.display = "none";
                        break;
                    case "Serviços":
                        services.style.display = "none";
                        break;
                    case "Contato":
                        getInTouch.style.display = "none";
                }
                document.body.style.overflowY = "hidden";
            }, 500);
    
            cheeryBox.onanimationend = () => {
                cheeryBox.style.animation = "none";
                cheeryBox.style.display = "none";
            };
        };
    }

    window.onresize = () => {
        let windowX = window.innerWidth;

        if (windowX >= 900) {
            btnHamburger.style.visibility = "hidden";
        }

        else {
            btnHamburger.style.visibility = "visible";
        }
    }
};
