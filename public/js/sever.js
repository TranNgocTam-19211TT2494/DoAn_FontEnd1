const btndesign = document.querySelector('.design-btn');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }



function getImage() {
    for (let index = 0; index < btndesign; index++) {

        btndesign[index].style.left = (getRandomIntInclusive(0,50) + 'px');
        
    }
    timeout = setTimeout(getImage,2000);
}
let timeout = setTimeout(getImage,2000);



// //khai báo biến slideIndex đại diện cho slide hiện tại
//   var slideIndex;
//   // KHai bào hàm hiển thị slide
//   function showSlides() {
//       var i;
//       var slides = document.getElementsByClassName("Firstly");
//       var dots = document.getElementsByClassName("dot");
//       for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none";  
//       }
//       for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "");
//       }
//  
//       slides[slideIndex].style.display = "block";  
//       dots[slideIndex].className += " active";
//       //chuyển đến slide tiếp theo
//       slideIndex++;
//       //nếu đang ở slide cuối cùng thì chuyển về slide đầu
//       if (slideIndex > slides.length - 1) {
//         slideIndex = 0
//       }    
//       //tự động chuyển đổi slide sau 5s
//       setTimeout(showSlides, 5000);
//   }
//   //mặc định hiển thị slide đầu tiên 
//   showSlides(slideIndex = 0);
//  
//  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }