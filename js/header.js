var header = document.getElementsByClassName("header_options");
var btns = document.getElementsByTagName('a');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("header_active");
  current[0].className = current[0].className.replace("header_active", "");
  this.className= "header_btn header_active";
  });
}
