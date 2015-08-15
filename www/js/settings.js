var dis=0,check=0;

        
$(document).ready(function(){
 //event to go back
 
 //setting auto focus

 var dis=localStorage.getItem("distance");
var swap=localStorage.getItem("swap");


 if(dis=="km")
  $("#km").css("color", "#be4d66");
 else
 $("#miles").css("color", "#be4d66");
 //change flip values
  $("#flip")
            .off("change")
            .val(swap)
            .flipswitch('refresh')
            .on("change", flipChanged);
 
 
 //back events
   $(".back").on("click", function() {
    $(".back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 
});   
   //setting event
     $(".cpass").on("click", function() {
  //    $(this).css('background-color','#be4d66');
    location.href = "../www/changepassword.html";
   
    
});

//editprofile event
     $(".eprof").on("click", function() {
    //  $(this).css('background-color','#be4d66');
   var utype=localStorage.getItem("type");
    //alert(utype);
    
    if(utype=="private")
    {
   
    location.href = "../www/editprofile.html";
    
    }
    else
    {
   
    location.href = "../www/editprofileshop.html";
    }
    
   
    
});

//privacy policy event
     $(".pp").on("click", function() {
  //  $(this).css("background-color", "#be4d66");
    location.href = "../www/privacypolicy.html";
   
    
});

//unlocking bank event
     $(".ub").on("click", function() {
   // $(this).css("background-color", "#be4d66");
    location.href = "../www/privacypolicy.html";
   
    
});

//km event
     $("#km").on("click", function() {
   
    $(this).css("color", "#be4d66");
    $("#miles").css("color", "#000");
    localStorage.setItem("distance","km");
        
});


//unlocking bank event
     $(".fcontact").on("click", function() {
  //  $(this).css("background-color", "#be4d66");
    location.href = "../www/contact.html";
   
    
});
//miles event
     $("#miles").on("click", function() {
    $(this).css("color", "#be4d66");
    $("#km").css("color", "#000");
    localStorage.setItem("distance","mi");
        
});
 function flipChanged(e) {
        var id = this.id,
         value = this.value;
    localStorage.setItem("swap",value);
        if(check==0)
        {
        check=1;
        changesetting(value); 
        }
    }


function changesetting(val)
 {
 var uname= localStorage.getItem("uname");

  var request = $.ajax({
    type: 'POST',
    timeout: 5000,
    url: 'http://52.74.70.40/lnd/lndusers.php',
    data: {uname:uname,value:val,rqid:11} })
    .done(function(data) {  
    var json = JSON.parse(data);

    //  alert(data);  
	
    })
    .fail(function() { alert("unable to change setting"); })
    .always(function() {check=0;});
 
}

    $("#flip").on("change", flipChanged);



});
