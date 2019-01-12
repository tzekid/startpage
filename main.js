// main.js

var appendZero = (i) => { if (i < 10) i = "0" + i; return i }

// TODO improve: rewrite this lazily with yield 
var displayTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = appendZero(m);
    s = appendZero(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(displayTime, 500);
}
