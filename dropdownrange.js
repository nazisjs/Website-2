document.addEventListener("DOMContentLoaded",()=>{
    const dropdownIcon = document.querySelectorAll('.fa-caret-down'); 
    const dropdownMenu = document.querySelectorAll('.items'); // icon and ul classes are displayed

    dropdownIcon.forEach((icon,index) => { // 2 values are taken here
        icon.addEventListener("click",() =>{
            const menu=dropdownMenu[index]; // take a menu which matches with previous icon
            if(menu){
                menu.classList.toggle("active");//opening and closing the menu
            }
        })
    });
});
