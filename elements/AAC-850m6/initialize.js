function(instance, context) {

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("spinner-overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
    setTimeout(function() {
      console.log("Content is now shown");
    }, 2000); 
  }, 5000); 
});
    
}