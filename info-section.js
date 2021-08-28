
let element = document.getElementById("card-holder-img");

let infoSection = document.getElementById("info-section");
    

let element2 = document.getElementById("card-holder-img2");

let infoSection2 = document.getElementById("info-section2");

let element3 = document.getElementById("card-holder-img3");

let infoSection3 = document.getElementById("info-section3");

infoSection.style.display = "none";

infoSection.style.flexFlow = "column";

infoSection.style.alignItems = "center";

infoSection.style.marginTop = "35px";


element.addEventListener("click", () => {
    if(infoSection.style.display === "none") {
        infoSection.style.display = "flex";

        if (infoSection2.style.display === "flex") {
            infoSection2.style.display = "none";
        }

        if (infoSection3.style.display === "flex") {
            infoSection3.style.display = "none";
        }

        
    }

    else {
        infoSection.style.display = "none";

    }
})




    
infoSection2.style.display = "none";

infoSection2.style.flexFlow = "column";

infoSection2.style.alignItems = "center";

infoSection2.style.marginTop = "35px";


element2.addEventListener("click", () => {
    if(infoSection2.style.display === "none") {
        infoSection2.style.display = "flex";

        if (infoSection.style.display === "flex") {
            infoSection.style.display = "none";
        }

        if (infoSection3.style.display === "flex") {
            infoSection3.style.display = "none";
        }

        
    }

    else {
        infoSection2.style.display = "none";

    }
})


    
infoSection3.style.display = "none";

infoSection3.style.flexFlow = "column";

infoSection3.style.alignItems = "center";

infoSection3.style.marginTop = "35px";


element3.addEventListener("click", () => {
    if(infoSection3.style.display === "none") {
        infoSection3.style.display = "flex";

        if (infoSection2.style.display === "flex") {
            infoSection2.style.display = "none";
        }

        if (infoSection.style.display === "flex") {
            infoSection.style.display = "none";
        }

        
    }

    else {
        infoSection3.style.display = "none";

    }
})
