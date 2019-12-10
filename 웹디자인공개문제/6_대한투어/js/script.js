
$(".gnb").hover(()=>{$(".sub").slideToggle();})
$(".gnb").hover(()=>{$(".navback").slideToggle();})
$(".open").click(()=>{$("#popup").show();})
$(".open").click(()=>{$(".bg").show();})
$(".close").click(()=>{$("#popup").hide();})
$(".close").click(()=>{$(".bg").hide();})
$(".snsitem img:eq(0)").click(()=>{window.open("http://facebook.com")})
$(".snsitem img:eq(1)").click(()=>{window.open("http://naver.com")})
$(".snsitem img:eq(2)").click(()=>{window.open("http://google.com")})
$("#sel").change(()=>{
    const newWindow = window.open("about:blank");
    let sel = document.querySelector("#sel");
    sel.options.selectedIndex === 0 ? newWindow.location.href="http://www.modetour.com/main/" :
    sel.options.selectedIndex === 1 ? newWindow.location.href="http://www.hanatour.com/asp/booking/oversea/oversea-main.asp?hanacode=overseas_M_bi" :
    sel.options.selectedIndex === 2 ? newWindow.location.href="http://hanatour.com" :
    sel.options.selectedIndex === 3 ? newWindow.location.href="https://www.mywttdallas.com/" : ""
})
$(".imgbtn").click(()=>{window.open("http://twitter.com")})