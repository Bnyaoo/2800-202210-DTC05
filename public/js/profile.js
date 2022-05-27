function send_profile() {
  location.href = "/success";
}

function setup(){
  $("#submit").click(send_profile);

}

$(document).ready(setup)