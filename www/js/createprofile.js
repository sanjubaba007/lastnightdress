var imgid;
  var camgal;
  var aw,ah;
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currentform=1;
 openFB.init({appId: '429050477261877', tokenStore: window.localStorage});


$(document).ready(function(){

//getting device height
var height = $(window).height();
aw= window.innerWidth-22;
ah= window.innerHeight/2-30;
     $(".ui-popup-container").height(height);
     $(".ui-popup").height(height);


    $("#email").click(function(){
       location.href = "../www/createprofile.html";
    });
});

function login() {
        openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                     //   alert('Facebook login succeeded');
                    getInfo();
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email'});
    }

function getInfo() {
        openFB.api({
            path: '/me',
            success: function(data) {


            $('#largeImage').attr('src','http://graph.facebook.com/' + data.id + '/picture?type=large');
           $( "#largeImage" ).addClass( "circle" );
            imgid='http://graph.facebook.com/' + data.id + '/picture?type=large';
            camgal=3;
            alert(data.id);
            },
            error: errorHandler});
    }

    function errorHandler(error) {
        alert(error.message);
    }
jQuery(document).ready(function() {

  $("#uname").val(localStorage.getItem("fbuname"));
  $("#uemail").val(localStorage.getItem("fbemail"));

 $("#suname").val(localStorage.getItem("fbuname"));
  $("#semail").val(localStorage.getItem("fbemail"));


$('#pageLoader').hide();
$("#pri").css('color','#be4d66');
$("#shop").css('color','#9ea6b0');

    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
     $("#private").submit(function() {
   $("#postdata").css("background-color","#fff");

   if(imgid==null)
   {
   //alert('select image');

  setsize();
  }
    else
    test();
      return false;
    });
   //submit form via another button
   $('#postdata').click(function(){
var form;
        $(this).css("background-color","#be4d66");
  if(currentform==1)
 form=$('#private');
 else
 form=$('#myshop');

form.attr('action',form.attr('action')+'.xls').trigger('submit');
});

    $("#myshop").submit(function() {
    if(imgid==null)
    alert('select image');
    else
    testi();
    return false;

    });

    //camera capture
     $("#camera").click(function() {
    //$("#camera").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    capturePhoto();
    });

   $( "#myPopup1" ).popup({
  afterclose: function( event, ui ) {
   $("#camera").css("background-color","#fff");
    $("#gallery").css("background-color","#fff");
   $("#cancel").css("background-color","#e7e9eb");
   $("#fbpic").css("background-color","#fff");

  }
});
    //gallery
     $("#gallery").click(function() {
  //  $("#gallery").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    getPhoto(pictureSource.SAVEDPHOTOALBUM);

    });


 //fb
     $("#fbpic").click(function() {
    //$("#fbpic").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    login();
    });

    //cancel
     $("#cancel").click(function() {
   // $("#cancel").css("background-color","#be4d66");
     $("#myPopup1").popup("close");
    });

    //close div
     $("#ok").click(function(){
    $("#shadowdiv").hide();
    $( "#myPopup2" ).popup( "close" );
    $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
    });


    });
//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');

       history.go(0);
    navigator.app.backHistory();

});
//event to private
   $("#pri").on("click", function() {
       currentform=1;
    $(this).css('color','#be4d66');
  $("#shop").css('color','#9ea6b0');

   $(".tri-down2").show();
		$(".tri-down").hide();

});
//event to shop
   $("#shop").on("click", function() {
       currentform=2;
    $(this).css('color','#be4d66');
  $("#pri").css('color','#9ea6b0');

    $(".tri-down").show();
		$(".tri-down2").hide();


});
$(".container4").hide();

$(".tri-down").hide();

});

function test()
{
     var pass =document.getElementById("upass").value;
     var cpass =document.getElementById("cpass").value;
     if(pass==cpass){
   if(camgal!=3)
     upd();
     else
     fbregistration1();
     }
     else
     {
    // alert("Password Mismatch");

$('#atype').text("Password Mismatch");
  setsize();
}
}
function testi()
{
       var pass =document.getElementById("spass").value;
     var cpass =document.getElementById("scpass").value;

      if(pass==cpass){
    if(camgal!=3)
         supd();
    else
     fbregistration2();

     }
     else
     {
       $('#atype').text("Password Mismatch");


         setsize();
}
}

