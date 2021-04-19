$(document).ready(function(){
  

  $(".fa-plus").click(function(){
    $(".fa-linkedin").show();
    $(".fa-instagram").show();
    $(".fa-plus").hide();
    
  });
  $("form").submit(function(){
  event.preventDefault();
  var webform= $post("https://maker.ifttt.com/trigger/webform/with/key/cUFA9tP0-6uPIjN8PNAQOR", JSON.stringify({"value1":
  $("#name").val, value2: $("#email").val(), "value3": $("#message").val()}));
  
  });
});

  





