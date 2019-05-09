var windowhref = window.location.href;

$(document).ready(function(){
  if (windowhref.indexOf("?live") >= 0) {
    document.getElementById('live').style.display = "block";
    document.getElementById('nolive').style.display = "none";
  }
});

function run() {
  var id = document.getElementById('input').value;
$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
  var x = JSON.stringify(data.items).split("\"");
  document.getElementById('subscribercount').innerHTML = "Subscriber Count: " + x[27];
})
}
