var windowhref = window.location.href;

$(document).ready(function(){
  if ((windowhref.indexOf("?sub") >= 0) || (windowhref.indexOf("?view") >= 0)) {
    document.getElementById('live').style.display = "block";
    document.getElementById('nolive').style.display = "none";
    var id = windowhref.slice(windowhref.indexOf("="));
    live(id); //Broadcast for live sub/view count
  }
});

function run() {
  if (document.getElementById('option') === "sub") {
    var id = document.getElementById('input').value;
    window.location.href = window.location.href + "?sub=" + id;
  }
  if (document.getElementById('option') === "view") {
    var id = document.getElementById('input').value;
    window.location.href = window.location.href + "?view=" + id;
  }
}

//Get Information
//$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpe&5AssTLnUMnaRyUmBGZjKE", function(data) {
//  var x = JSON.stringify(data.items).split("\"");
//}) 27 = Sub count, 19 = View count
