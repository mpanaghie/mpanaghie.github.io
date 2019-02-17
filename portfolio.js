var portfolioContainer = document.getElementsByClassName("portfolio-container")[0];

for (var i=1;i<=20;i++) {
    var div = document.createElement("DIV");
    div.setAttribute("class", "portfolio-item-wrapper");

    var image = document.createElement("IMG");
    image.setAttribute("src", "res/img/Book1/Page_" + i + ".jpg");
    image.setAttribute("class", "portfolio-item");

    var title = document.createElement("H2");
    title.setAttribute("class", "portfolio-item-title content-font");
    title.innerHTML = book1[i-1];

    div.appendChild(image);
    div.appendChild(title);

    portfolioContainer.appendChild(div);
}