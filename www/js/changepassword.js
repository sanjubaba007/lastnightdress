$(document).ready(function() {
   
    $(".container4").hide();
   
$("#changepass").submit(function() {
     
    check();
      return false;
    });
    
    //event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(-1);
    navigator.app.backHistory(); 

});   
    
    
    $('#pageLoader').hide();
});
function check()
{
var newpass =document.getElementById("newpass").value;
     var repass =document.getElementById("retype").value;
     if(newpass==repass)
     {
   
    
      $(".container4").hide();
      changePassword();
     }
     else
     {
     
       $(".container4").show();
 
}
}
function changePassword()
{
var uname=localStorage.getItem("uname");
 
$('#pageLoader').show();
 var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:uname,newpass:document.getElementById("newpass").value,oldpass:document.getElementById("oldpass").value,rqid:6} })
    .done(function(data) {  
    var json = JSON.parse(data);

   if(json.status==true)
   {
  // alert(json.message);
   } 
   else
   {
   alert(json.message);
   
   }
    // location.href = "../www/createprofile.html"; 
     
    })
    .fail(function() { alert("Problem on registration");})
    .always(function() {$('#pageLoader').hide(); });

}

