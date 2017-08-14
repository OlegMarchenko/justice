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
   if ($('.slider-brands').length) {
       $('.slider-brands').slick({
           slidesToShow: 6
       });
   }

    if ($('.grid').length) {
        $('.grid').masonry({
            // options
            columnWidth: '.grid-item',
            itemSelector: '.grid-item'
        });
    }
});
