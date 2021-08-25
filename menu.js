
        function menu() {
            let x = document.getElementById("myLinks");

            if (x.style.visibility === "hidden") {
                
                x.style.visibility = "visible";

                x.style.height = "16rem";
            }

            else {
                                
                x.style.visibility = "hidden";

                x.style.height = "0";
            }
        }
