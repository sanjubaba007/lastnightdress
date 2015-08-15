    var black=0,silver=0,orange=0,white=0,gold=0,brown=0,red=0,purple=0,nude=0,blue=0,yellow=0,gray=0,green=0,pink=0,pattern=0,all=0,short=0,long=0,neither=0,size1=0,size2=0,size3=0,size4=0,size5=0,XL=0,size7=0,condition=0;;
    var size;
    var color=[];
    var imgid;
    var c;
    var uname="deven";
    var len,transport='',selectcondition='';
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currimg=0;
    var imgid1,imgid2,imgid3,imgid4;
	 var d = new Date();
	var pi;
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
     $("#delivery").css("background-color", "#1d1f21");
   transport='pickup';
    
});
    $("#delivery").on("click", function() {
    
    $(this).css("background-color", "#be4d66");
     $("#pickup").css("background-color", "#1d1f21");
   transport='delivery';
   
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
    $("#long").css("background-color", "#1d1f21");
    $("#neither").css("background-color", "#1d1f21");
    len='short';
});

//long
$("#long").on("click", function() {
    $("#long").css("background-color", "#be4d66");
    $("#short").css("background-color", "#1d1f21");
    $("#neither").css("background-color", "#1d1f21");
    len='long';
});

//neither
$("#neither").on("click", function() {
    $("#neither").css("background-color", "#be4d66");
    $("#long").css("background-color", "#1d1f21");
    $("#short").css("background-color", "#1d1f21");
    len='neither';
    
});

//events for size seleciton

//size1
$("#2XS").on("click", function() {
   $("#2XS").css("background-color", "#be4d66");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#1d1f21");
       $("#2XL").css("background-color", "#1d1f21");
    size='2XS';
    
});
//size2
$("#XS").on("click", function() {
    $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#be4d66");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#1d1f21");
       $("#2XL").css("background-color", "#1d1f21");
    size='XS';
    
});

//size3
$("#S").on("click", function() {
 $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#be4d66");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#1d1f21");
       $("#2XL").css("background-color", "#1d1f21");
    size='S';
    
});

//size4
$("#M").on("click", function() {
   $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#be4d66");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#1d1f21");
       $("#2XL").css("background-color", "#1d1f21");
    size='M';
    
});

//size5
$("#L").on("click", function() {
    $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#be4d66");
    $("#XL").css("background-color", "#1d1f21");
       $("#2XL").css("background-color", "#1d1f21");
    size='L';
});

//XL
$("#XL").on("click", function() {
       $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#be4d66");
       $("#2XL").css("background-color", "#1d1f21");
    size='XL';
});

//size7
$("#2XL").on("click", function() {
      $("#2XS").css("background-color", "#1d1f21");
    $("#XS").css("background-color", "#1d1f21");
    $("#S").css("background-color", "#1d1f21");
     $("#M").css("background-color", "#1d1f21");
    $("#L").css("background-color", "#1d1f21");
    $("#XL").css("background-color", "#1d1f21");
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
   if(imgid1==null&&imgid2==null&&imgid3==null&&imgid4==null){
		updatefields();
	}
	else
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
   $("#new").css("background-color", "#1d1f21");
   condition=0;
   selectcondition='';
  
   }
   });
//onclick condition choose
  $("#choose").on("click", function() {
   $("#new").css("background-color", "#1d1f21");
   });

//select event on condition selection
$('#choose').on('change', function (e) {
    var optionSelected = $(this).find("option:selected");
     
     selectcondition   = optionSelected.text();
 //alert(selectcondition);
 });

});

		function myFunction(a) {
			c=a;
    $("#black").css("background-color", "#1d1f21");
    $("#silver").css("background-color", "#1d1f21");
    $("#orange").css("background-color", "#1d1f21");
    $("#white").css("background-color", "#1d1f21");
    $("#gold").css("background-color", "#1d1f21");
    $("#brown").css("background-color", "#1d1f21");
    $("#red").css("background-color", "#1d1f21");
    $("#purple").css("background-color", "#1d1f21");
    $("#nude").css("background-color", "#1d1f21");
    $("#blue").css("background-color", "#1d1f21");
    $("#yellow").css("background-color", "#1d1f21");
    $("#gray").css("background-color", "#1d1f21");
    $("#green").css("background-color", "#1d1f21");
    $("#pink").css("background-color", "#1d1f21");
    $("#pattern").css("background-color", "#1d1f21");
     $("#"+a).css("background-color", "#be4d66");
}


 //send data for php file
