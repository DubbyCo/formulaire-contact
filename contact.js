let userName = "";
let email = "";
let message = "";
let btnEnvoyer = document.getElementById('btnEnvoyer');

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    userName = document.getElementById('nom').value;
    email = document.getElementById('email').value;
    message = document.getElementById('message').value;

    btnEnvoyer.disabled = true;

    sendForm();
});

const sendForm = async () => {
   try {
    const response = await fetch('https://formspree.io/f/xvzwyglr', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userName, email, message})
    });
    if (response.ok) {
        document.getElementById('msgSucces').style.display = "block";
    } else {
        document.getElementById('msgErreur').style.display = "block";
    }
    btnEnvoyer.disabled = false;

   } catch (error) {
    document.getElementById('msgErreur').style.display = "block";
    
    btnEnvoyer.disabled = false;
    }

};


