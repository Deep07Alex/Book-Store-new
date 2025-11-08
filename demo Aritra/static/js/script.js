document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const text = link.textContent.trim();


    if (text === "Home") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/";
      });
    } 


    else if (text === "Product Categories") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/productcatagory/";
      });
    } 


    else if (text === "About Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/aboutus/";
      });
    }

    else if (text === "Contact Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/contactinformation/";
      });
    }
    
  });
});

//Footer
document.addEventListener("DOMContentLoaded", function () {
  const footerLinks = document.querySelectorAll(".footer-section ul li a");

  footerLinks.forEach(link => {
    const text = link.textContent.trim();

    if (text === "About Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/aboutus/";
      });
    } 

    else if (text === "Contact Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/contactinformation/";
      });
    } 

    else if (text === "Bulk Purchase") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "";
      });
    } 

    else if (text === "Return & Replacement") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "";
      });
    } 

    else if (text === "Privacy Policy") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "";
      });
    } 
  });
});