function upld()
{

if(imgid1==null||imgid2==null||imgid3==null||imgid4==null){
		alert('please select all images');
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
   if(params.des=='')
  {
   alert('Description field empty');
   return false;
  }  
     params.price =document.getElementById("pricewas").value;
	 if(params.price=='')
  {
       alert('Price was field empty');
  
   return false;
  }
      params.pricen =document.getElementById("pricenow").value; 
    if(params.pricen=='')
    {
         alert('Old price field empty');
  
          return false;
    }
	 params.siz =size;
	   if(params.siz=='')
    {
         alert('No size selected');
  
          return false;
    }
     params.color =c;
	  if(params.color=='')
    {
         alert('No color selected');
  
          return false;
    }
     params.len =len;
	 if(params.len=='')
    {
         alert('No length selected');
  
          return false;
    }
	 params.condi=selectcondition;
	 if(params.condi=='')
    {
         alert('No condition selected');
  
          return false;
    }
	params.transport =transport;
	 
	 if(params.transport=='')
    {
         alert('No transport selected');
  
          return false;
    }
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
	 params.transport=transport; 
	  
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
function updatefields()
{
	// $('#pageLoader').show();
      var des =document.getElementById("des").value;
   if(des=='')
  {
   alert('Description field empty');
   return false;
  }  
  
     var price =document.getElementById("pricewas").value;
	 if(price=='')
  {
       alert('Price was field empty');
  
   return false;
  }
  
  
    var  pricen =document.getElementById("pricenow").value; 
    if(pricen=='')
    {
         alert('Old price field empty');
  
          return false;
    }
	
  
	 var siz=size;
	   if(siz=='')
    {
         alert('No size selected');
  
          return false;
    }
	
  
     var color =c;
	  if(color=='')
    {
         alert('No color selected');
  
          return false;
    }
     var length =len;
	 if(length=='')
    {
         alert('No length selected');
  
          return false;
    }
	
  
	var  condi=selectcondition;
	 if(condi=='')
    {
         alert('No condition selected');
  
          return false;
    }
	
  
	var transportm =transport;
	 
	 if(transportm=='')
    {
         alert('No transport selected');
  
          return false;
    }
  
  
     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/edshoppost.php',
    data: {postid:pi,des:des,siz:siz,price:price,pricen:pricen,len:length,condi:condi,transport:transportm,chk:1,color:c,rqid:2} })
    .done(function(data) {  
    var json = JSON.parse(data);
 	if(json.status==true)
 	{
 	alert(json.message);
    
 	}
 	else
 	{
 	alert(json.message);
 	
 	}
 	
    })
    .fail(function() { alert("Problem in updating profile info"); })
    .always(function() {$('#pageLoader').hide();$("#save").css("background-color", "#fff");});

	
}
function aj(){
        var data= localStorage.getItem("item");
        

              setup(data);  
  
}
function setup(result)
{
  //setting image size
 var width = $(window).width(), height = $(window).height();
 $("#img1").width(width/4-8).height(width/4-8);
$("#img2").width(width/4-8).height(width/4-8);
$("#img3").width(width/4-8).height(width/4-8);
$("#img4").width(width/4-8).height(width/4-8);


	
 var obj = jQuery.parseJSON( result );


pi=obj.postid;
$("#des").val(obj.description);
$("#pricewas").val(obj.price_was);
$("#pricenow").val(obj.price_now);
selectcondition=obj.condi;
if(selectcondition=='new')
$("#"+selectcondition).css("background-color", "#be4d66");
else
{
	
}
transport=obj.transport;

$("#"+obj.transport).css("background-color", "#be4d66");
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
$('#img2').attr('src',obj.image_url1);
$('#img3').attr('src',obj.image_url2);
$('#img4').attr('src',obj.image_url3);

if(obj.size!='')
{
  size=obj.size;

}
len=obj.length;

//color check
if(obj.black!='')
{
  color.push('black');
  c='black';
}
if(obj.silver!='')
{
  color.push('silver');
c='silver';
}
if(obj.orange!='')
{
  color.push('orange');
c='orange';
}
if(obj.white!='')
{
  color.push('white');
c='white';
}
if(obj.gold!='')
{
  color.push('gold');
c='gole';
}
if(obj.brown!='')
{
  color.push('brown');
c='brown';
}
if(obj.red!='')
{
  color.push('red');
c='red';
}
if(obj.purple!='')
{
  color.push('purple');
c='purple';
}
if(obj.nude!='')
{
  color.push('nude');
c='nude';
}
if(obj.blue!='')
{
  color.push('blue');
c='blue';
}
if(obj.yallow!='')
{
  color.push('yellow');
c='yellow';
}
if(obj.grey!='')
{
  color.push('grey');
c='grey';
}
if(obj.green!='')
{
  color.push('green');
c='green';
}
if(obj.pink!='')
{
  color.push('pink');
c='pink';
}


}
