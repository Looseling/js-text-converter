let textarea = document.getElementById("textarea");

let uppercase = document.getElementById("upper-case");
let lowercase = document.getElementById("lower-case");
let propercase = document.getElementById("proper-case");
let sentencecase = document.getElementById("sentence-case");

uppercase.onclick = function() {
    textarea.value = textarea.value.toUpperCase();
  };



lowercase.addEventListener("click" , function() {
  textarea.value = textarea.value.toLowerCase();
});

propercase.addEventListener("click" , function() {
  
  textarea.value = textarea.value.split(" ").map(element => {
    return element.charAt(0).toUpperCase() + element.substr(1).toLowerCase();
  }).join(" ");
});


sentencecase.addEventListener("click" , function() {
  textarea.value = textarea.value.toLowerCase().
  replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase();});
});





// Start file download.




document.getElementById("textSave").
addEventListener("click", function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
  element.setAttribute('download', "text");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});

