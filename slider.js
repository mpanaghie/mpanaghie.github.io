var rightPosition = 0;

function moveImages() {
    rightPosition += window.innerWidth;
    var imgs = document.getElementsByClassName("slideshow-images");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.right = rightPosition + "px";
    }


    if (rightPosition > 1500) {
        rightPosition = 0;
    }
}

var animationCount = 1;

function restartAnimation() {
    animationCount++;
    console.log(animationCount);
    var imgs = document.getElementsByClassName("slideshow-images");
    for (var i = 0; i < imgs.length; i++) {
        var image = imgs[i];
        image.style.animation = "slider-animation" + animationCount +" 3s ease 0s 1 normal forwards";
    }
    if(animationCount > 3) {
        animationCount = 0;
    }
}

//setInterval(moveImages, 1000);
setInterval(restartAnimation, 3500);