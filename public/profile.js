function send_profile(){
    console.log("works")
    window.location.href="http://localhost:5000/profileUpdateSuccess";
}



function setup(){
    console.log("Ready!")
    $("#submit").click(send_profile);

}

$(document).ready(setup)