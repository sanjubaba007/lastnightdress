
 document.addEventListener("deviceready", onDeviceReady, false);
 
$(document).ready(function(){
 var width = $(window).width();

  
       var w=(width*70)/100;
        $("#ddiv").width(w);
         $("#desc").width(w);
      

$('#largeImage').attr('src',localStorage.getItem("url"));
     $( "#largeImage" ).addClass( "circle" );
    $("#profile").css("background-color", "#000");
     $("#uname").text(localStorage.getItem("uname")); 
   //setting event
     $("#setting").on("click", function() {
     $(this).css("background-color", "#be4d66");
    location.href = "../www/settings.html";
   
    
});

//home event
     $("#home").on("click", function() {
     $(this).css("background-color", "#000");
   
    location.href = "../www/whathappeningonlnd.html";
   
    
});

//contac event
     $("#fcontact").on("click", function() {
     $(this).css("background-color", "#000");
   
    location.href = "../www/contact.html";
   
    
});


//follower event
     $("#follower").on("click", function() {
    // $(this).css("background-color", "#be4d66");
   
    location.href = "../www/followers.html";
   
    
});
//editprofile event
     $("#editprofile").on("click", function() {
     $(this).css("background-color", "#be4d66");
   var utype=localStorage.getItem("type");
   alert(utype);
    
    if(utype=="private")
    {
   
    location.href = "../www/editprofile.html";
    
    }
    else
    {
    
    location.href = "../www/editprofileshop.html";
    }
    
  
    
});
   
//lnd event
     $("#lnd").on("click", function() {
    $(this).css("background-color", "#000");
    localStorage.removeItem("price_first");
    localStorage.removeItem("price_second");
    location.href = "../www/listnightdressesview.html";
   
    
});

//inbox event
     $("#inbox").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/inbox2.html";
   
    
});

//camera event
     $("#camera").on("click", function() {
    $(this).css("background-color", "#000");
    if(localStorage.getItem("ins")==null)
    location.href = "../www/instructionpage.html";
   else
    location.href = "../www/clickimages.html";
   
    
});
//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 

});   
    
    $("#showpopup").click(function(){
       
$( "#myPopup2" ).popup( "open" );


    });
    $("#cancel").click(function(){
       
$("#cancel").css('background-color','#be4d66');
$( "#myPopup2" ).popup( "close" );
$("#cancel").css('background-color','#ffffff');

    });
    $("#more").click(function(){
$("#more").css('background-color','#be4d66');
      
//$( "#myPopup2" ).popup( "close" );
location.href = "../www/privacypolicy.html";

    });
    
   

});

function setup(result)

{
   //finding device width
       var width = $(window).width();
  
       var w=width/3;
  
 
    
var obj = jQuery.parseJSON( result );
var i=1;
$.each(obj.data, function(idx, obj) {

     var mydivid="imgdiv"+i;
     
     $("#mydiv").append($('<div>',{class:'imgcontainer',id:obj.post_id}));
     $("#"+obj.post_id).width(w).height(w);
     $("#"+obj.post_id).css("background-image","url("+obj.image_url+")");
     
     
     $("#"+obj.post_id).prepend($('<p>',{class:'bottom',id:'p'+i}));
     $("#p"+i).text("$"+obj.price_now); 
   

 $(document).on('click',"#"+obj.post_id,function(e){
   // alert(e.target.id);
    localStorage.setItem("postid",e.target.id);
    var utype= localStorage.getItem("type");
  
    if(utype=="private")
    location.href = "../www/showdetails.html";
   else
    location.href = "../www/shopshowdetails.html";
   
});
i++;

});

}
function getData()
 {
var un= localStorage.getItem("uname");
var i;
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:un,rqid:3} })
    .done(function(data) {  
    var json = JSON.parse(data);
 $(".bank").text(json.bank); 
 $(".swaps").text(json.swaps); 
 $(".follower").text(json.followers); 
 $(".following").text(json.following); 
 $("#desc").text(json.desc); 
 //alert(json.b_status);
 localStorage.setItem("userinfo",data);

 var rating=json.rating_status/1;
 for(i=0;i<rating;i++)
 {
   $("#stars").append('<img src="img/rating_icon.png" style="margin-left:5px;width:15px;height:15px" ');
   
 }
 for(i=0;i<5-rating;i++)
 {
   $("#stars").append('<img src="img/rating_icon2.png" style="margin-left:5px;width:15px;height:15px" ');
   
 }
 
 
	
    })
    .fail(function() { alert("unable to load profile info"); })
    .always(function() { });
 
}
function getPost()
 {
var un= localStorage.getItem("uname");

  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {uname:un,rqid:3} })
    .done(function(data) {  
    var json = JSON.parse(data);
 
 setup(data);
	
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { });
 
}
getPost();
getData();