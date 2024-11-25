document.addEventListener('DOMContentLoaded',()=>{
    const productfield = document.querySelectorAll('.product-field'); // getting the class from product-field
    const total = document.getElementById('total');    // getting the id from cart-container
    const clear = document.getElementById('clear');   // getting the id from cart-container
    const icon = document.getElementById('cart2');   // getting the id from icon from cart-container
    const items = document.getElementById('items'); // getting the id from cart-container
    let cart=[];

    const updateCart = () =>{ // item price count setting to the zero
        items.innerHTML=''; // cleans the old information before adding a new item so that cart would display the actual condition
        let carttotal = 0; // set the count to the zero 

        cart.forEach(item=>{
            carttotal+=item.price; // item price count whenever items will be added

            let containerInfo=document.createElement('containerInfo'); // creates a new div using push in the product field
            containerInfo.innerHTML=`
                    <div class="info-container">
                    <div class="infopic">
                    <img src="images/${item.image}" alt="${item.name}" class="pictures" id="pics" style="width:120px;height:120px;">
                    </div>
                    <div class="cartdetails">
                    <div class="information">
                        ${item.name}
                    </div>
                    <div class="information">
                        ₸ ${item.price.toLocaleString()}
                    </div>
                    <div class="information">
                        ${item.description.toLocaleString()}
                    </div>
                    <button class="remove" data-name="${item.name}"><i class="fa-solid fa-trash"></i></</button>
                </div> 
                </div>
                `;
                items.appendChild(containerInfo);       // puts together all div elements
        });

        total.textContent = `₸ ${carttotal.toLocaleString()}`;      // counts the price of items together
    };

    productfield.forEach(field => {                                             // retrieving information from container elements without it ,the actions would be longer
        const addButton = field.querySelector('.add'); 
        addButton.addEventListener('click', () => {
            const name = field.querySelector('h3').textContent;              // retrieves the heading only from product field
            const description = field.querySelector('p').textContent;       // retrieves the paragraph only from product field
            const price = parseFloat(field.querySelector('.price').textContent.replace(/[^0-9.]/g, ''));         // retrieves the price only from product field
            const image = field.querySelector('img').src.split('/').pop();              // retrieves the image only from product field
            

            cart.push({ name,description, price, image });           // pushes container's elements to the card
            updateCart();
            
            const quantity = document.querySelector('.quantity');       // counts how many items have added in cart-container
            quantity.textContent = cart.length;
                icon = [];                                              // keeps ,deletes or adds the information of product inside of the cart
        });
    });

    clear.addEventListener('click', () => { // clears the cart in the whole
        cart = [];
        updateCart();
    });

    items.addEventListener('click', (e) => {
        const button=e.target.closest('.remove'); 
        if (button) {
            const itemName = button.dataset.name;
            cart = cart.filter(item => item.name !== itemName); // removes only the specific item not the whole items
            updateCart();
        }
    });

    icon.addEventListener('click', () => { // controls the icon whenever it will be clicked or not
        const cartContainer = document.querySelector('.cart-container1');
        cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    });
});























