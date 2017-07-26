$(document).ready(function(){
    $('#email_form').submit(function(e){
        var pathArray = window.location.pathname.split( '/' );
        var slug = pathArray[pathArray.length-1];
        if(slug === "") {
            slug = "home"
        }
        console.log(slug);
        $('#sub_btn').attr('disabled', true)
        e.preventDefault();
        data = {};
        data.send_to = "contact@mobilefringe.com";
        data.subject = "Get in touch - Mobile Fringe form (sent from " +slug + " page )";
        data.body = {"email" : $('#email').val(), "name" : $('#name').val(), "message" : $('#message').val()};
        $.post('//mobilefringe.mallmaverick.com/send_contact_email', data, function(data, textStatus, jqXHR){
            if(textStatus == "success"){
                $('#email_sent').fadeIn();
                $('#email_form').trigger('reset');
                $('#sub_btn').removeAttr("disabled");
            }
            else{
                alert("Error sending email. Please try again later.");
            }
        });
    });
    
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});