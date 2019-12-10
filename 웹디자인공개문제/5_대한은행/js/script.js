$(".gnb").hover(
    () => {$(".sub").stop().slideToggle();}
)

$("#nButton").hover(() => {$(".gall").stop().hide();})
$("#nButton").hover(() => {$(".note").stop().show();})
$("#gButton").hover(() => {$(".note").stop().hide();})
$("#gButton").hover(() => {$(".gall").stop().show();})


$(".open").click(() => {$(".popup").show();})
$(".open").click(() => {$(".bg").show();})
$(".close").click(() => {$(".popup").hide();})
$(".close").click(() => {$(".bg").hide();})

//슬라이드
var ul = document.querySelector('.slideWrap');
 
function move(){

    var curIndex = 0;

    setInterval(function(){
        ul.style.transition = '0.5s';
        ul.style.transform = "translate3d(-"+1200*(curIndex+1)+"px, 0px, 0px)";

        curIndex++;

        if(curIndex === 3){
            setTimeout(function(){
                ul.style.transition = '0s';
                ul.style.transform = "translate3d(0px, 0px, 0px)";
            },500)
            curIndex = 0;
        }

    },2000);
}

document.addEventListener("DOMContentLoaded",function(){
    move();
});


