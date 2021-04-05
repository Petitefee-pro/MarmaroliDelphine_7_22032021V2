//Envoi du formulaire d'inscription
let valideFormSignup = document.getElementById('signup');

valideFormSignup.addEventListener('click', function saveSignup(event){

    //Vérification par regex du formulaire d'inscription
    let identifiant = document.getElementById('identifiant').value;
    let regexIdentifiant = /[0-9]{4}/g;
    let pseudo = document.getElementById('pseudo');
    let regexPseudo = /[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,10}/g;
    let email = document.getElementById('email');
    let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    let password = document.getElementById('password');
    let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/g;
    if((regexIdentifiant.test(identifiant) === true)
        && (regexPseudo.test(pseudo) === true)
        && (regexEmail.test(email) === true)
        && (regexPassword.test(password) === true)
    ){
        let profil = {
            identifiant: identifiant,
            pseudo: pseudo,
            email: email,
            password: password
        };

        //Envoi du formulaire d'inscription
        const envoi = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( profil ),
            mode: 'cors',
            cache: 'default'
        };
        console.log(envoi);
        fetch("http://localhost:3000/api/user/signup", envoi)
        .then(response => response.json())
        .then(profil => {
            console.log(profil);
            localStorage.setItem("pseudo", JSON.stringify(profil.pseudo));
            window.location.href = "forum.html";
        })  
        .catch(error => alert("Erreur : " + error));
    } else{
        alert("Veuillez vérifier vos informations, le formulaire d'inscription n'est pas valide.")
    }
});