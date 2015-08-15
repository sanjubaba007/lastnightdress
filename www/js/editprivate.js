    var black=0,silver=0,orange=0,white=0,gold=0,brown=0,red=0,purple=0,nude=0,blue=0,yellow=0,gray=0,green=0,pink=0,pattern=0,all=0,short=0,long=0,neither=0,size1=0,size2=0,size3=0,size4=0,size5=0,XL=0,size7=0,condition=0;;
    var size;
    var color=[];
    var imgid;
    var c;
    var uname="deven";
    var len,transportation='pickup',selectcondition='';
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currimg=0;
    var imgid1,imgid2,imgid3,imgid4;
	 var d = new Date();
	var pi='lnd'+d.getTime();
    // Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() 
    {
      pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        
		aj();
    }

    // Handle the back button
    //
    function onBackKeyDown() 
    {
    	alert('device backbutton pressed');
    
	}
function onPhotoURISuccess(imageURI) {
      var largeImage="";
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      
      if(currimg==1)
      {
       largeImage = document.getElementById('img1');
       largeImage.src = imageURI;
      imgid=imageURI;
       imgid1=imgid;
     }
    else  if(currimg==2)
      {
       largeImage = document.getElementById('img2');
       largeImage.src = imageURI;
      imgid=imageURI;
       imgid2=imgid;
     }
    else  if(currimg==3)
      {
       largeImage = document.getElementById('img3');
       largeImage.src = imageURI;
      imgid=imageURI;
       imgid3=imgid;
     }
     else if(currimg==4)
      {
       largeImage = document.getElementById('img4');
       largeImage.src = imageURI;
      imgid=imageURI;
       imgid4=imgid;
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
    function getPhoto(source) {
    
   
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,correctOrientation:false, encodingType: Camera.EncodingType.PNG,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
     // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
$( document ).ready(function() {
   //alert(localStorage.getItem("item"));
   
   //event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 
});   
  
  
   
   //default values
  // $("#short").css("background-color", "#be4d66");
  // $("#pickup").css("background-color", "#be4d66");
    
   // events for user selection on transportation
   
    $("#pickup").on("click", function() {
  
    $(this).css("background-color", "#be4d66");
     $("#delivery").css("background-color", "#000000");
   
    
});
    $("#delivery").on("click", function() {
    
    $(this).css("background-color", "#be4d66");
     $("#pickup").css("background-color", "#000000");
   
});
//events for color selection
   //black
    $("#black").on("click", function() {
    
        myFunction('black');
    
});
//silver
 $("#silver").on("click", function() {
     myFunction('silver');
});
//orange
 $("#orange").on("click", function() {
     myFunction('orange');
    
});

//white
 $("#white").on("click", function() {
     myFunction('white');
});

//gold
 $("#gold").on("click", function() {
  myFunction('gold');
    
});

//brown
 $("#brown").on("click", function() {
     myFunction('brown');
    
});

//red
 $("#red").on("click", function() {
   myFunction('red');
});

//purple
 $("#purple").on("click", function() {
  myFunction('purple');
    
});

//nude
 $("#nude").on("click", function() {
      myFunction('nude');
    
});

//blue
 $("#blue").on("click", function() {
    myFunction('blue');
});

//yellow
 $("#yellow").on("click", function() {
    myFunction('yellow');
    
});

//gray
 $("#gray").on("click", function() {
    myFunction('gray');
    
});

//green
 $("#green").on("click", function() {
   myFunction('green');
    
});

//pink
 $("#pink").on("click", function() {
  myFunction('pink');
});

//pattern
 $("#pattern").on("click", function() {
    myFunction('pattern');
   
});

//action for length selection
//short
$("#short").on("click", function() {
    $("#short").css("background-color", "#be4d66");
    $("#long").css("background-color", "#000000");
    $("#neither").css("background-color", "#000000");
    len='short';
});

//long
$("#long").on("click", function() {
    $("#long").css("background-color", "#be4d66");
    $("#short").css("background-color", "#000000");
    $("#neither").css("background-color", "#000000");
    len='long';
});

//neither
$("#neither").on("click", function() {
    $("#neither").css("background-color", "#be4d66");
    $("#long").css("background-color", "#000000");
    $("#short").css("background-color", "#000000");
    len='neither';
    
});

//events for size seleciton

//size1
$("#2XS").on("click", function() {
   $("#2XS").css("background-color", "#be4d66");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#000000");
    size='2XS';
    
});
//size2
$("#XS").on("click", function() {
    $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#be4d66");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#000000");
    size='XS';
    
});

//size3
$("#S").on("click", function() {
 $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#be4d66");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#000000");
    size='S';
    
});

//size4
$("#M").on("click", function() {
   $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#be4d66");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#000000");
    size='M';
    
});

//size5
$("#L").on("click", function() {
    $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#be4d66");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#000000");
    size='L';
});

//XL
$("#XL").on("click", function() {
       $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#be4d66");
       $("#2XL").css("background-color", "#000000");
    size='XL';
});

//size7
$("#2XL").on("click", function() {
      $("#2XS").css("background-color", "#000000");
    $("#XS").css("background-color", "#000000");
    $("#S").css("background-color", "#000000");
     $("#M").css("background-color", "#000000");
    $("#L").css("background-color", "#000000");
    $("#XL").css("background-color", "#000000");
       $("#2XL").css("background-color", "#be4d66");
    size='2XL';
    
    
});

//events for image selection
//image 1
$("#img1").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    
  $("#img2").css('border','');  
$("#img3").css('border','');  
$("#img4").css('border','');  
currimg=1;

});

//image 2
$("#img2").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    
    $("#img1").css('border','');  
$("#img3").css('border','');  
$("#img4").css('border','');  
currimg=2;

});

