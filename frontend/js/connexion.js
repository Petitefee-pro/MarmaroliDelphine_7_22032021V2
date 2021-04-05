//récupération des données du formulaire afin d'établir la connexion
let valideFormLogin = document.getElementById('login');

valideFormLogin.addEventListener ('click', function saveLogin (event){

    //Vérification par regex du formulaire de login
    let pseudo = document.getElementById(pseudo);
    let password = document.getElementById(password);
    if((pseudo === "") 
        && (password === "")
    ){
        alert ("Veuillez s'il vous plaît, indiquer un pseudo et un mot de passe valide ! ")
    } else{
        let login = {
            pseudo: pseudo, 
            password: password
        };
        console.log(login);
        const envoi = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({ login }),
            mode: 'cors',
            cache: 'default'
        };
        console.log(envoi);
        fetch("http://localhost:3000/api/user/login", envoi)
        .then(response => response.json())
        .then(login => {
            console.log(login);
            localStorage.setItem("pseudo", JSON.stringify(login.pseudo));
            window.location.href = "forum.html";
        })                                                               
        .catch(error => alert("Erreur : " + error));
    }
});