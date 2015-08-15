var i=1,j=2;
$(document).on("pagecreate", function () {
    $("#myPopup2").popup({
        beforeposition: function () {
           $(this).css({
                width: window.innerWidth-33,
                height: window.innerHeight/2-30,
       
            });
        },
        x: 50,
        y: 50
    });
});
document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown(e) {
 // e.preventDefault();
alert('pressed');
 }
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
	
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
  //document.addEventListener("backbutton", onBackKeyDown, false);

    }

    // onSuccess Geolocation
    //
    function onSuccess(position) 
	{
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
							*/
 var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      ReverseGeocode(latitude,longitude);
	}

    // onError Callback receives a PositionError object
    //
    function onError(error) 
	{
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
function ReverseGeocode(latitude, longitude)
{
  var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key=AIzaSyA9XXwkzvuaTBuSs9ie2ldjgeDChNVL1DQ";

$.getJSON(geocodingAPI, function (json) {
    if (json.status == "OK") {
        //Check result 
		
        var result = json.results[0];
	
        //look for locality tag and administrative_area_level_1
        var city = "";
        var state = "";
        for (var i = 0, len = result.address_components.length; i < len; i++) {
            var ac = result.address_components[i];
            if (ac.types.indexOf("administrative_area_level_1") >= 0) 
			{
			state = ac.long_name;
         
        localStorage.setItem("state",state);
		}
		 if (ac.types.indexOf("administrative_area_level_2") >= 0) 
			{
			city = ac.long_name;
         
        localStorage.setItem("city",city);
		 
		}
		 $("#location").text(city+","+state); 
  
		}
        if (state != '') {
            console.log("Hello to you out there in " + city + ", " + state + "!");
        }
    }

});
}
  
function onBackKeyDown() {
    // Handle the back button
      $( "#myPopup" ).popup( "close" );
}


$(document).ready(function(){


//event to close blur div
$("#shadowdiv").click(function(){
$("#shadowdiv").hide();  
});


 var width = $(window).width();
  
       var w=(width*70)/100;
        $("#ddiv").width(w);
          $("#desc").width(w);
  // $("#shadowdiv").width(width);
 //      $("#shadowdiv").height(height);   
  $("#shadowdiv").hide();  
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
     //$(this).css("background-color", "#be4d66");
   
   var utype=localStorage.getItem("type");
    //alert(utype);
    
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
        $("#shadowdiv").show();  
$( "#myPopup2" ).popup( "open" );


    });
    $("#cancel").click(function(){
       
$("#cancel").css('background-color','#be4d66');
 $("#shadowdiv").hide();  
$( "#myPopup2" ).popup( "close" );
$("#cancel").css('background-color','#ffffff');

    });
    $("#more").click(function(){
$("#more").css('background-color','#be4d66');
       $("#shadowdiv").hide();
//$( "#myPopup2" ).popup( "close" );
location.href = "../www/privacypolicy.html";

    });
    
   

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
   
    localStorage.setItem("postid",e.target.id);
    var utype= localStorage.getItem("type");
   
    if(utype=="private")
    location.href = "../www/showdetails.html";
   else
    location.href = "../www/shopshowdetails.html";
   
});
i++;

});



 // $( "#myPopup" ).popup( "open" );




}
function getData()
 {
var un= localStorage.getItem("uname");
//alert(un);
var i;
  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:un,rqid:3} })
    .done(function(data) {  
      
    var json = JSON.parse(data);
    localStorage.setItem("type",json.type);
 $(".bank").text(json.bank); 
 $(".swaps").text(json.swaps); 
 $(".follower").text(json.followers); 
 $(".following").text(json.following);
 if(json.desc=='')
 $("#desc").text('Describe  yourself  here...');
 else
 $("#desc").text(json.desc); 
 
 localStorage.setItem("userinfo",data);
//alert(data);
 var rating=json.rating_status/1;
 for(i=0;i<2;i++)
 {
   $("#stars").append($('<img>',{id:'theImg'+i,src:'img/rating_icon.png',style:'margin-left:5px;width:15px;height:15px'}));
   
 }
 for(i=0;i<5-2;i++)
 {
   $("#stars").append($('<img>',{id:'theImg'+i,src:'img/rating_icon2.png',style:'margin-left:5px;width:15px;height:15px'}));
   
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
	
      
       // alert('works');
    })
    .fail(function() { alert("unable to load post info"); })
    .always(function() { });
 
 
}
getPost();
getData();