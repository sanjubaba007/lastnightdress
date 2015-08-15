var j=2,i=1;
$(document).ready(function(){
   
   $("#profile").css("background-color", "#000");
   
   
   //message event
     $("#message").on("click", function() {
     $(this).css("background-color", "#be4d66");
   
    location.href = "../www/newmessage.html";
   
    
});

//follow event
     $("#follow").on("click", function() {
     //$(this).css("background-color", "#be4d66");
   
   // location.href = "../www/followers.html";
   followun();
   
    
});

   //setting event
     $("#setting").on("click", function() {
    $(this).css("background-color", "#be4d66");
    location.href = "../www/settings.html";
   
    
});
//home event
     $("#home").on("click", function() {
     $(this).css("background-color", "#be4d66");
   
    location.href = "../www/whathappeningonlnd.html";
   
    
});

//profile event
     $("#profile").on("click", function() {
     $(this).css("background-color", "#be4d66");
   
    location.href = "../www/mainprofileview.html";
   
    
});

//follower event
     $("#follower").on("click", function() {
    // $(this).css("background-color", "#be4d66");
   
   // location.href = "../www/followers.html";
    
});

   //editprofile event
     $("#editprofile").on("click", function() {
     $(this).css("background-color", "#be4d66");
   
    location.href = "../www/editprofile.html";
   
    
});
//lnd event
     $("#lnd").on("click", function() {
    $(this).css("background-color", "#be4d66");
    location.href = "../www/listnightdressesview.html";
   
    
});

//inbox event
     $("#inbox").on("click", function() {
    $(this).css("background-color", "#be4d66");
    location.href = "../www/inbox2.html";
   
    
});

//camera event
     $("#camera").on("click", function() {
    $(this).css("background-color", "#be4d66");
    location.href = "../www/instructionpage.html";
   
    
});

//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(-1);
    navigator.app.backHistory(); 

});   
    
    //setting event
     $("#setting").on("click", function() {
     $(this).css("background-color", "#be4d66");
    location.href = "../www/settings.html";
   
    
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
       
$( "#myPopup2" ).popup( "close" );


    });
    $("#more").click(function(){
       
$( "#myPopup2" ).popup( "close" );


    });
    
    
      
  getData();    
  getPost();
  checkfollowun()
});

function setup(result)
{
    //finding device width
       var width = $(window).width();
  
       var w=width/3-1.4;
  
 
    
var obj = jQuery.parseJSON( result );

$.each(obj.data, function(idx, obj) {

     var mydivid="imgdiv"+i;
     if(i==j)
     {
     $("#mydiv").append($('<div>',{class:'imgcontainer2',id:obj.post_id}));
     j=j+3;
     }
     else
     {
     $("#mydiv").append($('<div>',{class:'imgcontainer',id:obj.post_id}));
     }
     $("#"+obj.post_id).width(w).height(w);
     $("#"+obj.post_id).css("background-image","url("+obj.image_url+")");
     
     
     $("#"+obj.post_id).prepend($('<p>',{class:'bottom',id:'p'+i}));
     $("#p"+i).text("$"+obj.price_now); 


 $(document).on('click',"#"+obj.post_id,function(e){
   var pid=e.target.id;
   //var pid=$('#myhd'+id).val();
    localStorage.setItem("postid",pid);
   // alert(this.id);
    location.href = "../www/showdetails.html";
});
i++;

});

}

function getPost()
 {
var un= localStorage.getItem("profilename");

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
function followun()
    {
   var followingid= localStorage.getItem("profilename");
   var followerid= localStorage.getItem("uname");
   alert(followerid+followingid);
   var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/followfollowing.php',
    data: {uid:followerid,fid:followingid,rqid:2} })
    .done(function(data) {  
    
  var json = JSON.parse(data);
  
    if (json.status == true)
	{
	if(json.value==1)
	{
    $("#flw").css('color', '#be4d66');
	
	$('#flw').html("Follow +");
	}
	else
	{
	$("#flw").css('color', '#dadada');
	
	$('#flw').html("Following");
	
	}
	}

	else
	{
	alert("not liked");
	
	}
	
    })
    .fail(function() { alert("unable to load data "); })
    .always(function() { });
 
    }

function getData()
 {
var un= localStorage.getItem("profilename");
//alert(un);
var i;
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:un,rqid:3} })
    .done(function(data) {  
    var json = JSON.parse(data);
   
   if(json.status!=false)
   {
 $("#uname").text(json.uname); 
//localStorage.setItem("username",json.uname);
 $(".bank").text('$'+json.bank); 
 $(".swaps").text(json.swaps); 
 $(".follower").text(json.followers); 
 $(".following").text(json.following);
 $("#desc").text(json.desc);
  
 //localStorage.setItem("userinfo",data);
 var rating=json.rating_status/1;
 for(i=0;i<rating;i++)
 {
   $("#stars").append($('<img>',{id:'theImg'+i,src:'img/rating_icon.png',style:'margin-left:5px;width:15px;height:15px'}));
   
 }
 for(i=0;i<5-rating;i++)
 {
   $("#stars").append($('<img>',{id:'theImg'+i,src:'img/rating_icon2.png',style:'margin-left:5px;width:15px;height:15px'}));
   
 }
   }
 $('#largeImage').attr('src',json.imageurl);
     $( "#largeImage" ).addClass( "circle" );
 
	
    })
    .fail(function() { alert("unable to load profile info"); })
    .always(function() { });
 
}


function checkfollowun()
    {
   var followingid= localStorage.getItem("profilename");
   var followerid= localStorage.getItem("uname");
  
   var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/followfollowing.php',
    data: {uid:followerid,fid:followingid,rqid:3} })
    .done(function(data) {  
    
     var json = JSON.parse(data);
  
    if (json.status == true)
	{
	
    
	
	$("#flw").css('color', '#dadada');
	
	$('#flw').html("Following");
	
	}

	else
	{
	$("#flw").css('color', '#be4d66');
	
	$('#flw').html("Follow +");
	
	}
	
    })
    .fail(function() { alert("unable to load data "); })
    .always(function() { });
 
    }
