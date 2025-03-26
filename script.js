document.querySelector("#mobile").addEventListener("click", function () {
    document.querySelector("#navbar").classList.toggle("active");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector("#mobile");
    const navbar = document.querySelector("#navbar");
    const closeBtn = document.querySelector("#close");
  
    // Open Navbar when clicking the mobile menu icon
    mobileMenu.addEventListener("click", function () {
      navbar.classList.add("active");
    });
  
    // Close Navbar when clicking the close button
    closeBtn.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
  