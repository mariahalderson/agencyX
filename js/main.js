//navigation vars
var hamburger = document.querySelector("#hamburger"),
    mainnav = document.querySelector("#navigation");

//about us vars
var //sm-cait = document.querySelector("#cait img"),
    //sm-mar = document.querySelector("#mariah img"),
    mdCait = "images/caitlin-med.png",
    mdMar = "images/mariah-med.png",
    links = Array.from(document.querySelectorAll(".aboutNames")),
    aboutBlurbs = Array.from(document.querySelectorAll(".aboutCopy")),
    tabletAbout = document.querySelector("#aboutText"),
    tabletimg = document.querySelector("#tabletImg");



//open hamburger menu
function openmenu(){
   mainnav.classList.toggle("open");
   hamburger.classList.toggle("change");
}


//change about photo and text
function aboutimg(e){

    //link info
    var clicked = links.indexOf(e.target);
    var text = aboutBlurbs[clicked].innerHTML;

    //change img
    tabletImg.src = "images/" + e.target.dataset.name + "-med.png";
 
    //change blurb
    tabletAbout.innerHTML = text;
    
}

hamburger.addEventListener('click', openmenu);
links.forEach(link=>link.addEventListener('click', function(e){
    e.preventDefault();
     aboutimg(e)
}));