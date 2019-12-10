// $(".gnb>li").hover(
//     function() {$(this).children(".sub").stop().fadeToggle();
// })

const sub = document.querySelectorAll(".sub"),
    gnb = document.querySelector(".gnb");
    gnbLi = Array.from(gnb.children),
    liChildUl = document.querySelectorAll(".gnb li>ul");

var showNav = document.querySelector(".shownav");
var SHOW = "shownav"

for (i in gnbLi) {
  gnbLi[i].addEventListener("mouseover", hi);
  gnbLi[i].addEventListener("mouseleave", bye);

function hi() {
    var thisCN = parseInt(this.className);
    var li = this;
    var ul = li.querySelector("ul");
    ul.classList.add(SHOW);
    ul.setAttribute("style","top:" + (-40 + thisCN) + "px")
}

  function bye() {
    liChildUl.forEach(element =>element.classList.remove(SHOW));
  }
}
