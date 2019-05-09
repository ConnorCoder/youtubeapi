var windowhref = window.location.href;

$(document).ready(function(){
  if ((windowhref.indexOf("?sub") >= 0) || (windowhref.indexOf("?view") >= 0)) {
    document.getElementById('live').style.display = "block";
    document.getElementById('nolive').style.display = "none";
    var id = windowhref.slice(windowhref.indexOf("=") + 1);
    live(id); //Broadcast for live sub/view count
  }
});

function run() {
  if (document.getElementById('option').value === "sub") {
    var id = document.getElementById('input').value;
    window.location.href = window.location.href + "?sub=" + id;
  }
  if (document.getElementById('option').value === "view") {
    var id = document.getElementById('input').value;
    window.location.href = window.location.href + "?view=" + id;
  }
}

//Get Information
//$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
//  var x = JSON.stringify(data.items).split("\"");
//}) 27 = Sub count, 19 = View count

function live(id) {
  function update() {
    $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
      console.log(data);
      var x = JSON.stringify(data.items).split("\"");
      if (windowhref.indexOf('?sub') >= 0) {
        document.getElementById('count').innerHTML = x[27];
      }else if (windowhref.indexOf('?view') >= 0){
        document.getElementById('count').innerHTML = x[19];
      }
    })
  }setInterval(update(), 10000);
}
