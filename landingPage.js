
function menuShow(){
  console.log("oi")
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
  }else{
    menuMobile.classList.add('open');
  }
  
}
