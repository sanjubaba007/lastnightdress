 // Wait for device API libraries to load
    //
   var i=1,j=2,count=0;
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
	
    	
		$( document ).ready(function() {
		//check for favorates added or not
  
   // $("#myfav").attr("src","img/now_favorite.png");
   $(window).scroll(function() {
  if ($(window).scrollTop() >= (($(document).height() - $(window).height()) - $('#mydiv').innerHeight())) {
    //alert('div reached');
    getPost();
  }
});
    var size=localStorage.getItem("count");
    if(size!=null)
    {
    for(i=0;i<=size;i++)
    {
       var cars = JSON.parse(localStorage["mycars"+i]);
    //   alert(cars[0]+cars[1]+cars[2]);
    if(cars[0]!='')
    {
        $("#myfav").attr("src","img/rating_icon.png");
     //    alert("favotates");    
    }
    
    }
    }
    else
    {
   //alert("no favotates");
        $("#myfav").attr("src","img/no_favorate.png");
    }
         $("#lnd").css("background-color", "#000");
   
		 $("#favorite").on("click", function() {
	 $(this).css('background-color', "#dfdfdf");
   	 
    location.href = "../www/lndfavorites.html";
   
    
});

//swipte event
$("#mydiv").on("swiperight",function(){
alert('called');
 location.href = "../www/filterdata.html";
});
   $("#back").click(function() {
    $(this).css('background-color', "#be4d66");
    window.history.back();   
  
  });
  
  // post data
  $("#post").click(function() {
    $(this).css('border', "solid 1px #be4d66");
    localStorage.removeItem("price_first");
    localStorage.removeItem("price_second");
    
    location.href = "../www/filterdata.html";
  
  });
  
  //to buy product
  	 $("#buy").on("click", function() {
    location.href = "../www/byform.html";
   
    
});
  
  //home event
     $("#home").on("click", function() {
     $(this).css("background-color", "#000");
   
    location.href = "../www/whathappeningonlnd.html";
   
    
});

//profile event
     $("#profile").on("click", function() {
     $(this).css("background-color", "#000");
   
    location.href = "../www/mainprofileview.html";
   
    
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
  
  



   
    
    
       });
    
       // document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
   
function getPost()
 {
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {rqid:5,skipdata:count} })
    .done(function(data) {  
    var json = JSON.parse(data);
 
 setup(data);
	
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { $('#pageLoader').hide();});
 
}
function setup(result)

{
  //finding device width
       var width = $(window).width();
       var w=width/3-1.4;
 

var obj = jQuery.parseJSON( result );

$.each(obj.data, function(idx, obj) {
count++;
      if(i==j)
      {
      $("#mydiv").append($('<div>',{class:'imgcontainer2',id:i}));
      j=j+3;
      }
      else
      $("#mydiv").append($('<div>',{class:'imgcontainer',id:i}));
      
     $("#"+i).width(w).height(w);
     
     //setting hidden field
     $("#"+i).append('<input type="hidden" id=myhd'+i+' />');
     $("#myhd"+i).val(obj.post_id);
     $("#"+i).css("background-image","url("+obj.image_url+")");
     
    

 
     $("#"+i).prepend($('<p>',{class:'bottom',id:'p'+i}));
     $("#p"+i).text("$"+obj.price_now); 
 
    $(document).on('click',"#"+i,function(e){
    var id=e.target.id;
    var pid=$('#myhd'+id).val();
    localStorage.setItem("postid",pid);
   // alert(this.id);
    location.href = "../www/showdetails.html";
});
i++;

});

}
function filterdata()
{

var price1=localStorage.getItem("price_first");
var price2=localStorage.getItem("price_second");
/*
var len=localStorage.getItem("length");
var utype=localStorage.getItem("type");
//color list
var colorlist = localStorage.getItem("colorlist");
var color = JSON.parse(colorlist); 
//size list
var sizelist = localStorage.getItem("sizelist");
var size = JSON.parse(sizelist); 
alert(price1+price2+len+size+utype+color.length+size.length); 

//size list
var size1=size[0];
var size2=size[1];
var size3=size[2];
var size4=size[3];
var size5=size[4];
var size6=size[5];
var size7=size[6];

//color list
var color1=size[0];
var color2=size[1];
var color3=size[2];
var color4=size[3];
var color5=size[4];
var color6=size[5];
var color7=size[6];
var color8=size[7];
var color9=size[8];
var color10=size[9];
var color11=size[10];
var color12=size[11];
var color13=size[12];
var color14=size[14];
*/

var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/postdata.php',
    data: {rqid:7,price1:price1,price2:price2} })
    .done(function(data) {  
    var json = JSON.parse(data);
 
 setup(data);
	//alert(data);
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { $('#pageLoader').hide();});
            
}
function checkfavorites()
{
 
 var size=localStorage.getItem("count");    
     if(size!=null)
   {
       alert('favorites available');
    for(i=0;i<=size;i++)
    {
       var cars = JSON.parse(localStorage["mycars"+i]);
    //   alert(cars[0]+cars[1]+cars[2]);
    if(cars[0]!='')
      {
      }
    }
   }
   else
   alert('nothing on favorite');
}
var price1=localStorage.getItem("price_first");
if(price1==null)
getPost();
else
filterdata();
//checkfavorites();


$(document).ready(function(){
	$(".search-box").keyup(function(){
    
		$.ajax({
		type: "POST",
		url: "http://52.74.70.40/lnd/postdata.php",
		data:'keyword='+$(".search-box").val(),
		beforeSend: function(){
		
			$(".search-box").css("background","#FFF url(img/LoaderIcon.gif) no-repeat 90%");
		
		},
		success: function(data){
			
      //  alert(data);
			 $("#mydiv").empty();
      setup(data);
			$(".search-box").css("background","#FFF");
		
		}
     
		});
	});
});