//image 3
$("#img3").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    $("#img2").css('border','');  
$("#img1").css('border','');  
$("#img4").css('border','');  
    currimg=3;
    
});

//image 4
$("#img4").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    
   $("#img2").css('border','');  
$("#img3").css('border','');  
$("#img1").css('border',''); 
currimg=4;
  
});

//on click done button
$("#done").on("click", function() {
   alert(size);
   alert(c);
   alert(len);
   upld();
   });

//click events for condition
$("#new").on("click", function() {
   if(condition==0)
   {
   $("#new").css("background-color", "#be4d66");
   condition=1;
   selectcondition='new';
   }
   else
   {
   $("#new").css("background-color", "#000000");
   condition=0;
   selectcondition='';
  
   }
   });
//onclick condition choose
  $("#choose").on("click", function() {
   $("#new").css("background-color", "#000000");
   });

//select event on condition selection
$('#choose').on('change', function (e) {
    var optionSelected = $(this).find("option:selected");
     
     selectcondition   = optionSelected.text();
 alert(selectcondition);
 });

});

		function myFunction(a) {
			c=a;
    $("#black").css("background-color", "#000000");
    $("#silver").css("background-color", "#000000");
    $("#orange").css("background-color", "#000000");
    $("#white").css("background-color", "#000000");
    $("#gold").css("background-color", "#000000");
    $("#brown").css("background-color", "#000000");
    $("#red").css("background-color", "#000000");
    $("#purple").css("background-color", "#000000");
    $("#nude").css("background-color", "#000000");
    $("#blue").css("background-color", "#000000");
    $("#yellow").css("background-color", "#000000");
    $("#gray").css("background-color", "#000000");
    $("#green").css("background-color", "#000000");
    $("#pink").css("background-color", "#000000");
    $("#pattern").css("background-color", "#000000");
     $("#"+a).css("background-color", "#be4d66");
}


 //send data for php file
