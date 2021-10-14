document.getElementById('login-submit').addEventListener('click', function () {


    //for eamil
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    //for password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //for check email and password
    if (userEmail == 'shaykat467@gmail.com' && userPassword == '123456') {

        // ak html page theke onno html page a jaoyar jonno

        window.location.href = 'advance.html';

    }

});


