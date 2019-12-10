$(".gnb>li").hover(function() {$(this).children(".sub").slideToggle();})
$(".close").mouseover(()=>{$(".close").css({"background":"black","color":"white"});})
$(".close").mouseout(()=>{$(".close").css({"background":"","color":""});})

$("#popup>p").hover(
    function(){
        $("#popup>p").toggleClass("close__style")
    }
)

var recover = $("#wrap").clone(true);

$(document).delegate(".close", "click",
    function() {
        $(".bg").replaceWith(recover);
        $("#popup").hide();
    }
)

$(document).on("click", ".open",
    function() {
        $("#wrap").replaceWith("<div class='bg'></div>")
        $("#popup").show();
    }
)

$(".sns a").eq(0).click(()=>{
    let newWin = window.open();
    newWin.location.href = "http://facebook.com";
})