const form = document.getElementById('contact-form');
// const inputs = document.querySelectorAll
//     ('input[type="text"], input[type="email"]');
const inputName = document.getElementById('name')
const inputFirstname = document.getElementById('firstname')
const inputMail = document.getElementById('email')
const message = document.getElementById('message');


inputName.addEventListener('input', (evt) => {
    nom = evt.target.value;
});

inputFirstname.addEventListener('input', (evt) => {
    firstname = evt.target.value;
});
inputMail.addEventListener('input', (evt) => {
    email = evt.target.value;
});

message.addEventListener('input', (evt) => {
    text = evt.target.value;
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    
        const data = {
            nom: nom,
            firstname: firstname,
            email: email,
            text: text,
        };
        //console.log(data);

        document.getElementById("name").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        nom = null;
        firstname = null;
        email = null;
        text = null;

        alert('Message envoyé !')
    
})

