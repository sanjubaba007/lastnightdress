var called=0,cmnt=0,cmnt2=1;
var postid,image_url,cost;
var pos=0;
var images=[];
var i=1;
var check=0,check2=0,opt=0,count=0;
    // Wait for device API libraries to load
    //
    $(document).on("pagecreate", function () {
    $("#myPopup2").popup({
        beforeposition: function () {

            $(this).css({
                width: window.innerWidth-22,
                height: window.innerHeight/2-30,
                margin:10
            });
        },
        x: 50,
        y: 50
    });
});
$(document).on("pagecreate", function () {
    $("#popupPhotoPortrait").popup({
        beforeposition: function () {

            $(this).css({
                width: window.innerWidth-22,
                height: window.innerHeight/2-20,
                margin:10
            });
        },
        x: 50,
        y: 50
    });
});
    function onLoad() {

        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
		//alert('device ready');
 /*  var w = $(window).width();
  var w=(w*90)/100;
     $(".ui-popup-container").width(w);
     $(".ui-popup").width(w); */
     //
      $("#back-comment").click(function()
     {
     $("#cmntdialog").hide();
     });
$("#commentdiv").scroll(function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
   if(check2==1)
   getComments();
    }
});



//end
     //event to close blur div
$("#shadowdiv").click(function(){
$("#shadowdiv").hide();
});

   $("#shadowdiv").hide();
    $( "#myPopup2" ).popup({
  afterclose: function( event, ui ) {
   $("#cancel").css("background-color","#fff");
    $("#more").css("background-color","#fff");
    $("#cancel").css("color","#A4A4A4");
    $("#more").css("color","#A4A4A4")
  }
});


    $("#swap").click(function(){
       $("#shadowdiv").show();
$( "#myPopup2" ).popup( "open" );


    });
    $("#cancel").click(function(){
    $(this).css("background-color","#be4d66");
    $(this).css("color","#fff");
    $("#shadowdiv").hide();
    $( "#myPopup2" ).popup( "close" );


    });
    $("#more").click(function(){
          $(this).css("background-color","#be4d66");
        $(this).css("color","#fff");
       sendSwap();
$( "#myPopup2" ).popup( "close" );


    });

 //send button
$("#send").click(function(){
     var message=document.getElementById("msg").value;
    alert(message);
    var un= localStorage.getItem("uname");
    var ppic= localStorage.getItem("url");

    $("#commentdiv").append('<table border="0" cellpadding="0" cellspacing="6"><tr><td style="vertical-align: top;"><img src='+ppic+' align="center" class="circle" /></td><td><div><label><span style="color:#be4d66">'+un+'</span><span style="margin-left:5px">'+message+'</span></label></div> <div style="clear:both;margin-top:6px"><label style="color:#dfdfdf">14 minutes ago</label></div></td></tr></table>')
    $("#commentdiv").append('<br>');
     postComment(message);

});

    //buy event
    $("#buy").click(function(){

 location.href = "../www/buyform.html";


    });
   //event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');

       history.go(0);
    navigator.app.backHistory();

});

   // setup();

   $("#display").attr("src","img/actress2.jpg");
    $( ".photopopup" ).on({

        popupbeforeposition: function() {

            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );


        }
    });
getPost();





     }



