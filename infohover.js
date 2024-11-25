function changeImage(x,image){ // taking two arguments inside of function
    if(x==1){        // changes the first image to the second on hover
      image.src='images/Almaty Lake Bao.png';
    }
    else if(x==2){  // changes the second image to the first on hover
      image.src="images/Bao1.png";  
    }
    else if(x==3){  // changes the third image to the forth on hover
        image.src='images/AlmatyLake2.png';
    }
    else if(x==4){    // changes the forth image to the third on hover
        image.src='images/Bao2.png';
    }
    else if(x==5){   // changes the fifth image to the sixth on hover
        image.src='images/AlmatyLake3.png';
    }
    else if(x==6){     // changes the sixth image to the fifth on hover
        image.src='images/Bao3.png';
    }
}