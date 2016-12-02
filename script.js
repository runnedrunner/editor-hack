var editor = $(parent.document.body)
var topbar = $(parent.parent.document.body).find("#topbar")

var allDivsInTheEditor = editor.find("div")
function shake() {
  var div = document.getElementById('yourElementID');
  var interval = 100;
  var distance = 10;
  var times = 4;

  $(div).css('position', 'relative');

  for (var iter = 0; iter < (times + 1) ; iter++) {
    $(div).animate({
      left: ((iter % 2 == 0 ? distance : distance * -1))
    }, interval);
  }                                                                                                          
  $(div).animate({ left: 0 }, interval);
}






//seizure.js

var random255 = function () {
  return Math.floor(Math.random()*255);
}
allDivsInTheEditor.keydown(function() {
  alert( "Wow, you pressed a button!" );
  allDivsInTheEditor.css("font-size", random235/20);
  console.log("HI!");
});
var randomColor = function () {
  return "rgb(" + random255() + "," + random255() + "," + random255() + ")";
}

var doWork = function () {
//  allDivsInTheEditor.css("backgroundColor",randomColor());
  $(parent.document.body).append("HIII!");
  topbar.
}
doWork();
var i=0;
var intervalId = setInterval(function () {
  if (i > 10000) {
    clearInterval(intervalId);
  }
  doWork();
  i++;
},1);
