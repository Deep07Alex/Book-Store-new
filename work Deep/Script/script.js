// header
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const text = link.textContent.trim();


    if (text === "Home") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
      });
    } 


    else if (text === "Product Categories") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "productcatagory.html";
      });
    } 


    else if (text === "About Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "Aboutus.html";
      });
    }

    else if (text === "Contact Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "contactinformation.html";
      });
    }
    
  });
});


// Footer
document.addEventListener("DOMContentLoaded", function () {
  const footerLinks = document.querySelectorAll(".footer-section ul li a");

  footerLinks.forEach(link => {
    const text = link.textContent.trim();

    if (text === "About Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "Aboutus.html";
      });
    } 

    else if (text === "Contact Us") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "contactinformation.html";
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

// .......Main.......

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".view-btn");

  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "sale.html";
    });
  }
});


// Pagination
document.addEventListener("DOMContentLoaded", function () {
  const pagination = document.querySelector(".pagination");
  const prevBtn = pagination.querySelector(".prev");
  const nextBtn = pagination.querySelector(".next");
  const dots = pagination.querySelector(".dots");
  const totalPages = 42;
  let currentPage = 1;

  // Render pagination numbers dynamically
  function renderPagination() {
    // Remove all existing number links except arrows and dots
    pagination.querySelectorAll(".page").forEach(p => p.remove());

    // Insert new number elements before dots
    const beforeDots = dots;
    const pagesToShow = getPagesToShow(currentPage, totalPages);

    pagesToShow.forEach(pageNum => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = pageNum;
      a.classList.add("page");
      if (pageNum === currentPage) a.classList.add("active");
      beforeDots.before(a);
    });

    // Show or hide dots
    dots.style.display = pagesToShow.includes(totalPages) ? "none" : "inline";

    // Disable prev/next when at limits
    prevBtn.classList.toggle("disabled", currentPage === 1);
    nextBtn.classList.toggle("disabled", currentPage === totalPages);
  }

  // Decide which pages to show
  function getPagesToShow(current, total) {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

    if (current <= 3) return [1, 2, 3];
    if (current >= total - 2) return [total - 2, total - 1, total];
    return [current - 1, current, current + 1];
  }

  // Handle clicks
  pagination.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.classList.contains("page")) {
      currentPage = parseInt(e.target.textContent);
      renderPagination();
    }

    if (e.target.classList.contains("next") && currentPage < totalPages) {
      currentPage++;
      renderPagination();
    }

    if (e.target.classList.contains("prev") && currentPage > 1) {
      currentPage--;
      renderPagination();
    }
  });

  renderPagination();
});
