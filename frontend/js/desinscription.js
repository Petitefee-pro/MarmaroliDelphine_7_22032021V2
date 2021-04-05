//Envoi du formulaire pour effectuer une désincription
let valideFormUnsubscribe = document.getElementById('unsubscribe');

valideFormUnsubscribe.addEventListener('click', function saveUnsubscribe(event){

    //Vérification par regex du formulaire de désinscription
    let identifiant = document.getElementById('identifiant');
    let regexIdentifiant = /[0-9]{4}/g;
    let email = document.getElementById('email');
    let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    let password = document.getElementById('password');
    let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/g;
    if((regexIdentifiant.test(identifiant) === true)
        && (regexEmail.test(email) === true)
        && (regexPassword.test(password) === true)
    ){    
        let unsubscribe = {
            identifiant: identifiant,
            email: email, 
            password: password
        };
        console.log(unsubscribe);
        const envoi = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({ unsubscribe }),
            mode: 'cors',
            cache: 'default'
        };
        console.log(envoi);
        fetch("http://localhost:3000/api/user/unsubscribe", envoi)
        .then(response => response.json())
        .then(unsubscribe => {
            console.log(unsubscribe);
            localStorage.clear();
            window.location.href = "index.html";
        })
            .catch(error => alert("Erreur : " + error));
    } else{
        alert ("Veuillez s'il vous plaît, indiquer votre identifiant, votre email et votre mot de passe valide ! ")
    }
});