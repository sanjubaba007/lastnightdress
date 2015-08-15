jQuery(document).ready(function() {

    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
    
   // $("#myPopup").popup("open");
   $(".tri-down").hide();
   $("#tridown1").hide();
   
    //first tab color
    
    $("#noti").css("color","#be4d66");
    $("#msg").css('color','#e7e9eb');

     $("#endmsg").css("background-color","#000");
    
    //event to notification
   $("#noti").on("click", function() {
    $(this).css('color','#be4d66');
  $("#msg").css('color','#e7e9eb');
  
   $(".tri-down2").show();
    $("#tridown2").show();
		$(".tri-down").hide();
		 $("#tridown1").hide();
});   
//event to message
   $("#msg").on("click", function() {
    $(this).css('color','#be4d66');
  $("#noti").css('color','#e7e9eb');
      
    $(".tri-down").show();
     $("#tridown1").show();
		$(".tri-down2").hide();
		 $("#tridown2").hide();	
     
});   
    //home event
     $("#home").on("click", function() {
     $(this).css("background-color", "#000");
   
    location.href = "../www/whathappeningonlnd.html";
   
    
});

//lnd event
     $("#lnd").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/listnightdressesview.html";
   
    
});

//inbox event
     $("#inbox").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/inbox2.html";
   
    
});

//camera event
     $("#camera").on("click", function() {
    $(this).css("background-color", "#be4d66");
     if(localStorage.getItem("ins")==null)
    location.href = "../www/instructionpage.html";
   else
    location.href = "../www/clickimages.html";
   
    
});
   //profile event
     $("#profile").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/mainprofileview.html";
   
    
}); 
});


    // Wait for device API libraries to load
    //
    function onLoad() {
    
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
  //event to newmsg
   $("#newmsg").on("click", function() {
    $("#newmsg").css('background-color','#dfdfdf');
  location.href = "../www/newmessage.html";
 
});   
        // Register the event listener
		getData();
		getnotification();
    //setup();
     }

   
function setup(result)
{
  //  alert(result);
$('#pageLoader').hide();



  var obj = jQuery.parseJSON( result );
  var i=0;

if(obj.data.length==0)
//alert("Nothing yet on notification...");
$.each(obj.data, function(idx, obj) {

    var tabcls=obj.name;
   $("#dynamictable").append('<table  id="mytable" class=msg'+i+'><tr><td style="width:50px;vertical-align:top" ><img src="'+obj.imgurl+'" class="circle" /></td><td ><div style="width:100%;margin-top:3px"><p id="uname" style="font-family:unfont"> '+obj.name+' </p></div><div style="width:100%;margin-top:5px"> <p id="msg" style="font-family:ppfont" >'+obj.msg+'</p></div></td><td style="width:60px;"><div id="mytwodiv"><di<time  id="time" datetime="2008-02-14 20:00">3:15PM</time></div><div id="mytwodiv" style="font-family:ppfont"><img style="margin-top:15px" class="icon icons8-Next" align="right" src="img/fullmsg_icon.png" width="16" height="16"></div></td></tr></table>');
   $("#dynamictable").append($('<div>',{color:'#DADADA',style:'width:100%;height:1px;clear;both;background-color:#dadada'}));
i++;	
});




}
function notisetup(result)
{

  var obj = jQuery.parseJSON( result );
  var j=0;

$("#msgtab").append('<br/>');
$.each(obj.data, function(idx, obj)
 {


/*
$("#msgtab").append($('<div>',{id:'mydiv'+j,class:j,style:'width:100%;height:40px;overflow:hidden'}));
$("#mydiv"+j).append($('<div>',{id:'mydivimg'+j,style:'width:15%;height:100%;float:left;'}));

$('#mydivimg'+j).append('<img align="center" src="'+obj.profile_pic+'" align="left" class="circle" style="float:left;" />');


$("#mydiv"+j).append($('<div>',{id:'mydivtext'+j,style:'width:70%;height:100%;float:left;'}));
$("#mydivtext"+j).append($('<label>',{id:"txt"+j,class:obj.uname,style:'font-size:16px;color:#be4d66;font-weight:bold;margin-top:2px'}));
$("#txt"+j).text(obj.uname);

if(obj.noti_type=="1")
{
$("#mydiv"+j).append($('<div>',{id:'mydivrecimg'+j,style:'width:15%;height:100%;float:right;'}));
$('#mydivrecimg'+j).append('<img  src="'+obj.image_url+'"  class="rect" id="centerimg"  />');
$("#txt"+j).append('<span style="color:#000;margin-left:3px;font-weight:none">liked your photo</span>');
$("#txt"+j).append('<span style="color:#DADADA;font-size:11px;margin-left:3px;font-weight:none">'+obj.time+'</span>');

}
else if(obj.noti_type=="2")
{
$("#mydiv"+j).append($('<div>',{id:'mydivrecimg'+j,style:'width:15%;height:100%;float:right;'}));
$('#mydivrecimg'+j).append('<img  src="'+obj.image_url+'" class="rect" id="centerimg" />');

$("#txt"+j).append('<span style="color:#000;margin-left:3px;font-weight:none">commented on '+obj.comment +'</span>');
$("#txt"+j).append('<span style="color:#DADADA;font-size:11px;margin-left:3px;font-weight:none">'+obj.time+'</span>');

}

$("#msgtab").append($('<hr>',{color:'#DADADA',size:'1',style:'margin-top:10px;border:0 none;height:1px;width:98%'}));

//message click  event
  $("body").on("click", "#txt"+j, function (e) 
    {
var uname= $(this).attr("class");
localStorage.setItem("profilelname",uname);
  if((e.target.id)!=null)
    location.href = "../www/userprofileview.html";

});*/
 $("#msgtab").append('<table  id="mytable" class=msg'+j+'><tr><td style="width:50px;vertical-align:top" ><img src="'+obj.profile_pic+'" class="circle" /></td><td ><div style="width:100%;margin-top:3px"><p id="uname" style="font-family:unfont"> '+obj.uname+' </p></div><div style="width:100%;margin-top:5px"> <p id="msg" style="font-family:ppfont" >'+obj.comment+'</p></div></td><td style="width:60px;"><div id="mytwodiv"><di<time  id="time" datetime="2008-02-14 20:00">3:15PM</time></div><div id="mytwodiv" style="font-family:ppfont"><img style="margin-top:15px" class="icon icons8-Next" align="right" src="img/fullmsg_icon.png" width="16" height="16"></div></td></tr></table>');
   $("#msgtab").append($('<div>',{color:'#DADADA',style:'width:100%;height:1px;clear;both;background-color:#dadada'}));

//message click  event
  $("body").on("click", ".msg"+j, function (e) 
    {
 //  localStorage.setItem("profilelname",tabcls);
   // location.href = "../www/inbox.html";
  
});

j++;

});




}
//get messsage
function getData()
 {
var un= localStorage.getItem("uname");

  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/inboxope.php',
    data: {uname:un,rqid:4} })
    .done(function(data) {  
    var json = JSON.parse(data);
 
 setup(data);
  
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { });
 
}
//get notification
function getnotification()
 {
var un= localStorage.getItem("uname");

  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/inboxope.php',
    data: {uname:'o',rqid:5} })
    .done(function(data) {  
    var json = JSON.parse(data);
 //alert(data);
 notisetup(data);
  
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { });
 
}

