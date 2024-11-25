document.addEventListener("DOMContentLoaded",()=>{
    const filterButtons = document.querySelectorAll('.items li'); // ul item class choosen
    const filterablecards = document.querySelectorAll('.product-field'); // product-field class choosen
    
    
    const filterCards =(e) =>{
        document.querySelectorAll('.items .active').forEach(button=>button.classList.remove("active")); // this constant is related to the active class
        e.target.classList.add("active"); // active class is added 
        
    
        const filterValue = e.target.getAttribute("data-category"); //filtration
    
        filterablecards.forEach((card) => { // new variable-card which manages the product-field containers
            if (filterValue === 'ALL' || card.getAttribute("data-category")===filterValue){
               card.classList.remove("hide");
               card.classList.add("active"); // filtering by data names
            }
            else{
                card.classList.add("hide");
                card.classList.remove("active");
            }
    
            });
    };
    filterButtons.forEach(button => button.addEventListener("click",filterCards)); // manipulating with buttons
    });