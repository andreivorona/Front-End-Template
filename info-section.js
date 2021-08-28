
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



let element2 = document.getElementById("card-holder-img2");

let infoSection2 = document.getElementById("info-section2");
    
infoSection2.style.display = "none";

infoSection2.style.flexFlow = "column";

infoSection2.style.alignItems = "center";

infoSection2.style.marginTop = "35px";


element2.addEventListener("click", () => {
    if(infoSection2.style.display === "none") {
        infoSection2.style.display = "flex";

    }

    else {
        infoSection2.style.display = "none";

    }
})

let element3 = document.getElementById("card-holder-img3");

let infoSection3 = document.getElementById("info-section3");
    
infoSection3.style.display = "none";

infoSection3.style.flexFlow = "column";

infoSection3.style.alignItems = "center";

infoSection3.style.marginTop = "35px";


element3.addEventListener("click", () => {
    if(infoSection3.style.display === "none") {
        infoSection3.style.display = "flex";

    }

    else {
        infoSection3.style.display = "none";

    }
})
