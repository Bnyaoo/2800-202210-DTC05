function login(){
    email = $("#email").val();
    password = $("#password").val();

    // console.log(email);
    // console.log(password);


    window.location.href=`https://pure-depths-86049.herokuapp.com/login/${email}/${password}`;

}

function setup(){
    console.log("setup");
    $("#login").click(login);
}

$(document).ready(setup)