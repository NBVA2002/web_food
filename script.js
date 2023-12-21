// var header = document.querySelector(".header-wrapper");

// window.addEventListener('DOMContentLoaded', (event) => {
//     // Lấy phần tử thanh cuộn
//     var scrollBar = document.documentElement;

//     // Thêm sự kiện scroll để theo dõi cuộn
//     window.addEventListener('scroll', function () {
//         // Lấy giá trị của thanh cuộn và in ra console
//         var scrollTopValue = scrollBar.scrollTop;
//         if(scrollTopValue > 500) {
//             console.log("Giá trị thanh cuộn: " + scrollTopValue);
//             header.classList.add("header-wrapper-bg")
//             header.style.height="80px";
//         } else {
//             header.classList.remove("header-wrapper-bg")
//             header.style.height="120px";
//         }
//     });
// });

// const btnNav = document.getElementById('nav-main-header');
// const modal = document.querySelector('.modal');

// var showNav = false;

// btnNav.addEventListener('click', function() {
//     showNav = !showNav
//     if(showNav){
//         modal.style.display = 'block';
//     } else {
//         modal.style.display = 'none';
//     }
// });