$(document).ready(function(){
    
    my_client_list = ["https://mallmaverick.cdn.speedyrails.net/system/stores/store_fronts/000/022/272/original/Square_rogers.jpg?1452746998", "https://mallmaverick.cdn.speedyrails.net/system/stores/store_fronts/000/022/273/original/Square_fido.jpg?1452746999","https://mallmaverick.cdn.speedyrails.net/system/stores/store_fronts/000/024/592/original/Square_NorthPark.jpg?1452750736","https://mallmaverick.cdn.speedyrails.net/system/stores/store_fronts/000/024/590/original/Square_OrlandoCorp.jpg?1452750732"];
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
    
    if(window.location.pathname.indexOf("our_work/?id") > -1) {
        window.location.replace("/our_work");
    }
    //  SyntaxHighlighter.all();
});
$(window).load(function(){

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        arrows:true
         
        // responsive: [
        // {
        //   breakpoint: 768,
        //   settings: {
        //     arrows: true,
        //     centerMode: true,
        //     centerPadding: '40px',
        //     slidesToShow: 3
        //   }
        // },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     arrows: true,
        //     centerMode: true,
        //     centerPadding: '40px',
        //     slidesToShow: 1
        //   }
        // }
        // ]
    });
});