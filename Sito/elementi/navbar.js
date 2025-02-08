fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        // Ricarica gli stili
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "stili.css"; // Assicurati che il percorso sia corretto
        document.head.appendChild(link);
    });
