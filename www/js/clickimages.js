 var imgid;
  var currimg;
  var imgfirst=1,imgsecond=1,imgthird=1;
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value


jQuery(document).ready(function() {


  jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
    
    
    
    //camera capture
     $("#camera").click(function() {
    //$("#camera").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    capturePhoto();
    });
    
    //gallery
     $("#gallery").click(function() {
    //$("#gallery").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    getPhoto(pictureSource.SAVEDPHOTOALBUM);
   
    });


    //cancel
     $("#cancel").click(function() {
    //$("#gallery").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    });
    
    //postdata
     $("#postdata").click(function() {
     $("#postdata").css("background-color","#dfdfdf");
     location.href = "../www/postdata.html";
   
    });
    
    
//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(-1);
    navigator.app.backHistory(); 

});   

//events for image selection
//image 1
$("#img1").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"2px", 
             "border-style":"solid"});
    
  $("#img2").css('border','');  
$("#img3").css('border','');  
$("#img4").css('border','');  
currimg=1;

});

//image 2
$("#img2").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"2px", 
             "border-style":"solid"});
    
    $("#img1").css('border','');  
$("#img3").css('border','');  
$("#img4").css('border','');  
currimg=2;

});

//image 3
$("#img3").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"2px", 
             "border-style":"solid"});
    $("#img2").css('border','');  
$("#img1").css('border','');  
$("#img4").css('border','');  
    currimg=3;
    
});

//capture image
$(".circle2").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"2px", 
             "border-style":"solid"});
    
  capturePhoto()
  
});

});









    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
       //  document.addEventListener("backbutton", onBackKeyDown, false);
    }
    function onBackKeyDown() 
    {
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
       $(".circle2").css({"border-color": "#fff", 
             "border-width":"2px", 
             "border-style":"solid"});
    
       var largeImage="";
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      if(imgfirst>0)
      {
       largeImage = document.getElementById('img1');
     imgfirst=0;
     
     }
    else  if(imgsecond>0)
      {
       largeImage = document.getElementById('img2');
     imgsecond=0;
   
     }
    else  if(imgthird>0)
      {
       largeImage = document.getElementById('img3');
     }
    
    

      // Unhide image elements
      //
      largeImage.style.display = 'block';


      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      largeImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      var largeImage="";
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      if(imgfirst>0)
      {
       largeImage = document.getElementById('img1');
     imgfirst=0;
     
     }
    else  if(imgsecond>0)
      {
       largeImage = document.getElementById('img2');
     imgsecond=0;
   
     }
    else  if(imgthird>0)
      {
       largeImage = document.getElementById('img3');
     }
    
    

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      
      largeImage.src = imageURI;
      imgid=imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
    
   
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
