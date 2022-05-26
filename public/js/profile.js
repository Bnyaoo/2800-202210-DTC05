function send_profile() {
  location.href = "/success";
}




function setup(){
  console.log("Js is connected")
  $("#submit").click(send_profile);

}

$(document).ready(setup)