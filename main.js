/* For See more and See less Product */

let moreProductBtn = document.querySelector(".more-product-btn");

let btnClickCount = 1;
moreProductBtn.onclick = () =>{
  let productCardContainer2 = document.querySelector(".product-card-container2");
  let lessProductBtn = document.querySelector(".less-product-btn");
  productCardContainer2.style.display = "grid";
  btnClickCount++;
  
  if(btnClickCount >= 2){
    moreProductBtn.style.display = "none";
    lessProductBtn.style.display = "flex";
  }
  
  lessProductBtn.onclick = () =>{
    lessProductBtn.style.display = "none";
    moreProductBtn.style.display = "flex";
    productCardContainer2.style.display = "none";
  }
  
}

/* For Show Subscription Added */
let subsForm = document.querySelector(".subs-inp-btn");

subsForm.onsubmit = () =>{
  let subsToast = document.querySelector(".subs-toast");
  subsToast.style.display = "inline-block";
  
}