function upld()
{
alert('call upld'+imgid);
if(imgid1==null||c==''||size==''||len==''){
		alert('please select all fields');
	}
	else {
     var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".png";
    options.fileName = imagefilename;
    options.mimeType = "image/png";
   
    
  var params = {};
  
  params.des =document.getElementById("des").value;
     
     params.price =document.getElementById("pricew").value;
      params.pricen =document.getElementById("pricen").value; 
     params.siz =size;
     params.color =c;
     params.len =len;
     params.rqid=1;
	 params.req=1;
	 params.chk=1;
     params.postid=pi;
     params.uname=uname;
     options.params = params;
      
    var ft = new FileTransfer();
  
  ft.upload(imgid1, encodeURI("http://52.74.70.40/lnd/edshoppost.php"), win, fail, options);
    alert('successfully');
	upldd();
}
}
function upldd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else {
	alert('call upldd'+imgid2);
     var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".png";
    options.fileName = imagefilename;
    options.mimeType = "image/png";
  var params = {};
     params.rqid=1;
	 params.req=2;
     params.postid=pi;  
     options.params = params;
    
    var ft = new FileTransfer();
   
  ft.upload(imgid2, encodeURI("http://52.74.70.40/lnd/edshoppost.php"), win, fail, options);
    alert('successfully2');
	uplddd();
}
}
function uplddd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else{
	alert('call upldd'+imgid2);

     var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".png";
    options.fileName = imagefilename;
    options.mimeType = "image/png";
  var params = {};
     params.rqid=1;
	 params.req=3;
     params.postid=pi;  
     options.params = params;
    
    var ft = new FileTransfer();
   
  ft.upload(imgid3, encodeURI("http://52.74.70.40/lnd/edshoppost.php"), win, fail, options);
    alert('successfully2');
	upldddd();
}
}
function upldddd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else {
	alert('call upldd'+imgid2);

     var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".png";
    options.fileName = imagefilename;
    options.mimeType = "image/png";
  var params = {};
     params.rqid=1;
	 params.req=4;
     params.postid=pi;  
     options.params = params;
    
    var ft = new FileTransfer();
   
  ft.upload(imgid4, encodeURI("http://52.74.70.40/lnd/edshoppost.php"), win, fail, options);
    alert('successfully4');
	
}
}
function win(r) {
    alert("Image uploaded successfully!!");  
    
}
function fail(error) {
    alert("There was an error uploading image"+error);
}
function aj(){
        var data= localStorage.getItem("item");
        

              setup(data);  
  
}
function setup(result)
{
	alert(result);	
 var obj = jQuery.parseJSON( result );


/*
//$("#price").append(obj.pricen);

 $('#des').val(obj.des);
 var a=$("p#red").val();
$('#price').val(obj.pricew);
$('#pricen').val(obj.pricen);
*/
$("#des").text(obj.des);
$("#"+obj.black).css('background-color',"#be4d66");
$("#"+obj.silver).css('background-color',"#be4d66");
$("#"+obj.orange).css('background-color',"#be4d66");
$("#"+obj.white).css('background-color',"#be4d66");
$("#"+obj.gold).css('background-color',"#be4d66");
$("#"+obj.brown).css('background-color',"#be4d66");
$("#"+obj.red).css('background-color',"#be4d66");
$("#"+obj.purple).css('background-color',"#be4d66");
$("#"+obj.nude).css('background-color',"#be4d66");
$("#"+obj.blue).css('background-color',"#be4d66");
$("#"+obj.yellow).css('background-color',"#be4d66");
$("#"+obj.grey).css('background-color',"#be4d66");
$("#"+obj.green).css('background-color',"#be4d66");
$("#"+obj.pink).css('background-color',"#be4d66");

$("#"+obj.size).css('background-color',"#be4d66");

$("#"+obj.length).css('background-color',"#be4d66");
$("#"+obj.transport).css('background-color',"#be4d66");

$('#img1').attr('src',obj.image_url);
/*
$("#"+obj.condi).css('background-color',"#be4d66");

$("#"+obj.len).css('background-color',"#be4d66");
*/

if(obj.size!='')
{
  size.push(obj.size);

}
len=obj.length;

//color check
if(obj.black!='')
{
  color.push('black');
}
if(obj.silver!='')
{
  color.push('silver');
}
if(obj.orange!='')
{
  color.push('orange');
}
if(obj.white!='')
{
  color.push('white');
}
if(obj.gold!='')
{
  color.push('gold');
}
if(obj.brown!='')
{
  color.push('brown');
}
if(obj.red!='')
{
  color.push('red');
}
if(obj.purple!='')
{
  color.push('purple');
}
if(obj.nude!='')
{
  color.push('nude');
}
if(obj.blue!='')
{
  color.push('blue');
}
if(obj.yellow!='')
{
  color.push('yellow');
}
if(obj.grey!='')
{
  color.push('grey');
}
if(obj.green!='')
{
  color.push('green');
}
if(obj.pink!='')
{
  color.push('pink');
}


}