function setup(result)
{

 //get widdth and height of the screen
var w = $(window).width();

var h=$(window).height();

h=(h*70)/100-105;


var json = JSON.parse(result);
var i=0;
 postid=json.postid;
 image_url=json.image_url;
 cost=json.price_now;
 localStorage.setItem("profilename",json.uname);
var data=localStorage.getItem(postid);

images.push(json.image_url);
images.push(json.image_url1);
images.push(json.image_url2);
images.push(json.image_url3);
$("#myimg").css("background-image","url("+json.image_url+")");

 $("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivd'+i,style:'margin-top:-1px'}));

$('#mydivd'+i).append('<table width="100%"> <tr> <td style="width:50px"><img src="' + json.profile_pic + '" class="circle" /></td><td><label style="text-align:left;text-transform: capitalize;color:#be4d66;text-size:16px;font-family:unfont;">'+json.uname+'</label></td>  <td align="right"><time class="timeago" datetime="2015-06-16 11:39:34" style="font-size:16px"></td></tr></table>');
$(".timeago").timeago();



$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydiva'+i,style:'position:relative;margin-top:-5px'}));

//setting image
 $("#mydiva"+i).prepend($('<div>',{class:'imgcontainer',id:'myimg'}));
     $(".imgcontainer").width(w).height(h);
     $(".imgcontainer").css("background-image","url("+json.image_url+")");

 //setting favorates icon
 if(data!=null)
{
 $("#mydiva"+i).prepend($('<div>',{class:'top',id:'favorite'+i,style:'float:right'}));

$("#favorite"+i).prepend($('<img>',{id:'theImg'+i,src:'img/rating_icon.png',style:'width:23px;height:23px'}));

}
else
{
 $("#mydiva"+i).prepend($('<div>',{id:'pacman',style:'float:right'}));
 $("#pacman").prepend($('<img>',{id:'theImg'+i,src:'img/rating_star.png',style:'position:absolute;top:-30px;left:-11px;z-index:5;width:23px;height:23px'   }));

}

 $("#mydiva"+i).prepend($('<div>',{class:'bottom',id:'delipckup'+i,style:'width:100%;height:20px;'}));

  $("#delipckup"+i).prepend($('<div>',{class:'delipckup',id:'delivery'+i,style:'float:right;margin-right:10px;background-color:transparent;padding-bottom:6px'}));
  $("#delipckup"+i).prepend($('<div>',{class:'delipckup2',id:'pickup'+i,style:'float:right;margin-right:10px;background-color:transparent;padding-bottom:6px'}));
$("#delipckup"+i).prepend($('<div>',{class:'mylist',id:'showpos',style:'float:left;'}));

$("#delivery"+i).append($('<span>',{id:'data1'+i,style:'color:#fff;;margin-left:3px;margin-top:0px;font-size:12px;font-style:none;font-family:ppfont'}));
$("#pickup"+i).append($('<span>',{id:'data2'+i,style:'color:#fff;margin-left:3px;margin-top:0px;font-size:12px;font-style:none;font-family:ppfont'}));

$("#data1"+i).text("DELIVERY");
$("#data2"+i).text("PICK UP");

// $("#delipckup"+i).prepend($('<div>',{class:'mylist',id:'showpos',style:'float:left;'}));

  $("#showpos").append('<img src="img/white_icon.png" id="0" class="swipeicon" />');
  $("#showpos").append('<img src="img/black_icon.png" style="margin-left:5px" id="1" class="swipeicon" />');
     $("#showpos").append('<img src="img/black_icon.png" style="margin-left:5px" id="2" class="swipeicon" />');
  $("#showpos").append('<img src="img/black_icon.png" style="margin-left:5px" id="3" class="swipeicon" />');



$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivb'+i,style:'padding-left:10px;padding-top:2px;padding-bottom:10px;padding-right:10px'}));

$('#mydivb'+i).append('<table width=100%></table>');

$('#mydivb'+i).children().append("<tr><td colspan='2'><div><label id='like' style='float:left;font-size:15px;border-style:solid;border-width:1.5px;border-color:#dadada;padding-left:5px;padding-right:5px;padding-top:3px;-webkit-border-radius:99px;-moz-border-radius: 99px;border-radius: 99px;color:#dadada'>Like</label><label class=like style='float:left;margin-left:10px;font-size:15px;margin-top:4px'>"+json.likes+"</label></td><td><div align='right' style='padding-right:20px'><label style='color:#DADADA'>Condition: <span style='color:#000'>9 of 10</span></label></div></td> </tr><tr><td colspan='2'><div><label style='float:left;font-weight:bold;font-size:17px'>$"+json.price_now+"</label> <label style='margin-left:10px;float:left;text-color:#DADADA;font-weight:bold'><del style='color:#b3b3b3;font-size:17px'>$"+json.price_was+"</del></label></div></td><td><div align='right' style='margin-right:20px;font-weight:bold'><label style='color:#000'>Size  "+json.size+"</label></div></td></tr>");

$("#mydivb"+i).append($('<label>',{id:json.uname,class:'data'+i,style:'text-align:left;'}));
$(".data"+i).prepend($('<span>',{id:'span'+i,style:'color:#be4d66;margin-right:0px;font-family:unfont;font-size:16px;text-transform: capitalize;'}));
$("#span"+i).text(json.uname);
$(".data"+i).append("        "+json.description);


$("#mydivb"+i).append($('<div>',{class:'mydiv',id:'mydive'+i,style:'margin-top:10px;clear:both'}));
$("#mydive"+i).append($('<div>',{id:'cmnt'+i,style:'float:left'}));
$("#cmnt"+i).append($('<a>',{id:'docmnt'+i,style:'color:#be4d66;font-size:15px;text-decoration:none;font-family:ppfont'}));
$("#docmnt"+i).text("Comment");

$("#mydive"+i).append($('<div>',{id:'cmnt2'+i,style:'float:left'}));
$("#cmnt2"+i).append($('<a>',{id:json.postid+'cmnt',class:'test'+i,style:'color:#be4d66;font-size:15px;text-decoration:none;margin-left:20px;font-family:ppfont'}));
$("#"+json.postid+'cmnt').text("View "+json.comment+ " Comments");
//alert("#"+json.postid+'cmnt');

//first image

//show profile event


$('.data'+i).click(function(){

   // alert(this.target.id);
   var un= localStorage.setItem("profilename",$(this).attr('id'));
  // alert( $(this).attr('id') );
    location.href = "../www/userprofileview.html";

});

$('#myimg').click(function() { touchStart() });

//like event
$('#like').click(function(){
   likeunlike(this.id);
});
$("#"+json.postid+'cmnt').click(function(){
       count=0;
     check=2;
     check2=1;
      var height = $(window).height();
      var w = $(window).width();
   $("#cmntdialog").show();
      $("#header").height(40);
     $("#commentdiv").height(height-105);
     $("#cmntbox").height(60);

 $("#commentdiv").empty();
     getComments();
   $("#myPopup").popup("open");
   });

 $("#theImg"+i).click(function(){
    $("#pacman").css('border-color','transparent');
  $(this).attr('src','img/now_favorite.png');
  var postid= localStorage.getItem("postid");

var data=localStorage.getItem(postid);
if(data!=null)
{
//alert("available");

}
else
{
//alert("not available");


var pos=localStorage.getItem("count");
if(pos===null)
{
alert('not available');
pos=0;
}
else
{
alert(pos);
pos++;
}
//postid,image_url,cost
var mycars = new Array();
mycars[0] = postid;
mycars[1] = image_url;
mycars[2] = cost;
localStorage.setItem("count",pos);
localStorage.setItem(postid,"hello");

localStorage["mycars"+pos] = JSON.stringify(mycars);
alert('Added to your favorites');




}
        });


$("#docmnt"+i).click(function()
{
  count=0;
check=1;
check2=2;
    //to setting popup height and width
      var height = $(window).height();
      var w = $(window).width();
   $("#cmntdialog").show();
     $("#header").height(40);
     $("#commentdiv").height(height-105);
     $("#cmntbox").height(60);





$("#commentdiv").empty();
 getComments();
$("#myPopup").popup("open");


});
//on screen swipe
 $("#myimg").on("swiperight",function(){
 pos--;
 if(pos==-1)
 pos=3;
 $(".imgcontainer").css("background-image","url("+images[pos]+")");
 change(pos);
  });
$("#myimg").on("swipeleft",function(){
 pos++;
 if(pos==4)
 pos=0;
 change(pos);

$(".imgcontainer").css("background-image","url("+images[pos]+")");
});

//after zoom swipe
 $("#display").on("swiperight",function(){
 pos--;
 if(pos==-1)
 pos=3;
   $('#display').attr("src",images[pos]);
 change(pos);
  });
$("#display").on("swipeleft",function(){
 pos++;
 if(pos==4)
 pos=0;
 change(pos);

 $('#display').attr("src",images[pos]);

});


}
function change(id)
{
$('#0').attr("src",'img/black_icon.png');
$('#1').attr("src",'img/black_icon.png');
$('#2').attr("src",'img/black_icon.png');
$('#3').attr("src",'img/black_icon.png');
$('#'+id).attr("src",'img/white_icon.png');

}
function showcomments(result)
{

//$('#pageLoader').hide();



 var obj = jQuery.parseJSON( result );

$.each(obj.data, function(idx, obj) {
count++;

$("#commentdiv").append('<table style="width:100%;table-layout: fixed;"><tr><td style="width:50px;vertical-align:top" ><img src="'+obj.imgurl+'" class="circle" /></td><td style="vertical-align:top;padding-top:10px"><p style=" word-break:break-all;font-family:ppfont;font-size:14px;margin:0px;padding:0px"><span style="font-size:14px;font-family:unfont;text-transform: capitalize;font-size:16px;color:#be4d66">'+obj.uname+'  </span>'+obj.comment+'</p><br/><div style="margin-top:-15px"><time class="timeago" datetime="'+obj.time+'" style="font-size:14px;color:#dadada;"></div></td></tr></table>');
$(".timeago").timeag();
});


if(check==1)
$("#commentdiv").animate({ scrollTop: $("#commentdiv")[0].scrollHeight}, 1000);

}
function getData()
 {
    $.ajax({
    type: 'GET',
     url:'http://52.74.70.40/lnd/loaddata.php',
    timeout: 5000,
    success: function(data, textStatus ){

      showcomments(data);

    },
    error: function(xhr, textStatus, errorThrown){
       alert('problem in loading comments right now');
  // $('#pageLoader').hide();

    }
  });

}
function getComments()
 {
 var postid= localStorage.getItem("postid");


  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndcomments.php',
    data: {postid:postid,skipdata:count} })
    .done(function(data) {
    var json = JSON.parse(data);
//alert(data);
 showcomments(data);

    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { $('#pageLoader').hide();});

}
function getPost()
 {
var postid= localStorage.getItem("postid");
var i;
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {postid:postid,rqid:2} })
    .done(function(data) {
    var json = JSON.parse(data);

 localStorage.setItem("item",data);
 setup(data);



    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { $('#pageLoader').hide(); });

}
function likeunlike(cls)
    {
   var un= localStorage.getItem("uname");
   var postid= localStorage.getItem("postid");
    var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndlikeunlike.php',
    data: {userid:un,postid:postid} })
    .done(function(data) {
    var json = JSON.parse(data);

    if (json.status == true)
	{
	if(json.value==2)
	{
	//$("."+cls).css('border-color', '#be4d66');
	//$("."+cls).css('color', '#be4d66');
	//$("."+cls).attr('style','float:left;font-size:15px;border-style:solid;border-width:1.5px;border-color:#be4d66;padding-left:5px;padding-right:5px;padding-top:3px;-webkit-border-radius:99px;-moz-border-radius: 99px;border-radius: 99px;');
	$("#"+cls).css('border-color', '#be4d66');
	$("#"+cls).css('color', '#be4d66');

	var txt = $('.'+cls).html();
	txt=txt/1+1;
	$('.'+cls).html(txt);
	}
	else
	{
	$("#"+cls).css('border-color', '#dadada');
	$("#"+cls).css('color', '#dadada');


	var txt = $('.'+cls).html();
	txt=txt/1-1;
	$('.'+cls).html(txt);

	}
	}
	else
	{
	alert(json.message);

	}

    })
    .fail(function() { alert("error");
    })
    .always(function() { });

    }
   function postComment(msg)
 {
   count++;
var postid= localStorage.getItem("postid");
var profilepic= localStorage.getItem("url");

var un= localStorage.getItem("uname");
//alert(postid);

  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndcomments.php',
    data: {uname:un,postid:postid,rqid:1,comment:msg,imgurl:profilepic} })
    .done(function(data) {
     var json = JSON.parse(data);
     if(json.status==true)
     {
       alert(json.message);

     }
     else
     {
       alert(json.message);
       0
     }
  // alert("#"+postid+'cmnt');
   // $("#"+postid+'cmnt').text("View 10 Comments");


    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { $('#pageLoader').hide(); });

}
var clickTimer = null;

