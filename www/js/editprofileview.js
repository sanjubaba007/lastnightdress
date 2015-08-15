var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
var imgid='';
$(document).ready(function(){
$('#pageLoader').hide();
   var data= localStorage.getItem("userinfo");
      var json = JSON.parse(data);
      $('#largeImage').attr('src',json.imageurl);
     $( "#largeImage" ).addClass( "circle" );
     $("#email").val(json.email);
     $("#uname").val(json.uname);
     $("#desc").val(json.desc);
     
      var city= localStorage.getItem("city");
     var state= localStorage.getItem("state");
$("#location").text(city+","+state); 
     
//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 

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
    location.href = "../www/instructionpage.html";
   
    
});
//camera event
     $("#changepass").on("click", function() {
    $(this).css("background-color", "#be4d66");
    location.href = "../www/changepassword.html";
   
    
});

//edit image event
     $("#edit").on("click", function() {
getPhoto(pictureSource.SAVEDPHOTOALBUM);
   
    
});
//save info event
     $("#save").on("click", function() {
     $(this).css("background-color", "#dfdfdf");
   if(imgid=='') 
lndUpdate();  
else 
  uploadwithimage();
});

});


document.addEventListener("deviceready",onDeviceReady,false);
 function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
       //  document.addEventListener("backbutton", onBackKeyDown, false);
    }
    
    
     function getPhoto(source) {
    
   
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
    
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
      imgid=imageURI;
    }
    
      function onFail(message) {
      alert('Failed because: ' + message);
    }
    
    function lndUpdate()
    {
    $('#pageLoader').show();
     var uid=localStorage.getItem("uname");
     uname =document.getElementById("uname").value,
     email =document.getElementById("email").value,
     desc =$("#desc").val();
   
     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:uname,email:email,desc:desc,uid:uid,rqid:9} })
    .done(function(data) {  
    var json = JSON.parse(data);
 	if(json.status==true)
 	{
 	alert(json.message);
    localStorage.setItem("uname",json.uname);

 	}
 	else
 	{
 	alert(json.message);
 	
 	}
 	
    })
    .fail(function() { alert("Problem in updating profile info"); })
    .always(function() {$('#pageLoader').hide();$("#save").css("background-color", "#fff");});

    }
    
   

//Success callback
function win(r) {
    $('#pageLoader').hide();
    
   var json = JSON.parse(r.response.toString());
   if (json.status == false)
	{
	alert(json.message);
	
	}
	else
	{
	 alert(json.message);
	
     if(json.imageurl!=null)
     localStorage.setItem("url",json.imageurl);
     localStorage.setItem("uname",json.uname);
   // location.href = "../www/mainprofileview.html"; 
    
	}
   
}

function fail(error) {
$('#pageLoader').hide();
    
    alert("Problem "+error.message);
    
}
//upading profile with images
    function uploadwithimage()
{
  alert('uploading with image');
$('#pageLoader').show();

   var uid=localStorage.getItem("uname");
    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    var params = {};
    params.desc =document.getElementById("desc").value;
     
     params.uname =document.getElementById("uname").value;
     params.email =document.getElementById("email").value;
     
    params.uid=uid;
     params.rqid= 9;
     options.params = params;
     var ft = new FileTransfer();
   
  ft.upload(imgid, encodeURI("http://52.74.70.40/lnd/lndusers.php"), win, fail, options);
 }