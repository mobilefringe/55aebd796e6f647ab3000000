$(document).ready(function(){
    var pathArray = window.location.pathname.split( '/' );
    var slug = pathArray[pathArray.length-1];
    if(slug === "") {
        slug = "home"
    }
    $("#subject").val("Get in touch - Mobile Fringe form (sent from " +slug + " page )")
    
    $('#email_form').submit(function(e) {
        values = [];
        values = JSON.stringify($('#email_form').serializeArray());
        e.preventDefault();
        $.ajax({
            url : "/api/v1/contact_us",
            type: "POST",
            data : {authenticity_token: '<%=form_authenticity_token%>' ,
            form_data:values},
            success: function(data, textStatus, jqXHR) {
                $('#email_sent').fadeIn();
                $('#email_form').trigger('reset');
                $('#sub_btn').removeAttr("disabled");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error sending email. Please try again later.");
            }
        });
	});
    
    //  SyntaxHighlighter.all();
});
$(window).load(function(){
    updateSlick();
    $(window).on('resize', function(){
        updateSlick();
    });
    
});

function updateSlick () {
    if($( document ).width()  > 768){
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            autoplay: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            arrows:true
        });
    }
    else {
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            autoplay: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            arrows:true
        });
    }
}