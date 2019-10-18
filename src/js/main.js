$(document).ready(function () {
 $('.burger').on('click', function () {
  event.preventDefault();
  $(this).toggleClass('burger-active');
  $('.mobile-menu').toggleClass('mobile-menu-active');
 });
 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrows__left'),
  nextArrow: $('.arrows__right')
 });
 var scrolldown = $('.navbar');
 $(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
   scrolldown.addClass('navbar_active')
  } else {
   scrolldown.removeClass('navbar_active')
  }
 });
 var modal = $('.modal');
 var modalClose = $('#modal-close');
 var modalThank = $('#overlay-thank');
 var closeThank = $('#close-thank');
 $('.modal-window').on('click', function () {
  event.preventDefault();
  modal.addClass('modal__active');
  modalClose.on('click', function () {
   modal.removeClass('modal__active');
  });
 });
 $('#modal-form').validate({
  errorClass: "invalid",
  errorElement: "label",
  rules: {
   username: {
    required: true
   },
   userphone: {
    required: true
   }
  },
  messages: {
   userphone: {
    required: "Введите номер"
   },
   username: {
    required: "Введите имя"
   }
  },
  submitHandler: function () {
     modalThank.addClass('modal-thank_active');
     closeThank.on('click', function () {
      modalThank.removeClass('modal-thank_active');
     $('#modal-form').trigger("reset");
     });
    },
 });
 $('.phone').mask('+7 (999) 999-99-99');
 $('a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({
   scrollTop: $(target).offset().top
  }, 500);
 });
 $(".accordion dl").on('click', function () {
  if ($(this).find(".accordion-plus").hasClass('accordion-plus-active')) {
   $(this).find(".accordion-plus").removeClass('accordion-plus-active');
   $(this).find("dd").slideUp();
  } else {
   $(".accordion dd").not(this).slideUp();
   $(".accordion").find(".accordion-plus").removeClass('accordion-plus-active');
   $(this).find(".accordion-plus").toggleClass('accordion-plus-active');
   $(this).find("dd").not(":visible").slideDown();
  }
 });
});