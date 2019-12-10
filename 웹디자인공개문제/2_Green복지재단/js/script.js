$(".gnb").hover(()=>{$(".sub").stop().fadeToggle();})


var noteBtn = document.querySelector(".note>a:first-child");
var bttn = document.querySelector(".close");
var note = document.querySelector("#popUp");
var bg = document.querySelector("#bg");

noteBtn.addEventListener("click", function(){
    note.style.display = "block";
    bg.style.display = "block";
})
bttn.addEventListener("click", function(){
    note.style.display = "none";
    bg.style.display = "none";
})


setInterval(slide, 3000);

var showSlide = "showSlide";

function slide() {
    var firstSlide = document.querySelector(".bannItem:first-child");
    var currentSlide = document.querySelector(".showSlide");

    if(currentSlide) {
        currentSlide.classList.remove(showSlide);
        var nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(showSlide);
        } else {
            firstSlide.classList.add(showSlide);
        }
    } else {firstSlide.classList.add(showSlide);
    }
}

