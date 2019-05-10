var windowhref = window.location.href;

//https://jsbin.com/veyuwigete/1/edit?html,css,output

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
    window.location.href = "https://connorcoder.github.io/youtubeapi/?sub=" + id;
  }
  if (document.getElementById('option').value === "view") {
    var id = document.getElementById('input').value;
    window.location.href = "https://connorcoder.github.io/youtubeapi/?view=" + id;
  }
}

//Get Information
//$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
//  var x = JSON.stringify(data.items).split("\"");
//}) 27 = Sub count, 19 = View count

function live(id) {
  function update() {
    $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=AIzaSyCSQDB4r8dpeY5AssTLnUMnaRyUmBGZjKE", function(data) {
      if (windowhref.indexOf('?sub') >= 0) {
        var num = data.items['0'].statistics.subscriberCount;
      }else if (windowhref.indexOf('?view') >= 0){
        var num = data.items['0'].statistics.viewCount;
      }
      for (x = num.length;x<12;x++) {
        num = "0" + num;
      }
      var reverse = [];
      for (x = num.length - 1;x>=0;x--) {
        reverse.push(num[x]);
      }
      if (document.getElementsByClassName('one')[0].innerHTML != reverse[0]) {$(function() {$('.one').fadeOut(1000, function() {$(this).text(reverse[0]).fadeIn(1000);});});}
      if (document.getElementsByClassName('ten')[0].innerHTML != reverse[1]) {$(function() {$('.ten').fadeOut(1000, function() {$(this).text(reverse[1]).fadeIn(1000);});});}
      if (document.getElementsByClassName('hundred')[0].innerHTML != reverse[2]) {$(function() {$('.hundred').fadeOut(1000, function() {$(this).text(reverse[2]).fadeIn(1000);});});}
      if (document.getElementsByClassName('thousand')[0].innerHTML != reverse[3]) {$(function() {$('.thousand').fadeOut(1000, function() {$(this).text(reverse[3]).fadeIn(1000);});});}
      if (document.getElementsByClassName('tenthousand')[0].innerHTML != reverse[4]) {$(function() {$('.tenthousand').fadeOut(1000, function() {$(this).text(reverse[4]).fadeIn(1000);});});}
      if (document.getElementsByClassName('hundredthousand')[0].innerHTML != reverse[5]) {$(function() {$('.hundredthousand').fadeOut(1000, function() {$(this).text(reverse[5]).fadeIn(1000);});});}
      if (document.getElementsByClassName('million')[0].innerHTML != reverse[6]) {$(function() {$('.million').fadeOut(1000, function() {$(this).text(reverse[6]).fadeIn(1000);});});}
      if (document.getElementsByClassName('tenmillion')[0].innerHTML != reverse[7]) {$(function() {$('.tenmillion').fadeOut(1000, function() {$(this).text(reverse[7]).fadeIn(1000);});});}
      if (document.getElementsByClassName('hundredmillion')[0].innerHTML != reverse[8]) {$(function() {$('.hundredmillion').fadeOut(1000, function() {$(this).text(reverse[8]).fadeIn(1000);});});}
      if (document.getElementsByClassName('billion')[0].innerHTML != reverse[9]) {$(function() {$('.billion').fadeOut(1000, function() {$(this).text(reverse[9]).fadeIn(1000);});});}
      if (document.getElementsByClassName('tenbillion')[0].innerHTML != reverse[10]) {$(function() {$('.tenbillion').fadeOut(1000, function() {$(this).text(reverse[10]).fadeIn(1000);});});}
      if (document.getElementsByClassName('hundredbillion')[0].innerHTML != reverse[11]) {$(function() {$('.hundredbillion').fadeOut(1000, function() {$(this).text(reverse[10]).fadeIn(1000);});});}
    });
  }setInterval(update, 10000);
}
