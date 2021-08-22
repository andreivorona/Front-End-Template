
        function menu() {
            let x = document.getElementById("myLinks");

            let y = document.getElementById("topnav");

            if (x.style.display === "flex") {
                x.style.display = "none";
                y.style.height = "0";
            }

            else {
                x.style.display = "flex";
                y.style.height = "16rem";
            }
        }
