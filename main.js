window.onload = function () {
    //loadImages();
};

function loadImages() {
    var flag = 0;
    var allImgs = document.getElementsByClassName("fakeimg");

    for (var i = 0; i < allImgs.length; i++) {
        var img = document.createElement("img");
        allImgs[i].innerHTML = "";
        allImgs[i].style.padding = 0;
        img.classList.add("set-img");

        img.style.width = "100%";
        img.style.height = "100%";
        if (flag === 0) {
            img.src = "images/image1.png";
        }
        else if (flag === 1) {
            img.src = "images/image2.jpg";
        }
        else if (flag === 2) {
            img.src = "images/image3.jpg";
        }
        else {
            flag = 0;
            img.src = "images/image1.png";
        }
        flag++;
        allImgs[i].append(img);
    }
}