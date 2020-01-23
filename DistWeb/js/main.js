$(window).load(function() {
 	 $(".menu-button").on("click", function(){
 	 	$(".menu").toggleClass("menu-active");
 	 });
	 $(".menu-button-link").on("click", function(){
 	 	$(".menu").removeClass("menu-active");
 	 }); 	 

});

 $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 768)$(".menu").addClass("");
    else $(".menu").removeClass("menu-active");
 });

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $(".offer-form").show();
}
function PopUpHide(){
    $(".offer-form").hide();
}