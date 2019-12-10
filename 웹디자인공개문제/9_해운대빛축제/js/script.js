$(".gnb>li").hover(
    function()
        {$(this).children(".sub").stop("true","true").slideToggle();}
    )


slide();
var fadeClock;

function slide() {
    var first = document.querySelector(".fade__item:first-child");
    var show = "show";
    
    fadeClock = setInterval(function(){
    var current = document.querySelector(".show");
   
        if(current) {
            current.classList.remove(show);
            var next = current.nextElementSibling;
            if(next) {
                next.classList.add(show);
            } else {
                first.classList.add(show);
            }
        } else {
            first.classList.add(show);
        }
    }, 3000)
}

//슬라이드 클릭시 5초간 대기

var fade = document.querySelector("#fade");
fade.addEventListener("click", pauseSlide)

function pauseSlide() {
    clearInterval(fadeClock);
    setTimeout(slide, 5000);
}

$(".not").click(()=>{$(".gallery").hide();})
$(".not").click(()=>{$(".notice").show();})
$(".gal").click(()=>{$(".notice").hide();})
$(".gal").click(()=>{$(".gallery").show();})
$(".open").click(()=>{$(".popup").toggle();})
$(".close").click(()=>{$(".popup").hide();})
$(".popup").click(()=>{$(".popup").hide();})