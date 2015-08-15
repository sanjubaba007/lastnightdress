
var aw,ah;
     $(function() {
           $("#uname").focus();
       });
$(document).ready(function(){
  aw= window.innerWidth-22;
  ah= window.innerHeight/2-30;
   $("#pageLoader").hide();

   $("#back").on("click", function() {
   $("#back").css('background-color','#be4d66');

      history.go(-1);
   navigator.app.backHistory();

});
//close div
 $("#ok").click(function(){
$("#shadowdiv").hide();

});


$("form").submit(function() {


  login();
     return false;
   });
});

function login()
{
$('#pageLoader').show();
var request = $.ajax({
   type: 'POST',
   timeout: 5000,
   url: 'http://52.74.70.40/lnd/lndusers.php',
   data: {uname:document.getElementById("uname").value,pass:document.getElementById("upass").value,rqid:8} })
   .done(function(data) {
   var json = JSON.parse(data);
   if(json.status)
   {
 // alert(data);
  localStorage.setItem("uname",json.uname);
   localStorage.setItem("url",json.imageurl);
   localStorage.setItem("type",json.type);


   location.href = "../www/mainprofileview.html";
    }
    else
    {
    //alert(json.message);
    setsize();
    }
   })
   .fail(function() { alert("Problem on Login");})
   .always(function() {$('#pageLoader').hide(); });


}
function setsize()
{
  $("#shadowdiv").show();

  $( "#mydiv").width(aw).height(ah);

}
