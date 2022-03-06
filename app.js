
// ACCORDION
document.querySelectorAll('.accordion_item_trigger').forEach((item) =>
  item.addEventListener('click',() => {
      const parent = item.parentNode;

      if (parent.classList.contains('accordion_item--active')) {
        parent.classList.remove('accordion_item--active');
      } else {
        document
              .querySelectorAll('.accordion_item')
              .forEach((child) => child.classList.remove('accordion_item--active'))
        
        parent.classList.add('accordion_item--active');
      }
  })
)


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  margin:10,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      },
      1400:{
        items:4
    }
  }
})