function send_profile(){
    console.log("works")
    lowerLimit = $("#lowerLimit").val();
    upperLimit = $("#upperLimit").val();

    console.log(lowerLimit);
    console.log(upperLimit);

//     $.ajax(
//         {
//             url: "https://glacial-wave-58910.herokuapp.com/findUnicornByWeight",
//             type: "POST",
//             data: {
//                 "lowerLimit": lowerLimit,
//                 "upperLimit": upperLimit
//             },
//             success: process_res
//         }
//     )
// }
    window.location.href="https://pure-depths-86049.herokuapp.com/profileUpdateSuccess";




function setup(){
    console.log("Ready!")
    $("#submit").click(send_profile);

}

$(document).ready(setup)