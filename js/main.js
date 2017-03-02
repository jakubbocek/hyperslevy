$(function () {
    $('.navbar-toggle').click(function () {
        $(this).toggleClass('open');
    });

    $(".wrapper .carousel-inner.item").each(function(){
        $(this).hide();
        if($(this).attr('id') == '0') {
            $(this).show();
        }
    });

    $('.wrapper #carousel ol li').on( "click", function(e) {
        e.preventDefault();
        var id = $(this).attr('data-related');
        $(".wrapper .carousel-inner.item").each(function(){
            $(this).hide();
            if($(this).attr('id') == id) {
                $(this).show();
            }
        });
    });
  
}); 