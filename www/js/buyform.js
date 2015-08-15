$(document).ready(function(){
var item= localStorage.getItem("item");
  var json = JSON.parse(item);

   $("#profile_pic").attr("src",json.profile_pic);
   //$("#dress").attr("src",json.image_url);
    $(".container").css("background-image","url("+json.image_url+")");
  
   $("#uname").text(json.uname);
   $("#size").text(json.size);
   $("#price").text('$'+json.price_now);
   var total=json.price_now/1+10;
   $("#total").text(' $'+total);
   
   
   
   //action for length selection
    $("#delivery").css("background-color", "#be4d66");
$("#nadd").css("background-color", "#be4d66");
//$("#deliverytext").css("background-color", "#fff");
//$("#naddtxt").css("background-color", "#fff");
  //pickup  
$("#pickup").on("click", function() {
    $("#pickuptext").css("color", "#fff");
    $("#deliverytext").css("color", "#DADADA");
    
    $("#pickup").css("background-color", "#be4d66");
    $("#delivery").css("background-color", "#fff");
    
    });

//delivery
$("#delivery").on("click", function() {
    $("#pickuptext").css("color", "#DADADA");
    $("#deliverytext").css("color", "#fff");
    
    $("#pickup").css("background-color", "#fff");
    $("#delivery").css("background-color", "#be4d66");
    
});

//events for address
//same address 
$("#sadd").on("click", function() {
    $("#saddtxt").css("color", "#fff");
    $("#naddtxt").css("color", "#DADADA");
    
    $("#sadd").css("background-color", "#be4d66");
    $("#nadd").css("background-color", "#fff");
    
    });

//new address
$("#nadd").on("click", function() {
    $("#naddtxt").css("color", "#fff");
    $("#saddtxt").css("color", "#dadada");
    
    $("#sadd").css("background-color", "#fff");
    $("#nadd").css("background-color", "#be4d66");
    
});

//close
$("#close").on("click", function() {
    $(this).css("background-color", "#be4d66");
       history.go(-1);
    navigator.app.backHistory(); 

});

});
