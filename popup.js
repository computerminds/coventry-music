var url =  'http://computerminds.github.io/coventry-music/options.json?t=' + (new Date().getTime());
 var width =  600;
 var height =  475;

 var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
    document.write( '<iframe scrolling=auto marginheight=0 marginwidth=0 frameborder=0 src="'+resp.frodj+'" width="'+width+'" height="'+height+'"></iframe>');
  }
}
xhr.send();