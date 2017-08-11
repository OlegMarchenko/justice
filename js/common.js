$(document).ready(function () {

   $('#my-menu').mmenu({
       extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
       navbar: {
           title: 'Justice'
       }
   });

   $('.slider').slick({
       dots: true,
       arrows: true
   });

    $('.slider-brands').slick({
        slidesToShow: 6
    });

    $('.grid').masonry({
        // options
        columnWidth: '.grid-item',
        itemSelector: '.grid-item'
    });

});
