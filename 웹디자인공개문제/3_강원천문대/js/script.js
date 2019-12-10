function showPopup() {
    document.querySelector("#popup").style.display = "block";
    document.querySelector(".bg").style.display = "block";
}

function hidePopup() {
    document.querySelector("#popup").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

slide();

function slide(){
    var showSlide = "showSlide";
    
    setInterval(function(){
        
    var firstSlide = document.querySelector("#slide li:first-child");
    var currentSlide = document.querySelector("."+showSlide);
    
    if(currentSlide){
        currentSlide.classList.remove(showSlide);
        var nextSlide = currentSlide.nextElementSibling;

        if(nextSlide){
            nextSlide.classList.add(showSlide); 
        } 
        else {
            firstSlide.classList.add(showSlide);
        }
    } 
    else {
        firstSlide.classList.add(showSlide);
    }
    },3000)
}

$(".gnb>li").hover(
    function() {$(this).children(".sub").stop().slideToggle();}
)

$(".gall").click(()=>{$(".gallBox").show();})
$(".gall").click(()=>{$(".noteBox").hide();})
$(".note").click(()=>{$(".noteBox").show();})
$(".note").click(()=>{$(".gallBox").hide();})


slide2();

function slide2(){
    var showSlide = "showSlide2";
    
    setInterval(function(){
        
    var firstSlide = document.querySelector(".banner li:first-child");
    var currentSlide = document.querySelector("."+showSlide);
    
    if(currentSlide){
        currentSlide.classList.remove(showSlide);
        var nextSlide = currentSlide.nextElementSibling;

        if(nextSlide){
            nextSlide.classList.add(showSlide); 
        } 
        else {
            firstSlide.classList.add(showSlide);
        }
    } 
    else {
        firstSlide.classList.add(showSlide);
    }
    },3000)
}