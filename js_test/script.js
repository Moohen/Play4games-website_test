function startDisplay() {
    let plLang = document.getElementById("lang_pl");
    let enLang = document.getElementById("lang_en");
    let plLangMobile = document.getElementById("lang_pl_mobile");
    let enLangMobile = document.getElementById("lang_en_mobile");

    if (document.getElementById("pl")) {
        plLang.classList.add("lang_active");
        plLangMobile.classList.add("lang_active");
        document.getElementById("pl").style.display = "block";
        document.getElementById("slogan").style.width = "80%";
    } else if (document.getElementById("en")) {
        enLang.classList.add("lang_active");
        enLangMobile.classList.add("lang_active");
        document.getElementById("en").style.display = "block";
        document.getElementById("slogan").style.width = "50%";
    }

    document.getElementById("content_contact").style.display = "none";
}

function showMenu() {
    let hamburger = document.getElementById("hamburger");
    let navBox = document.getElementById("nav_box");

    if (hamburger.classList.contains("is-active")) {
        hamburger.classList.remove("is-active");
        navBox.style.display = "none";
    } else {
        hamburger.classList.add("is-active");
        navBox.style.display = "block";
        document.addEventListener("click", function (event) {
            nav_box = document.querySelector("#nav_box");
            hamburger = document.querySelector("#hamburger");
            // If user clicks inside the element, do nothing
            if (event.target.closest("#hamburger")) {
                return;
            } else if (event.target.closest("#nav_box")) {
                return;
            } else if (!x.matches) {
                return;
            } else {
                navBox.style.display = "none";
                hamburger.classList.remove("is-active");
            }
        });
    }
}

function toggleOnHome() {
    let navIndex = document.getElementById("nav_index");
    let navHome = document.getElementById("nav_home");
    let navContact = document.getElementById("nav_contact");
    let hamburger = document.getElementById("hamburger");
    let navBox = document.getElementById("nav_box");

    if (navHome.classList.contains("nav_home_deactive")) {
        navIndex.innerHTML = "Home";
        navHome.classList.remove("nav_home_deactive");
        navHome.classList.add("nav_home_active");
        navContact.classList.remove("nav_contact_active");
        navContact.classList.add("nav_contact_deactive");
        if (x.matches) {
            hamburger.classList.remove("is-active");
            navBox.style.display = "none";
        }
        document.getElementById("content_home").style.display = "flex";
        document.getElementById("content_contact").style.display = "none";
        document.getElementById("text_part_one").style.animation = "appear 0.5s";
        document.getElementById("text_part_two").style.animation = "appear 0.5s";
        document.getElementById("slogan").style.animation = "appear 0.5s";
    }
}

function toggleOnContact() {
    let navIndex = document.getElementById("nav_index");
    let navContact = document.getElementById("nav_contact");
    let navHome = document.getElementById("nav_home");
    let hamburger = document.getElementById("hamburger");
    let navBox = document.getElementById("nav_box");

    if (navContact.classList.contains("nav_contact_deactive")) {
        navIndex.innerHTML = "Kontakt";
        navContact.classList.remove("nav_contact_deactive");
        navContact.classList.add("nav_contact_active");
        navHome.classList.remove("nav_home_active");
        navHome.classList.add("nav_home_deactive");
        document.getElementById("content_contact").style.display = "flex";
        document.getElementById("content_home").style.display = "none";
        if (x.matches) {
            hamburger.classList.remove("is-active");
            navBox.style.display = "none";
        }
        if (document.getElementById("en")) {
            navIndex.innerHTML = "Contact";
        }
    }

    if (entrances >= 1) {
        document.getElementById("fb").style.animation = "appear 0.5s";
        document.getElementById("mail").style.animation = "appear 0.5s";
        document.getElementById("gg").style.animation = "appear 0.5s";
    }
}

let navHome = document.getElementById("nav_home");
let navContact = document.getElementById("nav_contact");
navHome.classList.add("nav_home_active");
navContact.classList.add("nav_contact_deactive");
document.getElementById("nav_index").innerHTML = "Home";

let entrances = 0;
navContact.addEventListener('click', function () {
    entrances += 1;
});

function catchWidthSize(x) {
    let navBox = document.getElementById("nav_box");
    let hamburger = document.getElementById("hamburger");

    if (x.matches) { // If media query matches
        navBox.style.display = "none";
        hamburger.classList.remove("is-active");
    } else {
        navBox.style.display = "flex";
    }
}

let x = window.matchMedia("(max-width: 749px)");
catchWidthSize(x); // Call listener function at run time
x.addListener(catchWidthSize); // Attach listener function on state changes