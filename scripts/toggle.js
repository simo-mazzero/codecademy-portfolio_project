function toggleNav() {
    var x = document.getElementById("toggle-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("icon").className = "fa fa-bars";
    } else {
        x.style.display = "block";
        document.getElementById("icon").className = "fa fa-xmark";
    }
}