let name = prompt();

 let user = {
        name: name,
    }

let userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);


