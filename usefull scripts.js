// usefull scripts
// collection to array
var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems); // теперь elems - массив

elems.forEach(function(elem) {
  alert( elem.tagName ); // HEAD, текст, BODY