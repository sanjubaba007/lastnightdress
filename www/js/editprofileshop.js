var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
var imgid='';
$(document).ready(function(){
$('#pageLoader').hide();
    var data= localStorage.getItem("userinfo");
   
      var json = JSON.parse(data);
      $('#largeImage').attr('src',json.imageurl);
     $( "#largeImage" ).addClass( "circle" );
     $("#cemail").val(json.email);
     $("#uname").val(json.uname);
     $("#cname").val(json.cname);
     $("#city").val(json.city);
     $("#zipcode").val(json.zipcode);
     $("#country").val(json.country);
     $("#desc").val(json.desc);
   
     $("#address").val(json.address);
     var city= localStorage.getItem("city");
     var state= localStorage.getItem("state");
$("#location").text(city+","+state); 
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

//done event
     $("#done").on("click", function() {
    $(this).css("background-color", "#dadada");
     if(imgid=='')
uploaddata();   
else 
uploadwithimage();
    
});

//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 

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
     function win(r) 
        {
          $('#pageLoader').hide();

            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
			alert("profile updated successfully");
	 var json = JSON.parse(r.response.toString());
   
  //		var json = JSON.parse(r.response.toString());
   if (json.status == false)
	{
	alert(json.message);
	
	}
	else
	{
	 //localStorage.setItem("uname",json.uname);
   if(json.imageurl!=null)
    localStorage.setItem("url",json.imageurl);
    
    // location.href = "../www/mainprofileview.html"; 
   
	}
			
			
        }

        function fail(error) 
        {
           $('#pageLoader').hide();
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        
		}
/*function uploaddata()
{
 var uname= localStorage.getItem("uname");
alert(imgid);
var options = new FileUploadOptions();
            options.fileKey="file";
			var userid = '123456';
            var imagefilename = userid + Number(new Date()) + ".jpg";
            options.fileName = imagefilename;
            options.mimeType="image/jpeg";

            var params = {};
     params.rqid=10;
     params.uid=uname;
     
     params.desc =document.getElementById("desc").value;
          
     params.uname =document.getElementById("uname").value;
     params.email =document.getElementById("cemail").value;
     params.upass =document.getElementById("cname").value;
     params.cpass =document.getElementById("address").value;
     params.cname =document.getElementById("city").value;
     params.city =document.getElementById("zipcode").value;
     params.zcode =document.getElementById("country").value;
     
           
           
            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imgid, encodeURI("http://52.74.70.40/lnd/lndusers.php"), win, fail, options);
}*/

function uploaddata()
    {
    $('#pageLoader').show();
     rqid=10;
     uid=localStorage.getItem("uname");
     
     desc =document.getElementById("desc").value;
          
     uname =document.getElementById("uname").value;
     email =document.getElementById("cemail").value;
     cname =document.getElementById("cname").value;
     address =document.getElementById("address").value;
     city =document.getElementById("city").value;
     zipcode =document.getElementById("zipcode").value;
     country =document.getElementById("country").value;

     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {rqid:rqid,uid:uid,desc:desc,uname:uname,email:email,cname:cname,address:address,city:city,zipcode:zipcode,country:country} })
    .done(function(data) {  
    var json = JSON.parse(data);
 // alert(data);
   if (json.status == false)
	{
	alert(json.message);
	
	}
	else
	{
	alert(json.message);
	
	}
 	
    })
    .fail(function() { alert("Problem seems network problem"); })
    .always(function() {$('#pageLoader').hide();$("#done").css("background-color", "#fff"); });

    }
    
   //upading profile with images
    function uploadwithimage()
{
 // alert('uploading with image');
$('#pageLoader').show();

//if(camgal==2)
//imgid = imgid.replace("%", "%25");
    var uid=localStorage.getItem("uname");
    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    var params = {};
 //   params.imgid = imgid;
   // params.userid = sessionStorage.loginuserid;
     params.desc =document.getElementById("desc").value;
     
     params.uname =document.getElementById("uname").value;
     params.email =document.getElementById("cemail").value;
     params.address =document.getElementById("address").value;
     params.cname =document.getElementById("cname").value;
     params.city =document.getElementById("city").value;
     params.zipcode =document.getElementById("zipcode").value;
     params.country =document.getElementById("country").value;
    params.uid=uid;
     params.rqid= 10;
     options.params = params;
    // options.chunkedMode = false;
    var ft = new FileTransfer();
    // var url = "http://52.74.70.40/lnd/lndusers.php"; 
   
  ft.upload(imgid, encodeURI("http://52.74.70.40/lnd/lndusers.php"), win, fail, options);
 }