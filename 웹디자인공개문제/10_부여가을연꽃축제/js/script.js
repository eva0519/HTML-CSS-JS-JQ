$(".gnb>li").hover(
    function() {$(this).children(".sub").stop().slideToggle();
})

$(".notice>li:first").click(() => {$(".popup").fadeToggle();})
$(".close").click(() => {$(".popup").fadeOut();})


fade();

function fade() {
    var first = document.querySelector(".fade-item:first-child")
    var SHOWING = "showing";

    setInterval(()=>{
        var current = document.querySelector("."+SHOWING);
        if(current){
            current.classList.remove(SHOWING);
            var next = current.nextElementSibling;
            if(next){
                next.classList.add(SHOWING);
            } else {
                first.classList.add(SHOWING);
            }
        } else {
            first.classList.add(SHOWING);
        }
    },3000)
}
