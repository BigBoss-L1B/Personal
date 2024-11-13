/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }

  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  /* const selectTyped = document.querySelector('.typed');
   if (selectTyped) {
     let typed_strings = selectTyped.getAttribute('data-typed-items');
     typed_strings = typed_strings.split(',');
     new Typed('.typed', {
       strings: typed_strings,
       loop: true,
       typeSpeed: 100,
       backSpeed: 50,
       backDelay: 2000
     });
   }
 */
  const selectTypedElements = document.querySelectorAll('.typed');
  if (selectTypedElements) {
    selectTypedElements.forEach((element) => {
      let typed_strings = element.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed(element, {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


    document.addEventListener('DOMContentLoaded', function () {
    const homeworkData = [
      {name: 'EmailList', link: 'https://firstdemo-ex01.azurewebsites.net/'},
      {name: 'Survey', link: 'https://emaillist-ex02.azurewebsites.net/'},
      {name: 'Bài tập 5.1', link: 'https://emaillist-ex5-1.azurewebsites.net/'},
      {name: 'Bài tập 5.2', link: 'https://emaillistex5-2.azurewebsites.net/'},
      {name: 'Bài tập 6.1', link: 'https://baitap6-1.azurewebsites.net/'},
      {name: 'Bài tập 6.2', link: 'https://baitap6-2.azurewebsites.net/'},
      {name: 'Bài tập 8.1', link: 'https://baitap8-1.azurewebsites.net/'},
      {name: 'Bài tập 9.1', link: 'https://baitap9-1.azurewebsites.net/'},
      {name: 'Bài tập C7', link: 'https://baitapc-7.azurewebsites.net/'},
      {name: 'Bài tập C12', link: 'https://baitapc-12.azurewebsites.net/'},
      {name: 'Bài tập ConnectionPool', link: 'https://btconnectionpool.azurewebsites.net/'},
      {name: 'Bài tập Murach_JPA', link: 'https://murach-jpa.azurewebsites.net/'},
      {name: 'Bài tập JavaMail', link: 'https://java-mail.azurewebsites.net/'}
    ];

    const itemsPerPage = 5;
    let currentPage = 1;

    function displayTablePage(page) {
    const tableBody = document.querySelector('#homework-table tbody');
    tableBody.innerHTML = '';

    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const pageItems = homeworkData.slice(startIdx, endIdx);

    pageItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
                <td class="homework-list text-center-vertical">${item.name}</td>
                <td class="w-auto text-center-vertical"><a href="${item.link}" class="btn  btn-success mt-2 fw-bold">Xem bài tập</a></td>
            `;
    tableBody.appendChild(row);
  });
  }

    function setupPaginationButtons() {
    const paginationContainer = document.querySelector('#pagination-buttons');
    paginationContainer.innerHTML = '';

    const numPages = Math.ceil(homeworkData.length / itemsPerPage);
    for (let i = 1; i <= numPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('btn', 'mx-1', 'custom-light-gray-button'); // Sử dụng màu trắng ngả xám tùy chỉnh
    button.addEventListener('click', function () {
    currentPage = i;
    displayTablePage(currentPage);
  });
    paginationContainer.appendChild(button);
  }
  }

    // Khởi tạo bảng và nút phân trang
    displayTablePage(currentPage);
    setupPaginationButtons();
  });
})();