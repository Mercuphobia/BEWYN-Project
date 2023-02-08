

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
var header = document.querySelector(".header");
function scrollFunction() {
  // menu thay đổi khi kéo xuống
  if (window.pageYOffset > 100) {
    header.style.padding = '0';
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    header.style.padding = '20px';
    header.style.backgroundColor = 'unset';
  }

  // nút go to top xuất hiện khi kéo màn hình xuống
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "flex";
    // header.classList.add(".header-scrolled");
    // header.classList.remove(".header-original");
  } else {
    document.getElementById("myBtn").style.display = "none";
    // header.classList.remove(".header-scrolled");
    // header.classList.add(".header-original");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var iconToggle = document.getElementById('icon-toggle');
var navbar = document.getElementById('navbar');

function myFunction(){
  if (document.getElementById("navbar").style.display === 'none') {
    document.getElementById("navbar").style.display = 'block';
  } else {
    document.getElementById("navbar").style.display = 'none';
  }

  console.log(x.style);
}

const text = document.querySelector(".text-sec");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Photographer";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Designer";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Developer";
  }, 9000);
  console.log(text)
}

textLoad();