$(function(){
    $(".sns_share").hide();
    $(".share button").click(function(){
        $(".sns_share").stop().toggle();
    });
});