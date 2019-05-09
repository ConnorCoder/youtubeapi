var windowhref = window.location.href;
var where = ["default"];

$(document).ready(function(){
  if (windowhref.indexOf("?sub") >= 0) {
    where[0] = "sub";
    document.getElementById('live').style.display = "block";
    document.getElementById('nolive').style.display = "none";
  }else if (windowhref.indexOf("?view") >= 0) {
    where[0] = "view";
    document.getElementById('live').style.display = "block";
    document.getElementById('nolive').style.display = "none";
  }
});

function run() {
  if (where[0] === "sub") {
    var id = document.getElementById('input').value;
    $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
      var x = JSON.stringify(data.items).split("\"");
      document.getElementById('count').innerHTML = "Subscriber Count: " + x[27];
    });
  }
  if (where[0] === "view") {
    var id = document.getElementById('input').value;
    $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpe&5AssTLnUMnaRyUmBGZjKE", function(data) {
      var x = JSON.stringify(data.items).split("\"");
      document.getElementById('count').innerHTML = "View Count: " + x[19];
    })
  }
}
