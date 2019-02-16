function resizeContent() {
    var slideshow = document.getElementsByClassName("single-page-element")[0];
    var positionY = slideshow.getBoundingClientRect().y;
    var height = window.innerHeight;

    slideshow.style.height = (height - positionY) + "px";
    document.getElementsByTagName("BODY")[0].style.opacity = 1;
}