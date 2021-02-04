document.addEventListener('scroll', function() {
    var yLoc = window.pageYOffset;
    if(yLoc <= deviceHeight) {
        mainBodyScrollUp(yLoc);
    }
});
const deviceHeight = window.innerHeight;
function jumpToHome() {
    setTimeout(function() {window.scroll(0,0);},100); //delay to prevent page bug that changes position of elements.
}
function jumpToAboutMe() {
    setTimeout(function() {window.scroll(0,innerHeight);},100);
}

function jumpToSkills() {
    setTimeout(function() {window.scroll(0,innerHeight * 2);},100);
}
function mainBodyScrollUp(yOffset) {
    var opacityFraction = (350 - yOffset) / 280;
    var rGBAFraction = (100 + yOffset) / 500;
    var scaleFraction = 1 + yOffset / 10000;
    var fontSize = 1 - yOffset / 10000;
    document.getElementById("learn-more").style.opacity = opacityFraction;
    document.getElementById("main-body-text").style.opacity = opacityFraction;
    document.getElementById("main-body-text").style.transform = "scale("+ fontSize +")"
    document.querySelector("#main-body-text h1").style.transform = "translateY(-" + (yOffset / 3) + "px)";
    document.querySelector("#main-body-text h2").style.transform = "translateY(-" + (yOffset / 4) + "px)";
    document.getElementById("boyang-photo").style.opacity = opacityFraction;
    document.getElementById("boyang-photo").style.transform = "translateY(-" + (yOffset / 2) + "px)";
    document.getElementById("top-logo-container").style.backgroundColor = " rgba(32, 40, 64, "+ rGBAFraction +")";
    document.getElementById("top-button-container").style.backgroundColor = " rgba(32, 40, 64, "+ rGBAFraction +")";
    document.getElementById("about-me").style.backgroundColor = " rgba(48, 58, 85, "+ rGBAFraction +")";
    document.getElementById("main-body-background").style.transform = "scale("+ scaleFraction + "," + scaleFraction + ")";
}
