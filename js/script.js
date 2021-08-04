$(function(){
    var open = false;
    
    $(".nav-bar i").click(function(){
        //$(".mobile-nav").slideToggle();
        if(open == false)
        {
            $(".mobile-nav").css("display","block");
            open = true;
        }else
        {
            $(".mobile-nav").css("display","none"); 
            open = false; 
        }
    });
});