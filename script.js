let header_button = document.querySelector(".mob_icon");
header_button.addEventListener("click", function () {
        let header = document.querySelector("header");
    if (header.classList.contains("open")) {
        close_popo();
        header_button.querySelector("img").src = "menus.png";
    }
    else {
        header.classList.add("open");
        header_button.querySelector("img").src = "close.png"
    }

})

/*document.querySelector("#grid").addEventListener("click", () => {
    document.querySelector("header").classList.remove("open");
});

document.querySelector("header .popo").addEventListener("click", () => {
    document.querySelector("header").classList.remove("open");
});*/
let tablet_button = document.querySelector(".tablet_icon");
if (tablet_button) {
    tablet_button.addEventListener("click", function () {
        let header = document.querySelector("header");
        header.classList.toggle("open");
    });
}
function close_popo() {
    document.querySelector("header").classList.remove("open");
}

document.querySelector("#grid").addEventListener("click", close_popo, false);

document.querySelector("header .popo").addEventListener("click", close_popo, false);

document.querySelector("#s_a_p").addEventListener("click", function () {
    document.querySelector("#a_n_p").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#a_n_p").classList.remove("open");
});

document.querySelector("#a_p").addEventListener("click", function () {

    let src = document.querySelector("#n_p_s").value;

    let text = document.querySelector("#n_p_t").value;
    if (src) {
        let new_photo_div = document.createElement("div");

        new_photo_div.classList.add("photo");

        let new_img = document.createElement("img");

        new_img.src = src;

        new_photo_div.append(new_img);

        let new_p = document.createElement("p");

        new_p.innerText = text;

        new_photo_div.append(new_p);

        document.querySelector("#grid").prepend(new_photo_div);

        document.querySelector("#a_n_p").classList.remove("open");
        document.querySelector("#n_p_s").value = "";
        document.querySelector("#n_p_t").value = "";

        new_photo_div.addEventListener("click", open_photo, false);
    }
    else {
        if (!src) {
            document.querySelector("#n_p_s").classList.add("error");
        }


    }
});

function open_photo() {
    let src = this.querySelector("img").src,
    popup_photo = document.querySelector("#popup_photo");
    popup_photo.querySelector("img").src = src;
    popup_photo.classList.add("open");
}
let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
    photo.addEventListener("click", open_photo, false);
}
document.querySelector("#popup_photo").addEventListener("click", function () {
    this.classList.remove("open");
});