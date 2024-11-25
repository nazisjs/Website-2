const container = document.getElementById('container'); // getting the id of container 
const registerBtn = document.getElementById('register');//getting the id of sign up button
const loginbtn = document.getElementById('login');//getting the id of sign in button
registerBtn.addEventListener('click',()=>{
    container.classList.add('active'); // moving the sign up form
});
loginbtn.addEventListener('click',()=>{
    container.classList.remove('active'); // going back the sign up form
})