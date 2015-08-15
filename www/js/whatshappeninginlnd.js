
    // Wait for device API libraries to load
    //
    var mypid="";
    var check=0,check2=0,i=0,pos=0,cmntno=0,count=0,curpostid;
    var queryArr=[];
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

 $(document).on("pagecreate", function () {
    $("#myPopup2").popup({
        beforeposition: function () {

            $(this).css({
                width: window.innerWidth-22,
                height: window.innerHeight/2-30,
                margin:10
            });
        },
      });
});

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener

		$( document ).ready(function() {

         $("#shadowdiv").hide();
     //hide full screen div
     $("#shadowdiv").click(function(){
$("#shadowdiv").hide();
$('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
});


        //comment box back
         $("#back-comment").click(function()
     {
     $("#cmntdialog").hide();
     });
  //events to detect popupbeforeopen
  $( "#myPopup" ).popup({
   afteropen: function( event, ui ) {

  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
});
  }
});

  //events to detect popupbeforeopen
  $( "#myPopup" ).popup({
   afterclose: function( event, ui ) {

 $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});
  }
});


     var height = $(window).height();
   var w = $(window).width();


    $("#commentdiv").height(height-60);

   //hide progressbar
   $('#pageLoader').hide();

   //event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');

       history.go(0);
    navigator.app.backHistory();

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


//camera event
     $("#camera").on("click", function() {
    $(this).css("background-color", "#be4d66");
   if(localStorage.getItem("ins")==null)
    location.href = "../www/instructionpage.html";
   else
    location.href = "../www/clickimages.html";



});

     //inbox event
     $("#inbox").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/inbox2.html";


});

 //profile event
     $("#profile").on("click", function() {
    $(this).css("background-color", "#000");
    location.href = "../www/mainprofileview.html";


});
//detect window scroll
jQuery(
  function($)
  {
    $('#commentdiv').bind('scroll', function()
                              {
                                if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
                                {
                                    if(check2==1)
                                    {
                                         getComments(curpostid);
                                 //   alert('end reached');
                                
                                    }
                                }
                              })
  }
);
//send button
$("#send").click(function(){
     var now = new Date().toLocaleString();

     var message=document.getElementById("msg").value;
    // alert(message);
    var un= localStorage.getItem("uname");
    var ppic= localStorage.getItem("url");

    $("#commentdiv").append('<table style="width:100%;table-layout: fixed;"><tr><td style="width:50px;vertical-align:top" ><img src="'+ppic+'" class="circle" /></td><td style="vertical-align:top;padding-top:10px"><p style=" word-break:break-all;font-family:ppfont;font-size:14px;margin:0px;padding:0px"><span style="font-size:14px;font-family:unfont;text-transform: capitalize;font-size:16px;color:#be4d66">'+un+'  </span>'+message+'</p><br/><div style="margin-top:-15px"><time class="timeago" datetime="'+now+'" style="font-size:14px;color:#dadada;"></div></td></tr></table>');
$(".timeago").timeag();


     postComment(mypid,message);
document.getElementById("msg").value="";
});
   getData();
    //setup();


       });
    }

    // Handle the back button
    //
    function onBackKeyDown() {
    	alert('device backbutton pressed');

	}
