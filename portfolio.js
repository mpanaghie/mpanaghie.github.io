var portfolioContainer = document.getElementsByClassName("portfolio-container")[0];

for (var i=1;i<=24;i++) {
    var div = document.createElement("DIV");
    div.setAttribute("class", "portfolio-item-wrapper");

    var image = document.createElement("IMG");
    image.setAttribute("src", "res/img/Book1/Page_" + i + ".jpg");
    image.setAttribute("class", "portfolio-item");

    var title = document.createElement("H3");
    title.setAttribute("class", "portfolio-item-title content-font");
    title.innerHTML = "Page " + (i) + ":<br>" + book1[i-1];

    div.appendChild(image);
    div.appendChild(title);

    portfolioContainer.appendChild(div);
}