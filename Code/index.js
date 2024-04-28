let scrollContanier=document.querySelector(".Slider");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContanier.addEventListener("touch",(evt)=>{
    evt.preventDefault();
    scrollContanier.scrollLeft += evt.deltaY;
    scrollContanier.style.scrollBehaviour="auto";
});


nextBtn.addEventListener("click",()=>{
    scrollContanier.style.scrollBehaviour="smooth";
    scrollContanier.scrollLeft += 950;

});

backBtn.addEventListener("click",()=>{
    scrollContanier.style.scrollBehaviour="smooth";
    scrollContanier.scrollLeft -= 950;
})

