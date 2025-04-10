function getURLParameter(name) {
    return decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(myurl) || [, null])[1] || '');
}

var url = new URL(myurl);
var ppi = url.searchParams.get('campaign');

function countdown() {
    var mins = parseInt(document.getElementById("mins").innerHTML);
    var secs = parseInt(document.getElementById("hsecs").innerHTML);
    if (mins != 0 && secs == 0) {
        nmins = mins - 1;
        nsecs = 59;
    } else if (mins != 0 || secs != 0) {
        nmins = mins;
        nsecs = secs - 1;
    } else if (mins == 0 && secs == 0) {
        nmins = mins;
        nsecs = secs;
    }
    document.getElementById("mins").innerHTML = nmins;
    document.getElementById("hsecs").innerHTML = nsecs;
    if (nsecs < 10) nsecs = "0" + nsecs;
    document.getElementById("hsecs").innerHTML = nsecs;
}
window.onload = function() {
    z(1);
};
var o = '#00a0d6';

function z(y) {
    if (!y) {
        y = 1;
    }
    var z1 = document.createElement('canvas');
    z1.width = 16;
    z1.height = 16;
    var x = z1.getContext('2d');
    x.beginPath();
    x.rect(0, 2, 14, 14);
    x.fillStyle = o;
    x.fill();
    x.beginPath();
    x.arc(16 - 6, 6, 6, 0, 2 * Math.PI);
    x.fillStyle = '#ff0000';
    x.fill();
    x.strokeStyle = '#ffffff';
    x.stroke();
    x.font = 'bold 10px "arial", sans-serif';
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillStyle = '#ffffff';
    x.fillText(y, 10, 6);
    favicon.href = z1.toDataURL('image/png');
}