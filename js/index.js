function menuDropDown(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year_view").innerHTML = year+"-"+parseFloat(year+1);


let slideIndex = 1;
showSlides(slideIndex)

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide_cards");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  
}
function showSlides() {
  
  let i;
  let slides = document.getElementsByClassName("slide_cards");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  slideIndex++;
  // Change image every 2 seconds
    setTimeout(showSlides, 10000);
  
}

// auto count numbers of feedbacks or experience candidates
let valueDisplays=document.querySelectorAll(".num");
let interval=1000;

valueDisplays.forEach(value=>{
  let startValue=0;
  let endValue=parseInt(value.getAttribute('data-val'));
 let duration=Math.floor(interval/endValue)

let counter =setInterval(function(){
  startValue+=1;
  value.textContent=startValue+"+";
  if (startValue==endValue) {
    clearInterval(counter)
  }
},duration)

})


 var idName=document.getElementsByClassName('main_body')
 homeHandler('home')
function homeHandler(value){
  for (let index = 0; index < idName.length; index++) {
    if(value===idName[index].getAttribute('id')){
      idName[index].style.display="flex";
     
    }
    else{
      idName[index].style.display="none"
    }
    
  }
  // header hide after selected
document.getElementById('menuBtn').classList.remove('change');
  document.getElementById("myDropdown").classList.remove("show");
}
