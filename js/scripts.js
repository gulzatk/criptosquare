

function cryptosquare(sentence) {

  var newAlpha = sentence.replace(/[^a-zA-Z]/gi, '')
  newAlpha = newAlpha.toLowerCase();
  //  newAlpha = newAlpha.split(",");

  var totalChars = newAlpha.length;
  var sqRoot = Math.sqrt(totalChars);
  var columns = [];
  var rows = [];

  if (sqRoot%1 === 0) {
    columns = sqRoot;
    rows = sqRoot;
  } else {
    columns = Math.floor(sqRoot) + 1;
    rows = Math.floor(totalChars / columns);
    if (totalChars % columns !== 0) {
      rows++;
    }
  }
  var table =[];
  for (var i = 0; i < rows; i++) {
    table[i] = [];
    for (var j = 0; j < columns; j++) {
      if (i * columns + j < totalChars){
        table[i][j] = newAlpha[i * columns + j];
      }
      else {
        table[i][j] = '';
      }
    }
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      $('#output').append(table[i][j] + " ");
    }
    $('#output').append('<br>');
  }
  $('#output').append('<br>');

  result = ''
  word = ''
  for (var j = 0; j < columns; j++){
    for (var i = 0; i < rows; i++){
      if (table[i][j] !== ''){
        word = word + table[i][j];
        if (word.length === 5){
          result = result + word + ' ';
          word = '';
        }
      }
    }
  }

  result = result + word;

  $('#output').append(result + '<br>');
  return newAlpha;
}


// // User Interface
$(document).ready(function(){
  $("form#cryptosquare").submit(function(event){
    event.preventDefault();
    var sentence = $("input#userSentence").val();

    cryptosquare(sentence);
    // $("#output").text(cryptosquare(sentence));
  });
});
