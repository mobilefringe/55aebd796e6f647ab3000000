$(document).ready(function(){
    console.log("good morning!");
    $('#email_form').submit(function(e){
        var pathArray = window.location.pathname.split( '/' );
        var slug = pathArray[pathArray.length-1];
        console.log(slug);
        $('#sub_btn').attr('disabled', true)
        e.preventDefault();
        data = {};
        data.send_to = "contact@mobilefringe.com";
        data.subject = "Get in touch - Mobile Fringe form";
        data.body = {"email" : $('#email').val(), "name" : $('#name').val(), "message" : $('#message').val()};
        // $.post('//mobilefringe.mallmaverick.com/send_contact_email', data, function(data, textStatus, jqXHR){
        //     if(textStatus == "success"){
        //         $('#email_sent').fadeIn();
        //         $('#email_form').trigger('reset');
        //         $('#sub_btn').removeAttr("disabled");
        //     }
        //     else{
        //         alert("Error sending email. Please try again later.");
        //     }
        // });
    });
});