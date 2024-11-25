const open = document.getElementById("openpopup"); //getting id of openpopup
const close = document.getElementById("closepopup");    //getting id of closepopup
const popup = document.getElementById("popup"); //getting id of popup container

open.addEventListener("click", (e) => { // using argument e to show the popup
    e.preventDefault();
    popup.classList.add("active");  // displaying active class to open the popup
});

close.addEventListener("click", () => {
    popup.classList.remove("active");   // removing class to close the popup
});