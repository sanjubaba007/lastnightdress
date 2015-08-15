$(document).ready(function(){
    $(".divClass").click(function(){
      // location.href = "../www/mainprofileview.html";
    if ($("#chkbox").is(':checked'))
   {
   localStorage.setItem("ins", "checked");
   }
   else
    {
    
   localStorage.removeItem("ins");
   
   }
    location.href = "../www/clickimages.html";
    });
     $("#close").click(function(){
      $(this).css('background-color','#be4d66');
       location.href = "../www/mainprofileview.html";
    });
    
    //click picture
     $("#postdata").click(function(){
      $(this).css('background-color','#be4d66');
      localStorage.removeItem("imid1");
      localStorage.removeItem("imid2");
      localStorage.removeItem("imid3");
      localStorage.removeItem("imid4");
      location.href = "../www/clickimages.html";
    });
    
});