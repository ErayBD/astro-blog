$(document).ready(function(){

    $("#camerabtn").click(function(){
        if (document.getElementById("camera").style.display == "none") {
            $("#camera").fadeIn();
            $("#lens").fadeOut();
            $("#tripod").fadeOut();
        }
        else {
            $("#camera").fadeOut();
            $("#lens").fadeOut();
            $("#tripod").fadeOut();
        }
    });

    $("#lensbtn").click(function(){
        if (document.getElementById("lens").style.display == "none") {
            $("#camera").fadeOut();
            $("#lens").fadeIn();
            $("#tripod").fadeOut();
        }
        else {
            $("#camera").fadeOut();
            $("#lens").fadeOut();
            $("#tripod").fadeOut();
        }
    });

    $("#tripodbtn").click(function(){
        if (document.getElementById("tripod").style.display == "none") {
            $("#camera").fadeOut();
            $("#lens").fadeOut();
            $("#tripod").fadeIn();
        }
        else {
            $("#camera").fadeOut();
            $("#lens").fadeOut();
            $("#tripod").fadeOut();
        }
    });
});

function sendContact() {

    var gender = "";

    var name = document.getElementById("firstName").value;
    var nameL= document.getElementById("firstName").value.length;
    var surname = document.getElementById("lastName").value;
    var surnameL= document.getElementById("lastName").value.length;
    var email = document.getElementById("email").value;
    var emailL= document.getElementById("email").value.length;
        var emailI1 = email.includes("@");
    var emailI2 = email.includes(".com");
    var textL = document.getElementById("question").value.length;

    if (!(document.getElementById("male").checked || document.getElementById("female").checked)) 
        alert("Please select any gender.")
    

    else if (nameL == 0 || surnameL == 0 || emailL == 0 || textL == 0) 
        alert("Please fill the form properly.");

    else if (!(emailI1 && emailI2))
        alert("The e-mail does not contain the '@' symbol and/or '.com'");
    

    else {

        if (document.getElementById("male").checked)
            gender = "Mr. ";
        
        else if (document.getElementById("female").checked)
            gender = "Mrs. ";

        if (confirm("Are you sure you want to send this message?")) 
            alert(gender + name + " " +  surname + "...\n" + "Your message has been received!");

        else {
            alert("Message did not sent.")
        }
    }   
}

function openCity(evt, softwareName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(softwareName).style.display = "block";
    evt.currentTarget.className += " active";
}


