
let element = document.getElementById("card-holder-img");

let infoSection = document.getElementById("info-section");
    
infoSection.style.display = "none";

infoSection.style.flexFlow = "column";

infoSection.style.alignItems = "center";

infoSection.style.marginTop = "35px";


element.addEventListener("click", () => {
    if(infoSection.style.display === "none") {
        infoSection.style.display = "flex";

    }

    else {
        infoSection.style.display = "none";

    }
})
