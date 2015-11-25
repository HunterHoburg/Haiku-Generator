$(document).ready(function() {
//setting a variable for where the poems go, yo
var enableMouseUp = true;
var $poem;
var $place = $('.poemPlace')
var $slider = $('.category');
var dragCheck = false;
var randoFunc = function(arr){ return arr[Math.round(Math.random()*(arr.length-1))]};
//making the slider draggable
$('.category').draggable({
  axis: 'x',
  revert: true,
  drag: function() {
    dragCheck = true;
  },
  stop: function() {
    dragCheck = false;
  }
});
//Generating and appending the poem
$('.card').on('mouseup', function() {
  if (enableMouseUp) {
  if (dragCheck == false) {
    if ($poem) {
      enableMouseUp = false;
      var that = this;
      $poem.fadeOut(800).dequeue().toggle('slide', 1500, function(){
        $poem = $(randoFunc(funcArr)(themes[that.id]));
        $poem.addClass('beautifulPoem').fadeIn(2000, function() {enableMouseUp = true});
        $place.append($poem);
      });
    } else {
      enableMouseUp = false;
      $poem = $(randoFunc(funcArr)(themes[this.id]));
      $poem.addClass('beautifulPoem').hide(1000).fadeIn(1000, function() {
        enableMouseUp = true});
      $place.append($poem)
    }
  }
}
});
//Highlighting theme chosen

$('.card').click(function() {
  if (!dragCheck) {
  $('.card').removeClass('highlight');
  $(this).addClass('highlight');
}
});


//showing the panels in the nav sidebar
$('.uk-panel').hide(function() {
  $('#about').click(function() {
    $('.about').show(500).siblings().hide(500)})
  $('#why').click(function() {
    $('.why').show(500).siblings().hide(500)})
  $('#next').click(function() {
    $('.next').show(500).siblings().hide(500)
})
});
// $('#why').click(function() {
//   if ($('.about')) {
//   $('.about').hide(500, function() {
//   $('.why').fadeIn(1000)})
// } else if ($('.next')) {
//   $('.next').hide(500, function() {
//   $('.why').fadeIn(1000)})
// }});
// $('#next').click(function() {
//   if ($('.about')) {
//   $('.about').hide(500, function() {
//   $('.next').fadeIn(1000)})
// } else if ($('.why')) {
//   $('.why').hide(500, function() {
//   $('.next').fadeIn(1000)})
// }});

// $('.uk-panel').hide(function() {
// $('#about').click(function() {
//   if ($('.why')) {
//   $('.why').hide(500, function() {
//   $('.about').fadeIn(1000)})
// } else if ($('.next')) {
//   $('.next').hide(500, function() {
//   $('.about').fadeIn(1000)})
// }});
// $('#why').click(function() {
//   if ($('.about')) {
//   $('.about').hide(500, function() {
//   $('.why').fadeIn(1000)})
// } else if ($('.next')) {
//   $('.next').hide(500, function() {
//   $('.why').fadeIn(1000)})
// }});
// $('#next').click(function() {
//   if ($('.about')) {
//   $('.about').hide(500, function() {
//   $('.next').fadeIn(1000)})
// } else if ($('.why')) {
//   $('.why').hide(500, function() {
//   $('.next').fadeIn(1000)})
// }});
// });
});
