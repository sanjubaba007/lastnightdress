    var black=0,silver=0,orange=0,white=0,gold=0,brown=0,red=0,purple=0,nude=0,blue=0,yellow=0,gray=0,green=0,pink=0,pattern=0,all=0,short=0,long=0,neither=0,size1=0,size2=0,size3=0,size4=0,size5=0,XL=0,size7=0,condition=0;;
    var size;
   
    var c;
    var mycolor;
    var len='',transport='',selectcondition='';
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currimg=0;
    var imgid1,imgid2,imgid3,imgid4;
	 var d = new Date();
	var pi='lnd'+d.getTime();
  
  //get image from localstorage
    var a=localStorage.getItem("imid1"); 
     var b=localStorage.getItem("imid2"); 
      var c=localStorage.getItem("imid3"); 
      var d=localStorage.getItem("imid4"); 
    // Wait for device API libraries to load
    //
   
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() 
    {
      //setting images to img
      var largeImage = document.getElementById('img1');
      largeImage.src = a;
         var largeImage = document.getElementById('img2');
      largeImage.src = b;
       var largeImage = document.getElementById('img3');
      largeImage.src = c;
       var largeImage = document.getElementById('img4');
      largeImage.src = d;
	    imgid1=a;
      imgid2=b;
     imgid3=c;
     imgid4=d;
      var width = $(window).width(), height = $(window).height();
 $("#img1").width(width/4-8).height(width/4-8);
$("#img2").width(width/4-8).height(width/4-8);
$("#img3").width(width/4-8).height(width/4-8);
$("#img4").width(width/4-8).height(width/4-8);

    }

   

 
    
$( document ).ready(function() {
   //hide loader 
    $('#pageLoader').hide();
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


});

//image 2
$("#img2").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    
    $("#img1").css('border','');  
$("#img3").css('border','');  
$("#img4").css('border','');  


});

//image 3
$("#img3").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    $("#img2").css('border','');  
$("#img1").css('border','');  
$("#img4").css('border','');  
   
    
});

//image 4
$("#img4").on("click", function() {
    $(this).css({"border-color": "#be4d66", 
             "border-width":"3px", 
             "border-style":"solid"});
    
   $("#img2").css('border','');  
$("#img3").css('border','');  
$("#img1").css('border',''); 

  
});

//on click done button
$("#footer").on("click", function() {
  /*
alert("description"+document.getElementById("des").value);
alert("price was"+document.getElementById("pricewas").value);
alert("price now"+document.getElementById("pricenow").value);
alert("size"+size);
alert("color"+mycolor);
alert("length"+len);
alert("condition"+selectcondition);
alert("transport"+transport);*/
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
			mycolor=a;
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
     params.siz =size;
      if(params.siz=='')
    {
         alert('No size selected');
  
          return false;
    }
     params.color1 =mycolor;
      if(params.color1=='')
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
    
    params.condition =selectcondition;
       if(params.condition=='')
    {
         alert('No condition  selected');
  
          return false;
    }
    
    
    
    params.transport =transport;
       if(params.transport=='')
    {
         alert('No transport  selected');
  
          return false;
    }
    
     params.rqid=1;
	   params.req=1;
	    params.chk=1;
     params.postid=pi;
     params.uname=uname;
    params.profile_pic=pic_url;
     options.params = params;
      
    var ft = new FileTransfer();
   $('#pageLoader').show();
 
  ft.upload(imgid1, encodeURI("http://52.74.70.40/lnd/postdata.php"), win, fail, options);
   // alert('successfully');
	upldd();
}

function upldd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else {
	//alert('call upldd'+imgid2);
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
   
  ft.upload(imgid2, encodeURI("http://52.74.70.40/lnd/postdata.php"), win, fail, options);
  //  alert('successfully2');
	uplddd();
}
}
function uplddd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else{
	//alert('call upldd'+imgid2);

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
   
  ft.upload(imgid3, encodeURI("http://52.74.70.40/lnd/postdata.php"), win, fail, options);
  //  alert('successfully2');
	upldddd();
}
}
function upldddd()
{
	if(imgid2==null){
		alert('please select image');
	}
	else {
	//alert('call upldd'+imgid2);

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
   
  ft.upload(imgid4, encodeURI("http://52.74.70.40/lnd/postdata.php"), result, fail, options);
   // alert('successfully4');
	
}
}
function win(r) {
 //   alert("Image uploaded successfully!!");  
    
}
function fail(error) {
    alert("There was an error uploading image"+error);
}
function result(r) {
//var json = JSON.parse(r.response.toString());
   // alert("Image uploaded successfully!! "+r.response.toString());  
    //$('#pageLoader').hide();
alert('dress posted successfully');
  $('#pageLoader').hide();
  
location.href = "../www/mainprofileview.html";
}
