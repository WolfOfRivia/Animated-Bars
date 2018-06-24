// Animate skill bars 
var skills = $('#skills');

$(window).on('scroll', function() {
  var winTop = $(window).scrollTop(),
      winHght = $(window).height(),
      skillTop = skills.offset().top;
  if (winTop + winHght > skillTop) {
    $('.sk-meter-bg').each(function() {
      $(this).find('.sk-meter').animate({
        width: $(this).attr('data-percent')
      }, 3000);
    });
  }
});
