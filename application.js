/*Created 2015-07-21  by Rajbir Karan Singh*/

function init(e){
    $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
    $('#email_form').submit(function(e){
        e.preventDefault();
        data = {};
        data.send_to = "support@mobilefringe.com";
        data.subject = "Get in touch - Mobile Fringe form";
        data.body = {"email" : $('#yourEmail').val(), "name" : $('#yourName').val(), "message" : $('#yourMessage').val()};
        $.post('http://mobilefringe.mallmaverick.com/send_contact_email', data, function(data, textStatus, jqXHR){
            if(textStatus == "success"){
                $('#email_sent').fadeIn();
                $('#email_form').trigger('reset')
            }
            else{
                alert("Error sending email. Please try again later.");
            }
        });
    });
}

function renderPostDetails(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    $.each( collection , function( key, val ) {
        if (val.image_url.indexOf('missing.png') > -1) {
            val.post_image = "http://assets.codecloudapp.com/sites/55aebd796e6f647ab3000000/3c6a566470bd84023afe06935df98ea8/MFlogo.png";
        } else {
            val.post_image = val.image_url;
        }
        if(val.body.length > 100){
            val.description_short = val.body.substring(0,100) + "...";
        }
        else{
            val.description_short = val.body;
        }
        var date_blog = new Date(val.publish_date + " 04:00:00");
        val.published_on = get_month(date_blog.getMonth()) + " " + date_blog.getDate() + ", " + date_blog.getFullYear();
        var next_p = getNextPublishedPostBySlug(val.slug);
        var prev_p = getPrevPublishedPostBySlug(val.slug);
        if (next_p == undefined){
            val.next_post_show = "display:none";
        }
        else{
            val.next_post = next_p.title;
            val.next_slug = next_p.slug;
            val.next_post_show = "display:inline-block";
        }
        if (prev_p == undefined){
            val.prev_post_show = "display:none";
        }
        else{
            val.prev_post = prev_p.title;
            val.prev_slug = prev_p.slug;
            val.prev_post_show = "display:inline-block";
        }
        if (val.tag != undefined){
            val.tag_list = val.tag.join(', ');
        }
        
        var rendered = Mustache.render(template_html,val);
        item_rendered.push(rendered);
    });
    
    $(container).html(item_rendered.join(''));
}



function renderTestimonial(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    item_list.push(collection);
    $.each( item_list , function( key, val ) {
        val.institute = val.tag[0];
        var rendered = Mustache.render(template_html,val);
        item_rendered.push(rendered);
    });
    $(container).html(item_rendered.join(''));
}


function get_month (id){
    var month = "";
    switch(id) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
            
    }
    return month;
}

function subscribe(){
    $('#newsletter_form').submit(function(e){
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    alert("Please try again later.");
                } else { // 200
                    $("#success_subscribe").fadeIn();
                }
            }
        );
    });
}
function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}