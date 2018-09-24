jQuery("document").ready(function () {
   jQuery("[id='price']").click(function () {
       jQuery('#home').removeClass('active');
       jQuery('#about').removeClass('active');
       jQuery('#price').addClass('active');
   })
    jQuery("#home").click(function () {
        jQuery('#price').removeClass('active');
        jQuery('#about').removeClass('active');
        jQuery('#home').addClass('active');
    })
    jQuery("#about").click(function () {
        jQuery('#home').removeClass('active');
        jQuery('#price').removeClass('active');
        jQuery('#about').addClass('active');
    })

});
