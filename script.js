const pages=document.querySelectorAll(".page");

function showPage(id){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById(id).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const bgMusic=document.getElementById("bgMusic");

const voicePlayer=document.getElementById("voicePlayer");

const beginBtn=document.getElementById("beginBtn");

const continueBtn=document.getElementById("continueBtn");

const memoryBtn=document.getElementById("memoryBtn");

const questionBtn=document.getElementById("questionBtn");

const yesBtn=document.getElementById("yesBtn");

const ownerBtn=document.getElementById("ownerBtn");

const noBtn=document.getElementById("noBtn");

const noMessage=document.getElementById("noMessage");

beginBtn.addEventListener("click",()=>{

showPage("voicePage");

voicePlayer.play();

});

voicePlayer.onended=()=>{

continueBtn.style.display="inline-block";

};

continueBtn.addEventListener("click",()=>{

bgMusic.volume=.35;

bgMusic.play();

showPage("letterPage");

});

memoryBtn.addEventListener("click",()=>{

showPage("memoriesPage");

});

questionBtn.addEventListener("click",()=>{

showPage("questionPage");

});

yesBtn.addEventListener("click",()=>{

showPage("yesPage");

});

ownerBtn.addEventListener("click",()=>{

showPage("ownerPage");

});
let noClickCount = 0;

const funnyMessages = [
"🥺 Are you sure?",
"💔 My heart isn't ready for that answer...",
"😭 Nice try! This button doesn't want to break my heart.",
"🫣 I don't think so... Try the other button. ❤️",
"🤭 Nope! The YES button looks much better. 🥹💙",
"🫂 Even in our difficult times... I still choose you.",
"💋 You can't escape my love that easily. ❤️",
"🐝 The NO button is on my side today!"
];



noBtn.addEventListener("click", () => {

noClickCount++;

if (noClickCount >= funnyMessages.length) {
noClickCount = funnyMessages.length - 1;
}

noMessage.style.display = "block";
noMessage.innerHTML = funnyMessages[noClickCount];

yesBtn.style.transform = `scale(${1 + (noClickCount * 0.08)})`;


});



function createHeart() {

const heart = document.createElement("div");

heart.className = "floating-heart";

const emojis = [
"💙",
"❤️",
"🫂",
"💋",
"🥹",
"🐝"
];

heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

heart.style.left = Math.random() * 100 + "%";

heart.style.animationDuration = (8 + Math.random() * 6) + "s";

heart.style.fontSize = (20 + Math.random() * 20) + "px";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

}, 14000);

}

setInterval(createHeart, 800);

document.addEventListener("contextmenu", e => {

e.preventDefault();

});

window.addEventListener("load", () => {

showPage("countdownPage");

});
const countdown = document.getElementById("countdown");
const unlockText = document.getElementById("unlockText");
const openBtn = document.getElementById("openBtn");

const targetTime = new Date("2026-08-13T00:00:00+05:30").getTime();

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = targetTime - now;

if (distance <= 0) {

clearInterval(timer);

countdown.innerHTML = "🎉 It's Time! ❤️";

unlockText.style.display = "block";

openBtn.style.display = "inline-block";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdown.innerHTML =
days + " Days " +
String(hours).padStart(2, "0") + " : " +
String(minutes).padStart(2, "0") + " : " +
String(seconds).padStart(2, "0");

}, 1000);

openBtn.addEventListener("click", () => {

showPage("welcomePage");

});