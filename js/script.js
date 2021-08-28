$(function () {
  // Fixed HEADER
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let toUp = $('.toUp');

  checkScroll(scrollPos, introH);

  $(window).on('scroll', function () {
    introH = intro.innerHeight();
    scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos >= introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }

    if (scrollPos >= 2000) {
      toUp.addClass('active');
    } else {
      toUp.removeClass('active');
    }
  }

  // Smooth scroll
  let navLinks = $('.nav__link');
  let sidebarMenuLinks = $('.sidebar__menu__link');

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let dataEl = $(this).data('scroll');
    let dataOffset = $(dataEl).offset().top;

    // Closing the sidebar
    sidebar.removeClass('active');

    // Adding active class to navLink
    navLinks.removeClass('active');
    $(this).addClass('active');

    // Adding active class to SidebarMenuLinks
    sidebarMenuLinks.removeClass('active');
    $(this).addClass('active');

    $('html, body').animate(
      {
        scrollTop: dataOffset,
      },
      700
    );
  });

  // navbar Toggle

  let sidebar = $('#sidebar');
  let sidebarClose = $('.sidebar__close__btn');
  let sidebarOpen = $('#navbarToggle');

  // Open sidebar
  sidebarOpen.on('click', function (event) {
    event.preventDefault();

    sidebar.addClass('active');
  });

  // Close sidebar
  sidebarClose.on('click', function (event) {
    event.preventDefault();

    sidebar.removeClass('active');
  });

  // BookTable modal

  // Open modal
  let modaBookTable = $('#modal__bookTable');
  let bookTableModalOpen = $('#bookTable__modal__open');
  let modalContent = $('#modal__bookTable__content');

  // bookTableModalOpen.forEach((bookBtn) => {
  //   bookBtn.on('click', function () {
  //     modalContent.forEach((modalCon) => {
  //       modalCon.addClass('active');
  //     });
  //     console.log('djd');
  //   });
  // });

  bookTableModalOpen.on('click', function () {
    modaBookTable.addClass('active');
    modalContent.addClass('active');
  });

  bookTableModalOpen.on('click', function () {
    modaBookTable.addClass('active');
    modalContent.addClass('active');
  });

  // Close modal

  let closeBookTableMdl = $('#modal__bookTable__close');

  closeBookTableMdl.on('click', function () {
    modaBookTable.removeClass('active');
    modalContent.removeClass('active');
  });

  // BookTable modal  end

  // Succes modal beginning
  let bookTableSubmitBtn = $('.bookTable__modal__submit');
  let successClose = $('.success__close__wrapper');
  let successContent = $('.success__content');
  let successModal = $('.success__modal');

  // open
  bookTableSubmitBtn.on('click', function (event) {
    event.preventDefault();
    successModal.addClass('active');
    successContent.addClass('active');
  });

  // Close
  successClose.on('click', function (event) {
    event.preventDefault();

    successModal.removeClass('active');
    successContent.removeClass('active');
    modaBookTable.removeClass('active');
    modalContent.removeClass('active');
  });

  // Aos
  AOS.init();

  // Counter
  $('.counter').counterUp({
    delay: 15,
    time: 2000,
  });
});
