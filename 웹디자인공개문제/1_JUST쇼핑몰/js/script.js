// notice

var note = document.querySelector("#note");
var gall = document.querySelector("#gall");

note.addEventListener("mouseover", showList);
gall.addEventListener("mouseover", hideList);

function showList(){
    document.querySelector(".gall").style.display = "none";
    document.querySelector(".notice").style.display = "block";
}
function hideList(){
    document.querySelector(".notice").style.display = "none";
    document.querySelector(".gall").style.display = "block";
}


var gallImgArray = document.querySelectorAll(".gall>li>a>img");

for(var i = 0; i<gallImgArray.length; i++)
gallImgArray[i].onmouseover = moreBiggerImg;

function moreBiggerImg(){
    this.classList.add("aa1");
    this.onmouseout = init;
}

function init(){
    this.classList.remove("aa1");
}

//clock

const wrap = document.querySelector("#wrap");

inputClock();
window.setInterval(iClock, 1000);

function inputClock(){
    var newDiv = document.createElement("div");
    var newT = document.createTextNode("00:00:00");
    newDiv.appendChild(newT);
    newDiv.setAttribute("id", "clock");
    wrap.insertBefore(newDiv, wrap.childNodes[0]);
    newDiv.style.color = "white";
    newDiv.style.fontSize = "3em";
    newDiv.style.textShadow = "-2px -2px 3px black";
    iClock();
}

function iClock() {
    var cClock = document.querySelector("#clock");
    var currentTime = new Date();
    var hours = zeroF(currentTime.getHours(),2);
    var minutes = zeroF(currentTime.getMinutes(),2);
    var seconds = zeroF(currentTime.getSeconds(),2);
    var amPm = "AM";


    if (hours >= 12) {
        amPm = "PM";
        hours -= 12;
    }
    cClock.innerHTML = 
    `<span class="clockDetail">${amPm}</span>  ${hours}:${minutes}:<span class="clockDetail">${seconds}</span>`
}

function zeroF(num, digit) {
    var zero = "";
    num = num.toString();
    for (var i = 0; i < digit - num.length; i++) {
        zero += "0";
    }
    return zero += num;
}
 // for문은 2자리, 10의 미만수로(1~9시까지) 1자리 즉 2-1 = 1, i는 0일때 한번만 실행된 뒤 종료됨. 0을 추가하는 식을 작성해야함.


 // auto Text
window.setInterval(autoText, 5000);
textarea();

var textList = [];
textList[0] = "당신은 지금도 최고고, 이전에도 최고였으며 앞으로도 최고일 것입니다.";
textList[1] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
textList[2] = "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다.";
textList[3] = "가짜 친구는 소문을 믿고 진짜 친구는 나를 믿는다.";
textList[4] = "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다.";
textList[5] = "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.";
textList[6] = "'언젠가'라는 날은 영원히 오지 않는다.";
textList[7] = "문제점을 찾지 말고 해결책을 찾으라.";
textList[8] = "착한 일은 작다 해서 아니하지 말고, 악한 일은 작다 해도 하지 말라.";
textList[9] = "자존심은 어리석은 자의 소유물이다";

var innerTextList = document.querySelector("#autoText")

var index = 0;
function autoText() {
    index = Math.floor(Math.random() * 10);
    innerTextList.innerHTML = textList[index]  
}

function textarea() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id","autoText");
    wrap.appendChild(newDiv);
}

// Slide

var showSlide = "showSlide";
var firstLi = document.querySelector("#slide>ul>li:first-child");
var leftBtn = document.querySelector(".leftSlide")
var rightBtn = document.querySelector(".rightSlide")

setInterval(slide, 3000);

function slide() {
    var currentClass = document.querySelector("."+showSlide);
    if(currentClass){
        currentClass.classList.remove(showSlide);
        var nextClass = currentClass.nextElementSibling;
            if(nextClass) {
                nextClass.classList.add(showSlide);
            } else {
                firstLi.classList.add(showSlide);
            }
    } else {
        firstLi.classList.add(showSlide);
    }
}

function slideRight() {
    clearInterval();
    setTimeout(slide, 5000);
}
function slideLeft() {
    clearInterval();
    setTimeout(slide, 5000);
}



// jquery

$(".gnb").hover(
    () => {$(".sub").stop().slideToggle();}
)


$(".pop1").click(
    () => {$("#popup").show();}
)
$(".close").click(
    () => {$("#popup").hide();}
)