function setup(result)
{
//get widdth and height of the screen
var w = $(window).width();

var h=$(window).height();

h=(h*70)/100-110;

$('#pageLoader').hide();


var obj = jQuery.parseJSON(result);
var postid;
var imgurl = [];
var price=[];
$.each(obj.data, function(idx, obj)
{
postid=obj.post_id;


var data=localStorage.getItem(postid);
//pushing data to array
var locations = {
post_id:postid,
imgurl:obj.imageurl
  }
  var mid="myfav"+postid;
var queryStr = {mid:locations} ;
queryArr.push(queryStr);

imgurl[postid]=obj.imageurl;
price['p'+postid]=obj.price_now;
//end here
 //alert(obj.username);
 $("#dynamictable").append($('<div>',{class:'mydiv',id:'table'+i,style:'margin-top:30px;width:100%'}));


$('#table'+i).append('<table style="width:100%"><tr><td style="width:50px"><img src="' +obj.profile_pic + '" class="circle"/></td><td style="vertical-align:middle"><div style="width:100%;margin-top:2px"><label  style="color:#be4d66;width:100%;text-align:left; text-transform: capitalize;margin-top:0px;font-family:unfont;font-family:unfont">'+obj.uname+'<time class="timeago" datetime="2015-07-19 20:00" style="font-size:14px;color:#dadada;text-transform: lowercase;margin-left:5px"></label></div></td><td style="align:right"><div style="float:right;margin-right:1px"><div style="width:100%"><img  src="img/empty_like.png" width="23" height="23" class=theImg'+postid+' id="'+postid+'" /></div></div><div style="float:right;margin-right:10px"><div style="width:100%"><img src="img/comment_icon.png" width="20" height="20" id='+postid+'c class="do'+postid+' style="margin-top:1px"></div><div style="width:100%;margin-top:4px"><label style="color:#be4d66;width:100%;text-align:center;font-size:12px">'+obj.comments+'</label></div></div><div style="float:right;margin-right:10px" ><div style="width:100%"><img class="'+postid+'" src="img/unlike_icon.png" width="25" height="25" /></div><div style="width:100%"><label style="color:#be4d66;width:100%;text-align:center;font-size:12px" class="totallikes'+postid+'" >'+obj.likes+'</label></div></div></td></tr></table>');
$(".timeago").timeago();

//comparing strings
 var n = "1".localeCompare(obj.like);
if(n==0)
$("."+postid).attr('src','img/like_icon.png');
else
$("."+postid).attr('src','img/unlike_icon.png');

 //setting favorates icon
 if(data!=null)
{
$(".theImg"+postid).attr('src','img/rating_icon.png');

}
else
{
$(".theImg"+postid).attr('src','img/empty_like.png');

}

//$('#lndmydiva'+i).append('<div style="float:left;width:15%;margin-top:1px"><center><img src="' +obj.profile_pic + '" align="center" class="circle"/></center></div><div style="float:left;width:75%"><label  style="color:#be4d66;width:100%;text-align:left; text-transform: capitalize;margin-top:13px;//font-family:unfont;font-family:unfont">'+obj.uname+'</h4></div><div style="float:left;width:10%"><label style="color:#DADADA;text-align:center;margin-top:12px">3d</p></div>');

$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydiva'+i,style:'clear:both;margin-top:-2px;position:relative'}));

$("#mydiva"+i).prepend($('<div>',{class:'imgcontainer',id:'myimg'+postid}));
     $("#myimg"+postid).width(w).height(h);
     $("#myimg"+postid).css("background-image","url("+obj.imageurl+")");

 //setting liked or unliked icon
 /*if(data!=null)
{
 $("#mydiva"+i).prepend($('<div>',{class:'top',id:'favorite'+i}));

 $("#favorite"+i).append($('<img>',{id:'theImg'+i,src:'img/rating_icon.png',style:'width:23px;height:23px'}));

}
else
{
 $("#mydiva"+i).prepend($('<div>',{id:'pacman',class:"myfav"+postid,style:'float:right'}));
 $(".myfav"+postid).prepend($('<img>',{id:postid,class:'theImg'+i,src:'img/rating_star.png',style:'position:absolute;top:-30px;left:-11px;z-index:5;width:23px;height:23px'   }));

}*/

//div icons for swipe
$("#mydiva"+i).prepend($('<div>',{class:'bottom',id:'delipckup'+i,style:'width:100%;height:20px;'}));

$("#delipckup"+i).prepend($('<div>',{class:'mylist',id:'showpos'+postid,style:'float:left;'}));


 // $("#delipckup"+i).prepend($('<div>',{class:'mylist',id:'showpos',style:'float:left;'}));

  $("#showpos"+postid).append('<img src="img/white_icon.png" id=0'+postid+' class="swipeicon"/>');
  $("#showpos"+postid).append('<img src="img/black_icon.png" style="margin-left:5px" id=1'+postid+' class="swipeicon" />');
  $("#showpos"+postid).append('<img src="img/black_icon.png" style="margin-left:5px" id=2'+postid+' class="swipeicon" />');
  $("#showpos"+postid).append('<img src="img/black_icon.png" style="margin-left:5px" id=3'+postid+' class="swipeicon" />');


$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivb'+i,style:'padding-left:10px;padding-top:3px;padding-bottom:10px;padding-right:10px'}));

$('#mydivb'+i).append('<table width=100%></table>');

$('#mydivb'+i).children().append("<tr><td><div><label style='float:left;font-weight:bold;font-size:17px;color:#dadada'><del>$"+obj.price_was+"</del></label> <label style='margin-left:10px;float:left;font-weight:bold;font-size:17px'>$"+obj.price_now+"</label></div></td><td align:right><label align='right'style='margin-right:1px;font-size:16px;display:block;text-align:right;padding-right:0px;font-weight:bold;'><span style='color:#dadada'>Size</span> XS</label></td></tr>");
 //sell or buy

$("#dynamictable").append('<div style="width:102%;background-color:#be4d66;margin-top:-15px"><div id="buy"  class=buy'+postid+' style="width:49%;height:40px;background-color:#be4d66;float:left;color:white;"><center><table style="height:40px"><tr><td style="vertical-align:middle"><img id="buy"  src="img/shopping.png" style="width:20px;height:20px" /></td> <td style="vertical-align:middle"><label id="spaytxt" style="shadow:none">Buy</span></td></tr></table></center></div><div  style="width:1px;height:40px;background-color:#DADADA;float:left"></div><div id="swap" class=swap'+postid+' style="width:49%;height:40px;background-color:#be4d66;float:left;color:white;"><center>  <table style="height:40px"><tr><td style="vertical-align:middle"><img src="img/exchange_icon.png" style="width:20px;height:20px"  /></td><td style="vertical-align:middle"><label id="swaptxt" style="shadow:none;text-style:none">Swap</span></td></tr></table> </center></div></div>');

//reading comments
var mycomments = JSON.stringify(obj.commentsdetails);


$.each($.parseJSON(mycomments), function(idx, obj1) {
	$("#dynamictable").append('<table style="width:100%;table-layout: fixed;margint-top:3px"><tr><td style="width:50px;vertical-align:top" ><img src="'+obj1.imgurl+'" class="circle" /></td><td style="vertical-align:middle;padding-top:0px"><p style=" word-break:break-all;font-family:ppfont;font-size:14px;display:inline"><span style="font-size:14px;font-family:unfont;text-transform: capitalize;font-size:16px;color:#be4d66">'+obj1.uname+'  </span>'+obj1.comment+'</p><br/></td></tr></table>');

});

//for uname and message
$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivbc'+i,style:'padding-left:10px;padding-top:3px;padding-bottom:10px;padding-right:10px'}));


    if(mycomments=="[]")
    {
//view all comments
$("#dynamictable").append($('<hr>',{color:'#ffffff'}));
$("#dynamictable").append($('<div>',{id:'cmnt2'+i,}));
$("#cmnt2"+i).append($('<hidden>',{value:i,id:'hidd'+obj.post_id}));
//hidden field
$("#mydivd"+i).append('<input type="hidden" id=hidd'+obj.post_id+' />');
$('#hidd'+obj.post_id).val(obj.uname);



$("#cmnt2"+i).append($('<a>',{id:obj.post_id+'d',class:'viewcmnt'+i,style:'color:#dadada;font-size:15px;text-decoration:none;margin-left:10px;font-family:ppfont;margint-top:5px'}));
$(".viewcmnt"+i).text("View "+obj.comments+ " Comments");


    }

//end here


$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivc'+i,style:'padding-left:10px;padding-top:3px;padding-bottom:10px;padding-right:10px;clear:both'}));
$("#mydivc"+i).append($('<label>',{class:obj.uname,id:'data'+i,style:'text-align:left'}));
$("#data"+i).prepend($('<span>',{id:'span'+i,style:'color:#be4d66;margin-right:0px;font-weight:bold;font-size:16px;text-transform: capitalize;font-family:unfont'}));
$("#span"+i).text(obj.uname);
$("#data"+i).append("        "+obj.description);
$("#dynamictable").append($('<div>',{class:'mydiv',id:'mydivd'+i,style:'margin-top:-10px;clear:both;width:100%;padding-left:10px'}));
$("#mydivd"+i).append($('<div>',{id:'cmnt'+i,style:'float:left'}));
$("#cmnt"+i).append($('<a>',{id:obj.post_id+'c',class:'do'+obj.post_id,style:'color:#dadada;font-size:15px;text-decoration:none;font-family:ppfont'}));
$(".do"+obj.post_id).text("Comment");




//event for swiperight
//on screen swipe right
 $("#myimg"+postid).on("swiperight",function(){
 var pid=this.id;
  pid=pid.substring(5,pid.length);
  pos--;
 if(pos==-1)
 pos=3;
  change(pos+pid);

  });

//on screen swipe left
$("#myimg"+postid).on("swipeleft",function(){

 var pid=this.id;
  pid=pid.substring(5,pid.length);
   pos++;
 if(pos==4)
 pos=0;
  change(pos+pid);

 });

//events for favorite
$(".theImg"+postid).click(function()
    {

    var mypid=this.id;
  //  $(".myfav"+this.id).css('border-color','transparent');
  $(this).attr('src','img/rating_icon.png');


var data=localStorage.getItem(mypid);
if(data!=null)
{
//alert("available");

}
else
{
//alert("not available");


var pos=localStorage.getItem("count");
if(pos==null)
{
//alert('not available');
pos=0;
}
else
{
//alert(pos);
pos++;
}
//postid,image_url,cost
var mycars=new Array();
mycars[0] = mypid;
mycars[1] = imgurl[mypid];
mycars[2] = price['p'+mypid];
localStorage.setItem("count",pos);
localStorage.setItem(mypid,"hello");

localStorage["mycars"+pos] = JSON.stringify(mycars);
alert('Added to your favorites');




}
 });


//comment button open
$("body").on("click", ".do"+postid, function (e)
    {
        count=0;
	  var height = $(window).height();
   var w = $(window).width();


     $("#cmntdialog").show();
	   $("#header").height(40);
     $("#commentdiv").height(height-105);
		 $("#cmntbox").height(60);
    var pid=e.target.id;
     pid=pid.substring(0,pid.length - 1);

	//like(myClass);
	$(".mycmntdiv").empty();
$("#commentdiv").empty();
    check=1;
    check2=2;
   mypid=pid;
    getComments(pid);
   $("#myPopup").popup("open");

});


//buy form
$("body").on("click", ".buy"+postid, function (e)
    {
location.href = "../www/buyform.html";

	});

//buy form
$("body").on("click", ".swap"+postid, function (e)
    {
        $("#shadowdiv").show();
$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
});
w= window.innerWidth-22,
height= window.innerHeight/2-30,
$( "#mydiv").width(w).height(height);
     // $( "#myPopup2" ).popup( "open" );

	});


//end here

$("body").on("click", ".viewcmnt"+i, function (e)
    {

count=0;
	 var height = $(window).height();
   var w = $(window).width();

     $("#cmntdialog").show();
	   $("#header").height(40);
     $("#commentdiv").height(height-105);
		 $("#cmntbox").height(60);
    check=2;
    check2=1;
     var pid=e.target.id;
     pid=pid.substring(0,pid.length - 1);
   $(".mycmntdiv").empty();
   $("#commentdiv").empty();
    curpostid=pid;
     getComments(pid);
   $("#myPopup").popup("open");
	});


	$("body").on("click", "."+postid, function (e)
    {

     //  alert(localStorage.getItem("imageid"));
	//$( "#myPopup" ).popup( "open" );
	//location.href = "../www/viewcomments.html";
	//window.location = "viewcomments.html";
	var myClass = $(this).attr("class");

	like(myClass);

	});

	$("body").on("click", ".myimg"+i, function (e)
    {


//	var myClass = $(this).attr("class");
  // alert(e.target.id);
   var url=$('#'+e.target.id).attr('src');
	 $("#display").attr("src",url);
    $( "#popupPhotoPortrait" ).popup( "open" );


	});

	//showing user profile info
	$("body").on("click", "#data"+i, function (e)
    {


	var myClass = $(this).attr("class");

  // alert(e.target.id);
//  var idval='hidd'+e.target.id;
	//alert($("#idval").val());
	localStorage.setItem("uname",myClass);
	location.href = "../www/userprofileview.html";

	});

//comment div
$("#dynamictable").append($('<div>',{class:'mydiv',id:'commentbox'+obj.post_id,style:'padding-top:15px;'}));

/*$("#commentbox"+i).append($('<div>',{class:'mydiv',id:'mydivde'+i,style:'margin-top:0px;height:45px;padding:5px'}));
$("#mydivde"+i).append($('<div>',{id:'mydivinput'+i,style:'margin-top:0px;width:72%;height:45px;;float:left'}));
$("#mydivinput"+i).append('<input type="text" id="msg"+i style="width:100%;height:42px"/>');
$("#mydivde"+i).append($('<div>',{id:'mydivbtn'+i,style:'margin-top:0px;width:22%;height:45px;float:left;margin-left:2%;margin-right:3%'}));
$("#mydivbtn"+i).append('<button id="send"+i style="width:100%;height:45px;float:left">Send</button>');*/


i++;
});

}

