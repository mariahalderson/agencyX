//navigation vars
var hamburger = document.querySelector("#hamburger"),
    mainnav = document.querySelector("#navigation");

//about us vars
var links = Array.from(document.querySelectorAll(".aboutNames")),
    aboutBlurbs = Array.from(document.querySelectorAll(".aboutCopy")),
    tabletAbout = document.querySelector("#aboutText"),
    tabletimg = document.querySelector("#tabletImg");

//lightbox vars
var lightbox = document.querySelector("#lightbox"),
    pictures = Array.from(document.querySelectorAll(".pastproject img")),
    lbPicture = document.querySelector("#lbImg img"),
    lbClose = document.querySelector("#lbClose");

pictures.forEach(picture=>picture.addEventListener('click', function(e){
    //get image name from thumbnail
    var imgpath = e.target.src.split("/");
    var imgname = imgpath[imgpath.length-1];
    console.log(imgname);
    console.log(lbPicture.src);
    
    lbPicture.src = "images/" + imgname;

    if(lightbox.style.display = "none"){
        lightbox.style.display = "block";
    }
}));




//open hamburger menu
function openmenu(){
   mainnav.classList.toggle("open");
   hamburger.classList.toggle("change");
}


function changeimg(e){
//change img
    setTimeout(function(){
        tabletImg.src = "images/" + e.target.dataset.name + "-med.png";
        tabletImg.classList.remove("fade");
        tabletAbout.classList.remove("fade");
    }, 200);
}

 
function changeblurb(index){
//change blurb
var text = aboutBlurbs[index].innerHTML;
    tabletAbout.innerHTML = text;
    tabletAbout.style.transform = "translateX(0px)";
}


//edit about me area
function aboutchange(e){
    //set up about area for change
    links.forEach(link=>link.style.color = "#555");
    e.target.style.color = "#999";
    tabletImg.classList.add("fade");
    tabletAbout.classList.add("fade");

    //link info (index, get info)
    var clicked = links.indexOf(e.target);
    

    //move links
    var namelink = document.querySelector("#names");
    namelink.classList.add("opentext");

    changeimg(e);
    changeblurb(clicked);
}

    


hamburger.addEventListener('click', openmenu);

links.forEach(link=>link.addEventListener('click', function(e){
    e.preventDefault();
     aboutchange(e);
}));

lbClose.addEventListener('click', function(){
    if(lightbox.style.display = "block"){
        lightbox.style.display = "none";
    }
});