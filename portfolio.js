
function addImages (className, book, count) {
    var portfolioContainer = document.getElementsByClassName(className)[0];

    for (var i=1;i<=count;i++) {
        var div = document.createElement("DIV");
        div.setAttribute("class", "portfolio-item-wrapper");
    
        var image = document.createElement("IMG");
        image.setAttribute("src", `res/img/${book}/Page_${i}.jpg`);
        image.setAttribute("class", "portfolio-item");
    
        div.appendChild(image);
    
        portfolioContainer.appendChild(div);
    }
}

addImages("book1", "Book1", 54);
addImages("book2", "Book2", 18);