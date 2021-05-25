Rollimage = new Array()

Rollimage[0] = new Image(121, 153)
Rollimage[0].src = "Images/banner.jpg"
Rollimage[0].src = "Images/In the zone LOGO.PNG"

Rollimage[1] = new Image(121, 153) //dfgdfgdfgdgdfgdddfgd
Rollimage[1].src = "Images/store.png"  //dfgdfgdfgdfgdfgdfg
Rollimage[0].src = "Images/In the zone LOGO.PNG"
/* vfghfghfghfgh*/

//* This code below is applied in order to make the Rollover image to swap the images once a user hovers over it. *//

function SwapOut() {
    document.index.src = Rollimage[1].src;
    return true;
}

function SwapBack() {
    document.index.src = Rollimage[0].src;
    return true;
}

// for opening shop times
var currentdate = new Date();
var currentday = currentdate.getDay();


switch (currentday) {
    case 1:
        document.write("Monday: 10:am -7:00pm");
        break;

    case 2:
        document.write("Tuesday: 10:am -7:00pm");
        break;

    case 3:
        document.write("Wed: 10:am -7:00pm");
        break;

    case 4:
        document.write("Thursday: 10:am -7:00pm");
        break;

    case 5:
        document.write("Friday: 10:am -7:00pm");
        break;

    case 6:
        document.write("Saturday: 10:am -7:00pm");
        break;

    case 0:
        document.write("Sunday: 10:am -7:00pm");
        break;
}

var todaydate = new Date()
var curmonth = todaydate.getMonth() + 1 //get current month (1-12)
var curyear = todaydate.getFullYear() //get current year

document.write(buildCal(curmonth, curyear, "main", "month", "daysofweek", "days", 1));

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//* Down below shows the coding of the functions that will be displayed and can be used within this Home pahe is slider. *//

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
