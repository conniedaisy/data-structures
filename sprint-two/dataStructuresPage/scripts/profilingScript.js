$(document).ready(function() {

  var $main = $('main');
  $main.html('');

  $('#submit-button').on('click', function(e) {
    //prevent page from refreshing
    e.preventDefault();
    var $section = $('<section class="data-vis-main"></section>');
    var $node = $('<div class="node"></div>');
    var $nodeValue = $('<p class="node-value"></p>');
    console.log('Hello World');
    //save input value as a variable
    var inputNum = $('#num-input').val();

    //add new node
    $nodeValue.text(inputNum);
    $node.append($nodeValue);
    $main.append($node);



  });


});