function display(result)
{
    //alert(result);





//    $("#comentdiv").empty();
var obj = jQuery.parseJSON(result);
//alert(obj.data.length);​
$.each(obj.data, function(idx, obj)
{
count++;    
$("#commentdiv").append('<table style="width:100%;table-layout: fixed;"><tr><td style="width:50px;vertical-align:top" ><img src="'+obj.imgurl+'" class="circle" /></td><td style="vertical-align:top;padding-top:10px"><p style=" word-break:break-all;font-family:ppfont;font-size:14px;margin:0px;padding:0px"><span style="font-size:14px;font-family:unfont;text-transform: capitalize;font-size:16px;color:#be4d66">'+obj.uname+'  </span>'+obj.comment+'</p><br/><div style="margin-top:-15px"><time class="timeago" datetime="'+obj.time+'" style="font-size:14px;color:#dadada;"></div></td></tr></table>');
$(".timeago").timeag();
});
if(check==1)
$("#commentdiv").animate({ scrollTop: $("#commentdiv")[0].scrollHeight}, 1000);



}
function like(cls)
    {
    var un= localStorage.getItem("uname");
   var url= localStorage.getItem("url");
    var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndlikeunlike.php',
    data: {userid:un,postid:cls,image_url:url} })
    .done(function(data) {
    var json = JSON.parse(data);

    if (json.status == true)
	{
	if(json.value==2)
	{
        $("."+cls).attr('src','img/like_icon.png');

	var txt = $('.totallikes'+cls).html();
	txt=txt/1+1;
	$('.totallikes'+cls).html(txt);
	}
	else
	{


    var txt = $('.totallikes'+cls).html();
	txt=txt/1-1;
	$('.totallikes'+cls).html(txt);
		$("."+cls).attr('src','img/unlike_icon.png');
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

function getData()
 {
   $("#commentdiv").empty();
  var un= localStorage.getItem("uname");

  $('#pageLoader').show();
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {rqid:4,uname:un} })
    .done(function(data) {
 // alert(data);
	setup(data);
    })
    .fail(function() { alert("error"); })
    .always(function() {$('#pageLoader').hide(); });

}

function postComment(postid,message)
 {
     count++;
       $("#sendimg").attr("src","img/send_loader.gif");

 var un= localStorage.getItem("uname");
   var url=localStorage.getItem("url");

     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndcomments.php',
    data: {uname:un,postid:postid,comment:message,imgurl:url,rqid:1} })
    .done(function(data) {
    var json = JSON.parse(data);

    if (json.status == true)
	{
//	 alert(json.message);
	}

	else
	{
	alert(json.message);

	}

    })
    .fail(function() { alert("error on posting comment");
    })
    .always(function() { $("#sendimg").attr("src","img/send_icon.png");});
}
function showcomments()
{
alert('hello');
/*var i=0;

for(i=1;i<=10;i++)
{

$("#commentbox0").append('<div style="width:100%;clear:both;padding-top:15px"><div style="width:10%;float:left;padding-left:2%"><img src="img/actress1.jpg" align="center" class="circle" /></div><div style="width:88%;height:50px;float:left"><label style="color:#be4d66;font-size:18px;text-decoration:none;float:left;margin-left:10px;padding-top:6px">sanjay singh bisht</label></div></div>');
$("#commentbox0").append('<div style="width:100%;clear:both"></div><div style="width:80%;margin-left:12%"><label style="color:#000;font-size:18px;text-decoration:none;float:left;margin-left:10px;padding-top:6px">message goes here message goes here</label></div></div>');
$("#commentbox0").append('<div style="width:100%;clear:both"></div><div style="width:80%;margin-left:12%"><label style="color:#000;font-size:18px;text-decoration:none;float:left;margin-left:10px;padding-top:6px">08/05/2015</label></div></div>');
}
*/
}
function getComments(postid)
 {

     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndcomments.php',
    data: {rqid:2,postid:postid,skipdata:count} })
    .done(function(data) {
    var json = JSON.parse(data);
 // alert(data);
    display(data);

    })
    .fail(function() { alert("error");
    })
    .always(function() {$('#pageLoader').hide(); });
}
$( document ).on( "pagecreate", function() {
$("#display").attr("src","img/actress2.jpg");
    $( ".photopopup" ).on({

        popupbeforeposition: function() {

            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );


        }
    });

    //close div
     $("#cancel").click(function(){
    $("#shadowdiv").hide();
    $( "#myPopup2" ).popup( "close" );
$('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});


    });


    //end

    //close div
     $("#continue").click(function(){
    $("#shadowdiv").hide();
    $( "#myPopup2" ).popup( "close" );
$('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
});


    });


    //end


    $("#myimg").click(function(){

    $("#display").attr("src","img/actress1.jpg");
    $( "#popupPhotoPortrait" ).popup( "open" );

});
});
function change(id)
{
  var   pid=id.substring(1,id.length);
$('#0'+pid).attr("src",'img/black_icon.png');
$('#1'+pid).attr("src",'img/black_icon.png');
$('#2'+pid).attr("src",'img/black_icon.png');
$('#3'+pid).attr("src",'img/black_icon.png');
$('#'+id).attr("src",'img/white_icon.png');


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
//alert(e.keyboardHeight);

}
