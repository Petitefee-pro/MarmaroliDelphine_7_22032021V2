const { response } = require("express");

//Envoi du formulaire de dépôt d'un post
let valideFormPost = document.getElementById('post');

valideFormSignup.addEventListener('click', function saveSignup(event){
    let pseudo = localStorage.getItem('pseudo');
    let post = this.post;
    let regexPost = /[A-Za-z\s\-éöàäèüáúóêûîôâ']{2,1500}/g;
    if((regexPost.test(post) === true)
    ){
        let message = {
            pseudo: pseudo,
            post: post
        }
        console.log(message);
        const envoi = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message }),
            mode: 'cors',
            cache: 'default'
        }
        console.log(envoi);
        fetch("http://localhost:3000/api/forum", envoi)
            .then(response => response.json())
            .then(message => {
            console.log(message);
            window.location.href = "forumTexte.html";
            })            
            .catch(error => alert("Erreur : " + error));
    } 
});

//Interrogation de l'API

    let params = (new URL(document.location)).searchParams;
    let idForum = params.get('idForum');

//Récupération des posts déposés

fetch("http://localhost:3000/api/forum"+id)
.then(response => response.json())
.then(posts => {
    for(let i=0; i <ours.length; i++){

        posts = document.getElementById('posts');
        newPosts = document.createElement('div');
        newPosts.className = 'postDiv';
        posts.append(newPosts);

        newPostPseudo = document.createElement('p');
        newPostPseudo.className = 'postsPseudo';
        newPosts.append(newPostPseudo);

        newPostsTexte = document.createElement('p');
        newPostsTexte.className = 'postsTexte';
        newPosts.append(newPostsTexte);
    }
})
