import "./style.scss";

$(document).ready(function() {
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('Hellooooo Webpaaaack');
    h1.appendChild(h1Text);
    document.body.appendChild(h1);
})