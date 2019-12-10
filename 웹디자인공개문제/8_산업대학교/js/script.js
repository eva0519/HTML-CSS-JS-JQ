$(".gnb").hover(()=>{$(".sub").slideToggle();})
$(".gnb").hover(()=>{$(".navback").slideToggle();})
$(".note>li:first").click(()=>{$(".popup").show();$(".bg").show();})
$(".close").click(()=>{$(".popup").hide();$(".bg").hide();})
$(".close").on({
    "mouseover": function(){$(".close").css({"background":"black","color":"white"})},
    "mouseout": function(){$(".close").css({"background":"", "color":""})}
})


snsEvent();
function snsEvent() {
    var li = document.querySelectorAll(".fam>li")
    for(var i = 0; i < li.length; i++) {
        li[i].addEventListener("click",gogo);
    }
    function gogo(e) {
        e.preventDefault;
        li[0] === this && window.open("http://facebook.com")
        li[1] === this && window.open("http://twitter.com")
        li[2] === this && window.open("http://naver.com")
    }
}