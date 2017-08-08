$(function () {

   $('#my-menu').mmenu({
       extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
       navbar: {
           title: 'Justice'
       }
   });

   $('.slider').slick({
       dots: true
   })

});
