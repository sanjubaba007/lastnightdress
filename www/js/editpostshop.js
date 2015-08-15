 var black=0,silver=0,orange=0,white=0,gold=0,brown=0,red=0,purple=0,nude=0,blue=0,yellow=0,grey=0,green=0,pink=0,pattern=0,all=0,short=0,long=0,neither=0,size1=0,size2=0,size3=0,size4=0,size5=0,size6=0,size7=0,condition=0;;
    var size;
    var dsize=[];
    var color=[];
    var imgid,imgid1,imgid2,imgid3,imgid4;
    var len,transport='';
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currimg=0;
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
      //
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
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
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
    if(black==0)
    {
    $(this).css("background-color", "#be4d66");
     black=1;
     //adding color to array
     color.push('black');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     black=0;
     //removing color from array
     var itemtoRemove = 'black';
     color.splice($.inArray(itemtoRemove, color),1);
     }
    
});
//silver
 $("#silver").on("click", function() {
    if(silver==0)
    {
    $(this).css("background-color", "#be4d66");
     silver=1;
      color.push('silver');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     silver=0;
     //removing color from array
     var itemtoRemove = 'silver';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});
//orange
 $("#orange").on("click", function() {
    if(orange==0)
    {
    $(this).css("background-color", "#be4d66");
     orange=1;
     color.push('orange');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     orange=0;
     var itemtoRemove = 'orange';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//white
 $("#white").on("click", function() {
    if(white==0)
    {
    $(this).css("background-color", "#be4d66");
     white=1;
     color.push('white');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     white=0;
      var itemtoRemove = 'white';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//gold
 $("#gold").on("click", function() {
    if(gold==0)
    {
    $(this).css("background-color", "#be4d66");
     gold=1;
      color.push('gold');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     gold=0;
      var itemtoRemove = 'gold';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//brown
 $("#brown").on("click", function() {
    if(brown==0)
    {
    $(this).css("background-color", "#be4d66");
     brown=1;
     color.push('brown');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     brown=0;
      var itemtoRemove = 'brown';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//red
 $("#red").on("click", function() {
    if(red==0)
    {
    $(this).css("background-color", "#be4d66");
     red=1;
     color.push('red');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     red=0;
      var itemtoRemove = 'red';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//purple
 $("#purple").on("click", function() {
    if(purple==0)
    {
    $(this).css("background-color", "#be4d66");
     purple=1;
      color.push('purple');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
      purple=0;
       var itemtoRemove = 'purple';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//nude
 $("#nude").on("click", function() {
    if(nude==0)
    {
    $(this).css("background-color", "#be4d66");
     nude=1;
      color.push('nude');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     nude=0;
      var itemtoRemove = 'nude';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//blue
 $("#blue").on("click", function() {
    if(blue==0)
    {
    $(this).css("background-color", "#be4d66");
     blue=1;
      color.push('blue');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     blue=0;
     var itemtoRemove = 'blue';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//yellow
 $("#yellow").on("click", function() {
    if(yellow==0)
    {
    $(this).css("background-color", "#be4d66");
     yellow=1;
     color.push('yellow');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     yellow=0;
      var itemtoRemove = 'yellow';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//grey
 $("#grey").on("click", function() {
    if(grey==0)
    {
    $(this).css("background-color", "#be4d66");
     grey=1;
     color.push('grey');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     grey=0;
     var itemtoRemove = 'grey';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//green
 $("#green").on("click", function() {
    if(green==0)
    {
    $(this).css("background-color", "#be4d66");
    green=1;
    color.push('green');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     green=0;
     var itemtoRemove = 'green';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//pink
 $("#pink").on("click", function() {
    if(pink==0)
    {
    $(this).css("background-color", "#be4d66");
     pink=1;
      color.push('pink');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     pink=0;
      var itemtoRemove = 'pink';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});

//pattern
 $("#pattern").on("click", function() {
    if(pattern==0)
    {
    $(this).css("background-color", "#be4d66");
     pattern=1;
     color.push('pattern');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     pattern=0;
      var itemtoRemove = 'pattern';
     color.splice($.inArray(itemtoRemove,color),1);
     }
    
});
//all
 $("#all").on("click", function() {
    if(all==0)
    {
    $("#black").css("background-color", "#be4d66");
    $("#silver").css("background-color", "#be4d66");
    $("#orange").css("background-color", "#be4d66");
    $("#white").css("background-color", "#be4d66");
    $("#gold").css("background-color", "#be4d66");
    $("#brown").css("background-color", "#be4d66");
    $("#red").css("background-color", "#be4d66");
    $("#purple").css("background-color", "#be4d66");
    $("#nude").css("background-color", "#be4d66");
    $("#blue").css("background-color", "#be4d66");
    $("#yellow").css("background-color", "#be4d66");
    $("#grey").css("background-color", "#be4d66");
    $("#green").css("background-color", "#be4d66");
    $("#pink").css("background-color", "#be4d66");
    $("#pattern").css("background-color", "#be4d66");
    
     all=1;
	color=[];
	 
     color.push('black');
     color.push('silver');
     color.push('orange');
     color.push('white');
     color.push('gold');
     color.push('brown');
     color.push('red');
     color.push('purple');
     color.push('nude');
     color.push('blue');
     color.push('yellow');
     color.push('grey');
     color.push('green');
     color.push('pink');
     color.push('pattern');
     
     }
     else
     {
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
    $("#grey").css("background-color", "#1d1f21");
    $("#green").css("background-color", "#1d1f21");
    $("#pink").css("background-color", "#1d1f21");
    $("#pattern").css("background-color", "#1d1f21");
    
     
     all=0;
     color.splice(0,color.length)
     }
    
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

///size1
$("#2XS").on("click", function() {
    
    if(size1==0)
    {
    $("#2XS").css("background-color", "#be4d66");
    size1=1;
    dsize.push('2XS');
    }
    else
    {
        $("#2XS").css("background-color", "#1d1f21");
    size1=0;
     var itemtoRemove = '2XS';

	    dsize.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});
//size2
$("#XS").on("click", function() {
    if(size2==0)
    {
    $("#XS").css("background-color", "#be4d66");
    size2=1;
     dsize.push('XS');
    }
    else
    {
        $("#XS").css("background-color", "#1d1f21");
    size2=0;
     var itemtoRemove = 'XS';

	    dsize.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size3
$("#S").on("click", function() {
    if(size3==0)
    {
    $("#S").css("background-color", "#be4d66");
    size3=1;
    dsize.push('S');
    }
    else
    {
        $("#S").css("background-color", "#1d1f21");
    size3=0;
         var itemtoRemove = 'S';

	    dsize.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size4
$("#M").on("click", function() {
    if(size4==0)
    {
    $("#M").css("background-color", "#be4d66");
    size4=1;
    dsize.push('M');
    }
    else
    {
        $("#M").css("background-color", "#1d1f21");
    size4=0;
      var itemtoRemove = 'M';

	    dsize.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size5
$("#L").on("click", function() {
    if(size5==0)
    {
    $("#L").css("background-color", "#be4d66");
    size5=1;
     dsize.push('L');
    }
    else
    {
    $("#L").css("background-color", "#1d1f21");
    size5=0;
     var itemtoRemove = 'L';

	    dsize.splice($.inArray(itemtoRemove, size),1);
    }
       
});

//size6
$("#XL").on("click", function() {
    if(size6==0)
    {
    $("#XL").css("background-color", "#be4d66");
    size6=1;
    size.push('XL');
    }
    else
    {
    $("#XL").css("background-color", "#1d1f21");
    size6=0;
    var itemtoRemove = 'XL';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
});

//size7
$("#2XL").on("click", function() {
    if(size7==0)
    {
    $("#2XL").css("background-color", "#be4d66");
    size7=1;
    size.push('2XL');
    }
    else
    {
        $("#2XL").css("background-color", "#1d1f21");
    size7=0;
     var itemtoRemove = '2XL';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
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
 $(this).css("background-color", "#dadada");

   alert(dsize.length);
   alert(color.length);
   alert(color[0]+color[1]);
   alert(len);
  upld();
   });

 });


 //send data for php file
//send data for php file
function upld()
{
	
	
$('#pageLoader').show();
 var uname=localStorage.getItem("uname");
  var pic_url=  localStorage.getItem("url");
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
     params.siz =dsize[0];
      if(params.siz=='')
    {
         alert('No size selected');
  
          return false;
    }
     params.color1 =color[0];
     params.color2 =color[1];
     params.color3 =color[2];
     params.color4 =color[3];
     params.color5 =color[4];
     params.color6 =color[5];
     params.color7 =color[6];
     params.color8 =color[7];
     params.color9 =color[8];
     params.color10 =color[9];
     params.color11 =color[10];
     params.color12 =color[11];
     params.color13 =color[12];
     params.color14 =color[13];
     params.color15 =color[14];
     params.len =len;
      if(params.len=='')
    {
         alert('No length selected');
  
          return false;
    }
     if(color.length==0)
    {
         alert('No color selected');
  
          return false;
    }
   params.transport=transport;
     if(params.transport=='')
    {
         alert('No transport  selected');
  
          return false;
    }
     params.rqid=1;
	   params.req=1;
     params.postid=pi;
     params.uname=uname;
     params.profile_pic=pic_url;
     
     options.params = params;
    
    var ft = new FileTransfer();
   
  ft.upload(imgid1, encodeURI("http://52.74.70.40/lnd/edshoppost.php"), win, fail, options);
    alert('successfully');
	upldd();

}
function upldd()
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
if(imgid3==null){
		alert('please select image');
	}
	else{
alert('call upldd'+imgid3);
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
    alert('successfully3');
	upldddd();
}
}
function upldddd()
{
if(imgid4==null){
		alert('please select image');
	}
	else{	
alert('call upldd'+imgid4);
$('#pageLoader').show();
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
 //   alert("Image uploaded successfully!!");  
    alert(r.response.toString());
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
	
 var obj = jQuery.parseJSON( result );

//setting image size
 var width = $(window).width(), height = $(window).height();
 $("#img1").width(width/4-8).height(width/4-8);
$("#img2").width(width/4-8).height(width/4-8);
$("#img3").width(width/4-8).height(width/4-8);
$("#img4").width(width/4-8).height(width/4-8);


color=[];
pi=obj.postid;
alert(pi+color.length);
alert(result);
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

$("#pricenow").val(obj.price_now);
$("#pricewas").val(obj.price_was);
$("#des").val(obj.price_was);

$("#"+obj.size).css('background-color',"#be4d66");
$("#"+obj.length).css('background-color',"#be4d66");
$("#"+obj.transport).css('background-color',"#be4d66");

$('#img1').attr('src',obj.image_url);
$('#img2').attr('src',obj.image_url1);
$('#img3').attr('src',obj.image_url2);
$('#img4').attr('src',obj.image_url3);

if(obj.size!='')
{
  dsize.push(obj.size);

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