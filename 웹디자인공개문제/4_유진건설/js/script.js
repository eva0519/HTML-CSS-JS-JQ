
    var gallImg = document.querySelectorAll(".gallImg");

    for (var i = 0; i < gallImg.length; i++) {
        gallImg[i].addEventListener("mouseover", sOpacity);
        gallImg[i].addEventListener("mouseout", eOpacity);
    }
    function sOpacity(){
        this.style.opacity = "0.5";
    }
    function eOpacity(){
        this.style.opacity = "1";
    }


    slide();

    function slide(){
        var firstS = document.querySelector(".fadeList>li:first-child");
        var showS = "showSlide";

        // var slideNext = document.querySelector(".sBttn1");
        // var slideBefore = document.querySelector(".sBttn2");

        // slideNext.addEventListener("click", nextS);
        // slideBefore.addEventListener("click", beforeS);

        // function nextS() {
        //     clearInterval();
        // }
        // function beforeS() {
        //     clearInterval();
        // }

        setInterval(function(){
            var current = document.querySelector(".showSlide");
            if(current){
                current.classList.remove(showS);
                var next = current.nextElementSibling;
                if(next){
                    next.classList.add(showS);
                } else {
                    firstS.classList.add(showS);
                }
            } else {
                firstS.classList.add(showS);
            }
        },3000);
    }

    $(".gnb").hover(()=>{$(".sub").stop().slideToggle();});
    $(".gnb").hover(()=>{$(".navBack").stop().slideToggle();});

    $(".notice>li:first-child").click(()=>{$("#popUp").show();});
    $(".close").click(()=>{$("#popUp").hide();});
    $(".notice>li:first-child").click(()=>{$("#bg").show();});
    $(".close").click(()=>{$("#bg").hide();});

    
    var select = document.querySelector("#sch");
    select.addEventListener("change",famSite);

    function famSite() {
            if(select.options.selectedIndex == 0){
                window.open("https://www.learningmen.com/ins/5000200296370","_blank");
            }
            else if(select.options.selectedIndex == 1){
                window.open("https://www.mokpo.ac.kr/intro/intro_20191106.html","_blank");
            } else if(select.options.selectedIndex == 2){
                window.open("https://www.mokpo.go.kr/","_blank");
            }
            else {window.open("https://mped.jne.go.kr/index.jne","_blank");
            }
    }