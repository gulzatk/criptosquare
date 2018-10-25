

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
    columns = Math.floor(sqRoot);
    rows = (Math.floor(sqRoot)) + 1;
  }

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    $('#output').append(newAlpha[j + i*rows]);
  }
  $('#output').append('<br>');
}



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
