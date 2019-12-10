
//네비
$(".gnb>li").hover(
  function() {$(this).children(".sub").stop().fadeToggle()}
)

//팝업창
$(".note>li:first").click(()=>$(".popup").toggle());
$(".close").click(()=>$(".popup").hide());

//패밀리사이트 with jquery
// $(".family img").eq(0).click(()=>(window.open("http://facebook.com")))
// $(".family img").eq(1).click(()=>(window.open("https://www.kakaocorp.com/service/KakaoStory")))
// $(".family img").eq(2).click(()=>(window.open("https://www.instagram.com/?hl=ko")))


//패밀리사이트 with javascript
const family = document.querySelector(".family");
const site = family.querySelectorAll("img")

for (i in site) {
  site[i].addEventListener("click", showSite);
}

function showSite(event) {
  event.target.alt === 'sns1'? window.open("http://facebook.com") : 
  event.target.alt === 'sns2'? window.open("https://www.kakaocorp.com/service/KakaoStory") :
  event.target.alt === 'sns3'? window.open("https://www.instagram.com/?hl=ko") : null;
}