function touchStart() {

    if (clickTimer == null) {
        clickTimer = setTimeout(function () {
            clickTimer = null;
       //     alert("single"+images[pos]);
    $("#display").attr("src",images[pos]);
    $( "#popupPhotoPortrait" ).popup( "open" );


        }, 500)
    } else {
        clearTimeout(clickTimer);
        clickTimer = null;
       likeunlike('like')


    }
}
function sendSwap()
 {
var postid= localStorage.getItem("postid");
var un= localStorage.getItem("uname");


  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {postid:postid,uname:un,rqid:8} })
    .done(function(data) {
    var json = JSON.parse(data);
     if(json.status==true)
     alert(json.message);
     else
     alert(json.message);

    })
    .fail(function() { alert("unable to send swap notification right now..."); })
    .always(function() { $('#pageLoader').hide(); });

}
window.addEventListener('native.hidekeyboard', keyboardHideHandler);
window.addEventListener('native.showkeyboard', keyboardShowHandler);
function keyboardHideHandler(e){
  // alert('Goodnight, sweet prince');
  var height = $(window).height();
   $("#commentdiv").height(height-105);

  //document.getElementById('mainbody').setAttribute("style","height:395px");

}
function keyboardShowHandler(e){
//    alert('Keyboard height is: ' + e.keyboardHeight);
//    document.getElementById('mainbody').setAttribute("style","max-height:140px;min-height:140px;overflow:auto");
var height = $(window).height();
$("#commentdiv").height(height-(e.keyboardHeight/2.5));

}
