//Deconnexion à l'application
let valideDeconnexion = document.getElementById('deconnexion');

valideDeconnexion.addEventListener('click', function saveDeconnexion(event){
    localStorage.clear();
    window.location.href = "index.html";
});

