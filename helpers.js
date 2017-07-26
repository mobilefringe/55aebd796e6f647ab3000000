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
    
     SyntaxHighlighter.all();
});
 $(window).load(function(){
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider1'
      });

      $('#slider1').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
      
 			$('.ex1').zoom({ on:'click' });
      $('#zoom1').zoom({ on:'click' });
			//$('#ex2').zoom({ on:'grab' });
			//$('.slides').zoom({ on:'click' });			 
			//$('#ex4').zoom({ on:'toggle' });
      
    });