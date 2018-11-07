$(document).ready(function(){


$("#Team").click(function(){
 $(".ContentTeams").fadeIn();
 $(".ContentAbout-US").hide();
 $(".ContentProjects").hide();
 $("#Team").addClass("active");
 $("#Home").removeClass("active");
 $("#projects").removeClass("active");
 $("#about-us").removeClass("active");
 
 
 
});

$("#Home").click(function()
{RedirectHome();
});
$(".Logo").click(function()
{RedirectHome();
});
$('.Logo').hover(function() {
        $(this).css('cursor','pointer');
});





$("#projects").click(function(){


$(".ContentTeams").hide();
$(".ContentProjects").fadeIn();
$(".ContentAbout-US").hide();
/*$(".Content").show();
$("#Projects").show();*/

$("#Home").removeClass("active");
$("#Team").removeClass("active");
$("#projects").addClass("active");
$("#about-us").removeClass("active");


});

$("#about-us").click(function(){

$(".ContentTeams").hide();
$(".ContentProjects").hide();
$(".ContentAbout-US").fadeIn();

$("#Home").removeClass("active");
$("#Team").removeClass("active");
$("#projects").removeClass("active");
$("#about-us").addClass("active");


});

$(".member1").hover(function(){
$(".TextPosition").show();
$(".mem1").fadeIn();
$(".mem2").hide();
$(".mem3").hide();
},function(){
$(".TextPosition").hide();

});

$(".member2").hover(function(){
$(".TextPosition").show();
$(".mem1").hide();
$(".mem2").fadeIn();
$(".mem3").hide();
},function(){$(".TextPosition").hide();
});

$(".member3").hover(function(){
$(".TextPosition").show();
$(".mem1").hide();
$(".mem2").hide();
$(".mem3").fadeIn();
},function(){$(".TextPosition").hide();
});


$(".Project1").hover(function(){
$(".ProjectTextPosition").fadeIn();
$(".Pr1").show();
$(".Pr2").hide();
$(".Pr3").hide();
},function(){$(".ProjectTextPosition").hide();
});


$(".Project2").hover(function(){
$(".ProjectTextPosition").fadeIn();
$(".Pr1").hide();
$(".Pr2").show();
$(".Pr3").hide();
},function(){$(".ProjectTextPosition").hide();
});

$(".Project3").hover(function(){
$(".ProjectTextPosition").fadeIn();
$(".Pr1").hide();
$(".Pr2").hide();
$(".Pr3").show();
},function(){$(".ProjectTextPosition").hide();
});






});

function RedirectHome()
{


$(".ContentTeams").fadeOut();
 $(".ContentAbout-US").fadeOut();
 $(".ContentProjects").fadeOut();


$("#Home").addClass("active");
$("#Team").removeClass("active");
$("#projects").removeClass("active");
$("#about-us").removeClass("active");



}
