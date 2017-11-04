document.addEventListener("DOMContentLoaded", function() {
    console.log(decodeURI(window.location.pathname));
    var currentPath = window.location.pathname.slice(window.location.pathname.lastIndexOf("/"), window.location.pathname.length);
    console.log(currentPath);

    var content = document.getElementById("webpage");



    /****************************** */
    var request = new XMLHttpRequest();

    request.open('GET', 'http://Users/Houndor/Desktop/Github/RGPage/index.html', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            content.innerHTML = request.responseText;
        }
    };

    request.send();
});