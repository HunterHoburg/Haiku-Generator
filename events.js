$(document).ready(function() {
//setting a variable for where the poems go, yo
var $poem;
var $place = $('.poemPlace')
var $slider = $('.category');
var dragCheck = false;
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
// var $treeButton = $('#tree');
$('.card').on('mouseup', function() {
  if (dragCheck == false) {
    if ($poem) {

      var that = this;

      $poem.fadeOut(2000, function(){

        $poem = $(testPoem1(themes[that.id]));
        $poem.addClass('beautifulPoem').hide(1000).fadeIn(2000)
        $place.append($poem)});
    } else {
      $poem = $(testPoem1(themes[this.id]));
      $poem.addClass('beautifulPoem').hide(1000).fadeIn(2000)
      $place.append($poem)
    }
  }
    //
    // $poem = $(testPoem1(themes[this.id]));
    // $poem.addClass('beautifulPoem').hide(1000).fadeIn(2000)
    // $place.append($poem)
    // // $place.fadeIn();\
  });

  // $('.card').click(function() {
  // $poem.fadeOut(2000)
  // var $place = $('.poemPlace')
  //   var $poem2 = $(testPoem1(themes[this.id]));
  //   $poem2.addClass('beautifulPoem').hide(1000).fadeIn(2000)
  //   $place.append($poem2);
  // })











});

// $('.card').click(function() {
//     // var $topic = (this.id)
//     // console.log(this.id);
//     $place.fadeOut('5000')});
