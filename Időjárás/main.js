var degree0 = (Math.random() * (41 - -19) + -19);
var degree = (Math.round( degree0 * 10 ) / 10).toFixed(1);
var type = Math.random() < 0.5 ? "heves" : "enyhe";
var avdegree = 12.2;
var difavdegree0 = degree0-avdegree;
var difavdegree = (Math.abs (Math.round( difavdegree0 * 10 ) / 10)).toFixed(1);

let wtw 
if (degree > 20){wtw="Öltözz lengén!"} else {wtw="Öltözz melegen!"}

let cOrw
if (difavdegree0 < 0) {cOrw="hűvösebb"} else {cOrw="melegebb"}

document.querySelector('span.degree').innerHTML = degree;
document.querySelector('span.difavdegree').innerHTML = difavdegree
document.querySelector('span.type').innerHTML = type;
document.querySelector('span.whattowear').innerHTML = wtw;
document.querySelector('span.cOrw').innerHTML = cOrw


