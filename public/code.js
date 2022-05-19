function login(){
    email = $("#email").val();
    password = $("#password").val();

    console.log(email);
    console.log(password);


    window.location.href=`http://localhost:3000/login/${email}/${password}`;

}

function setup(){
    console.log("setup");
    $("#login").click(login);
}

$(document).ready(setup)