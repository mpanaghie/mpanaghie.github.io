
function addImages (className, book, count, startIndex) {
    var portfolioContainer = document.getElementsByClassName(className)[0];

    for (var i=startIndex;i<startIndex + count;i++) {
        var div = document.createElement("DIV");
        div.setAttribute("class", "portfolio-item-wrapper");
    
        var image = document.createElement("IMG");
        image.setAttribute("src", `res/img/${book}/thumb/Page_${i} copy.jpg`);
        image.setAttribute("class", 'portfolio-item');
        image.setAttribute("id", `image-${i}`);
        image.setAttribute("onclick", `rescale('${book}', '${i}')`);
    
        div.appendChild(image);
    
        portfolioContainer.appendChild(div);
    }
}

function rescale(book, page) {
    var image = document.getElementById(`image-${page}`);
    image.setAttribute("src", `res/img/${book}/high/Page_${page} copy.jpg`);
    if(image.getAttribute("class") === "portfolio-item") {
        image.setAttribute("class", 'portfolio-item-big');
    } else {
        image.setAttribute("class", 'portfolio-item');
    }
}

addImages("book1", "Book1", 54, 1);
addImages("book2", "Book2", 18, 55);