function fbregistration1()
{
if(imgid==null)
{
  $('#atype').text("select image");
  setsize();
  return;
}

un=document.getElementById("uname").value;
uem=document.getElementById("uemail").value;
upa=document.getElementById("upass").value;
if(un=="")
{
  $('#atype').text("user name is empty");
  setsize();

    return false;
}
else if(uem=="")
{
  $('#atype').text("user email is empty");
  setsize();

    return false;
}
else if(upa=="")
{
  $('#atype').text("user password is empty");
  setsize();
     return false;
}
$('#pageLoader').show();
 var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:un,email:uem,upass:upa,rqid:5,fbimgurl:imgid} })
    .done(function(data) {
    var json = JSON.parse(data);
  if (json.status == false)
	{
	alert(json.message);

	}
	else
	{
	// alert("Registered !");
	 localStorage.setItem("uname",json.uname);
     localStorage.setItem("url",json.imageurl);

     location.href = "../www/mainprofileview.html";

	}

    })
    .fail(function() { alert("problem on registration"); })
    .always(function() {$('#pageLoader').hide(); });


}
function fbregistration2()
{
$('#pageLoader').show();
 var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:document.getElementById("uname").value,email:document.getElementById("uemail").value,rqid:5,imgurl:'http://graph.facebook.com/' + da.id + '/picture?type=large'} })
    .done(function(data) {
    var json = JSON.parse(data);
    localStorage.setItem("uname",json.uname);
    localStorage.setItem("url",json.imageurl);

     location.href = "../www/createprofile.html";

    })
    .fail(function() { alert("Problem on registration");})
    .always(function() {$('#pageLoader').hide(); });


}
function supd()
{

var un=document.getElementById("suname").value;
var uem=document.getElementById("semail").value;
var upa=document.getElementById("spass").value;
var cn=document.getElementById("scname").value;;
var sn=document.getElementById("scity").value;
var zc=document.getElementById("szcode").value;
var country=document.getElementById("scoun").value;
if(un=="")
{
    alert('user name is empty');
    return false;
}
else if(uem=="")
{
    alert('user email is empty');
    return false;
}
else if(upa=="")
{
     alert('user password is empty');
     return false;
}
else if(cn=="")
{
     alert('company name is empty');
     return false;
}

else if(sn=="")
{
     alert('company name is empty');
     return false;
}
else if(zc=="")
{
     alert('zip code is empty');
     return false;
}
else if(country=="")
{
     alert('country name is empty');
     return false;
}



$('#pageLoader').show();


    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    var params = {};
 //   params.imgid = imgid;
   // params.userid = sessionStorage.loginuserid;
     params.uname =un;
     params.email =uem;
     params.upass =upa;
     params.cpass =document.getElementById("scpass").value;
     params.cname =cn;
     params.city =sn;
     params.zcode =zc;
     params.coun =country;
    params.type="shop";
     params.rqid= 2;
     options.params = params;
    // options.chunkedMode = false;
    var ft = new FileTransfer();
    // var url = "http://52.74.70.40/lnd/lndusers.php";

  ft.upload(imgid, encodeURI("http://52.74.70.40/lnd/lndusers.php"), win, fail, options);
   // alert(params.uname+params.uname+params.email+params.upass+params.type);

}
function upd()
{

    var un=document.getElementById("uname").value;
    var uem =document.getElementById("uemail").value;
    var upa=document.getElementById("upass").value;
    if(un=="")
{
     $('#atype').text("user name is empty");
    setsize();
    return false;
}
else if(uem=="")
{
  $('#atype').text("user email is empty");
    setsize();
    return false;
}
else if(upa=="")
{
  $('#atype').text("user password is empty");
    setsize();
     return false;
}
$('#pageLoader').show();

//if(camgal==2)
//imgid = imgid.replace("%", "%25");

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = '123456';
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";


     var params = {};
            params.uname = un;
            params.email = uem;
           params.upass = upa;
           params.type = "private";
           params.rqid = 1;
     options.params = params;

  var ft = new FileTransfer();
  ft.upload(imgid, encodeURI("http://52.74.70.40/lnd/lndusers.php"), win, fail, options);
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


    // alert("Registered !");
  //  alert(r);
	 localStorage.setItem("uname",json.uname);
    localStorage.setItem("url",json.imageurl);
    localStorage.setItem("type",json.type);
     location.href = "../www/mainprofileview.html";

	}

}

function fail(error) {
$('#pageLoader').hide();

    alert("Problem "+error.message);
   // alert('error code '+error.code+'error source '+error.source+' error target '+error.target);
}

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
         document.addEventListener("backbutton", onBackKeyDown, false);
    }
    function onBackKeyDown()
    {
     history.go(0);
    navigator.app.backHistory();
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      smallImage.src =  imageData;
      imgid= imageData;
      camgal=1;
    }

    // Called when a photo is successfully retrieved
    //
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
      camgal=2;
    }

    // A button will call this function
    //
    function capturePhoto() {
         navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50, destinationType: Camera.DestinationType.FILE_URI
    });
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

function dialog()
{

  $("#myPopup1").popup("open");

}

  //checking username alread exists or not
    function check(un)
    {
   $('#pageLoader').hide();
    var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:un,rqid:7} })
    .done(function(data) {
    var json = JSON.parse(data);

    if (json.status == true)
	{
	$(".container4").show();

	}
	else
	{
	//alert("user already not  exsits");
	$(".container4").hide();
	}

    })
    .fail(function() { alert("error");
    jQuery('#pageLoader').hide();
    })
    .always(function() { });

    }

    function lnduserfb()
    {
    //alert(da.id);
     var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:'sanjay'} })
    .done(function(data) {
    var json = JSON.parse(data);

 	alert(data);
    })
    .fail(function() { alert("error"); })
    .always(function() {alert("works"); });

    }

    //lnduserfb();

    function myFunction()
		 {

    var x = document.getElementById("uname");
   // x.value = x.value.toUpperCase();

    check(x.value);
}
function setsize()
{
  $("#shadowdiv").show();

  $( "#mydiv").width(aw).height(ah);

}
