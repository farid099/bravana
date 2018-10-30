$(document).ready(function(){
    $(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed:1000,
    
        });
     });
     var a = true;
     $('.animate').click(function(){
        if(a){
            $('.changecolor').css({'left':'0'})
            a = false;
        }else{
            $('.changecolor').css({'left':'-300px'})
            a = true;
        }
    });
    $(".allColors ").click(function(){
    var color=$(this).css("backgroundColor");
    $(".fa").css({"color":color});
    // $("a").css({"color":color});
    $(".allLines").css({"color":color});
    // $("span").css({"color":color});
    $("hr").css({"backgroundColor":color});
    $(".mini-chat").css({"backgroundColor":color});
    $("button").css({"backgroundColor":color});
    $(".round").css({"backgroundColor":color});
    $(".head").css({"backgroundColor":color});
    $(".help").css({"borderColor":color});
    
    
    
    })   
    $('.elements').mouseover(function(){
        $('.elementsOpen').css('display','block')
    })
    $('.elements').mouseout(function(){
        $('.elementsOpen').css('display','none')
    })
    $('.elementsOpen').mouseover(function(){
        $(this).css('display','block')
    })
    $('.elementsOpen').mouseout(function(){
        $(this).css('display','none')
    })
    $('.nav-link').each(function(){
        $(this).mousemove(function(){
            $(this).css('color','#69B417')
            $(this).next().css('display','block')           
        })
    })
    $('.nav-link').each(function(){
        $(this).mouseout(function(){
            $(this).css('color','#8c8c8c')
            $(this).next().css('display','none')
        })
    })
        $('.dropdown-menu').mousemove(function(){
            $(this).css('display','block')           
    })
        $('.dropdown-menu').mouseout(function(){
            $(this).css('display','none')
        }) 
        
        $(window).scroll(function(){
            if($(this).scrollTop() > 500 ) {
                $('.scrollUp').show(1000);
            }else{
                $('.scrollUp').hide(1000);
            };
        });
        $('.scrollUp').click(function(){
            $("html,body").scrollTop(0)
        });
    })
    
    