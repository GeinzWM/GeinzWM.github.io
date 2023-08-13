document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list-deporte'); 
    const btnSlideLeft = document.getElementById('btn-slide-left-deport'); 
  
    let scrollAmount = 0; 
    const scrollStep = 200; 
  
    btnSlideLeft.addEventListener('click', function() {
      scrollAmount += scrollStep; 
  
      productList.style.transform = `translateX(-${scrollAmount}px)`;
  
      if (scrollAmount >= productList.scrollWidth - productList.clientWidth) {
        scrollAmount = 0; 
        productList.style.transform = 'translateX(0)'; 
      }
    });

    const btnlrigth2 = document.getElementById("btnlrigth2");

  let scrollAmountLefts2 = -0; 
  const scrollStepLefts2 = -200; 

  btnlrigth2.addEventListener('click', function() {
    scrollAmountLefts2 -= scrollStepLefts2; 


    productList.style.transform = `translateX(${scrollAmountLefts2}px)`;

 
    if (scrollAmountLefts2 <= productList.scrollWidth - productList.clientWidth) {
      scrollAmountLefts2 = 0; 
      productList.style.transform = 'translateX(0)'; 
    }
  });

 
  btnSlideLeft.addEventListener('click', function() {
    if(productList.scrollLeft === 0){
      btnlrigth2.style.opacity=1
    }
   setTimeout(() => {
    btnlrigth2.style.opacity=0
   }, 10000);
  });

  });
  