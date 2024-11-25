let scrollContainer=document.querySelector(".gallery");  // query selector for gallery class
let backBtn = document.getElementById("backBtn"); // searching the id for back button
let nextBtn = document.getElementById("nextBtn"); // searching the id for next button


nextBtn.addEventListener("click",()=>{ // applying add event listener function
    scrollContainer.style.scrollBehavior = "smooth"; // smooth scrolling
    scrollContainer.scrollLeft += 900;  // if image scrolls left it will be manipulated by the pixel 900
});
backBtn.addEventListener("click",()=>{  // applying add event listener function
    scrollContainer.style.scrollBehavior = "smooth"; // smooth scrolling
    scrollContainer.scrollLeft -= 900;  // if image scrolls left it will be manipulated by the pixel 900
});
