 var black=0,silver=0,orange=0,white=0,gold=0,brown=0,red=0,purple=0,nude=0,blue=0,yellow=0,gray=0,green=0,pink=0,pattern=0,all=0,short=0,long=0,neither=0,size1=0,size2=0,size3=0,size4=0,size5=0,size6=0,size7=0,size8=0,condition=0;;
    var size = [];
    var color=[];
    var len='short',transportation='pickup',selectcondition='';
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var currimg=0;
    var business;
    var salllen=0;
    var ball=0;
    
$( document ).ready(function() {
   //default values
$("body").on("swipeleft",function(){
 alert('called');
  });   
   slid();
    
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
//event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
    
  localStorage.setItem("colorlist", JSON.stringify(color));
  localStorage.setItem("sizelist",JSON.stringify(size));
      
localStorage.setItem("length",len);
localStorage.setItem("type",business);
history.go(0);
    navigator.app.backHistory(); 


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

//gray
 $("#gray").on("click", function() {
    if(gray==0)
    {
    $(this).css("background-color", "#be4d66");
     gray=1;
     color.push('gray');
     }
     else
     {
    $(this).css("background-color", "#1d1f21");
     
     gray=0;
     var itemtoRemove = 'gray';
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
    $("#gray").css("background-color", "#be4d66");
    $("#green").css("background-color", "#be4d66");
    $("#pink").css("background-color", "#be4d66");
    $("#pattern").css("background-color", "#be4d66");
    
     all=1;
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
     color.push('gray');
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
    $("#gray").css("background-color", "#1d1f21");
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
$("#sall").on("click", function() {
   if(salllen==0)
   {
    $("#long").css("background-color", "#be4d66");
    $("#short").css("background-color", "#be4d66");
   salllen=1;
   }
   else
   {
     salllen=0;
    $("#long").css("background-color", "#1d1f21");
    $("#short").css("background-color", "#1d1f21");
   
   }
    len='neither';
    
});

//action for business selection
//private
$("#private").on("click", function() {
    $("#private").css("background-color", "#be4d66");
    $("#shop").css("background-color", "#1d1f21");
    $("#busiall").css("background-color", "#1d1f21");
    business='private';
});

//shop
$("#shop").on("click", function() {
    $("#shop").css("background-color", "#be4d66");
    $("#private").css("background-color", "#1d1f21");
    $("#busiall").css("background-color", "#1d1f21");
    business='shop';
});

//neither
$("#busiall").on("click", function() {
    if(ball==0)
    {
    $("#private").css("background-color", "#be4d66");
    $("#shop").css("background-color", "#be4d66");
ball=1;
}
else
{
  $("#private").css("background-color", "#1d1f21");
    $("#shop").css("background-color", "#1d1f21");
ball=0;
}
    business='all';
    
});
//events for size seleciton

//size1
$("#size1").on("click", function() {
    
    if(size1==0)
    {
    $("#size1").css("background-color", "#be4d66");
    size1=1;
    size.push('2XS');
    }
    else
    {
        $("#size1").css("background-color", "#1d1f21");
    size1=0;
     var itemtoRemove = '2XS';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});
//size2
$("#size2").on("click", function() {
    if(size2==0)
    {
    $("#size2").css("background-color", "#be4d66");
    size2=1;
     size.push('XS');
    }
    else
    {
        $("#size2").css("background-color", "#1d1f21");
    size2=0;
     var itemtoRemove = 'XS';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size3
$("#size3").on("click", function() {
    if(size3==0)
    {
    $("#size3").css("background-color", "#be4d66");
    size3=1;
    size.push('S');
    }
    else
    {
        $("#size3").css("background-color", "#1d1f21");
    size3=0;
         var itemtoRemove = 'S';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size4
$("#size4").on("click", function() {
    if(size4==0)
    {
    $("#size4").css("background-color", "#be4d66");
    size4=1;
    size.push('M');
    }
    else
    {
        $("#size4").css("background-color", "#1d1f21");
    size4=0;
      var itemtoRemove = 'M';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size5
$("#size5").on("click", function() {
    if(size5==0)
    {
    $("#size5").css("background-color", "#be4d66");
    size5=1;
     size.push('L');
    }
    else
    {
    $("#size5").css("background-color", "#1d1f21");
    size5=0;
     var itemtoRemove = 'L';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
       
});

//size6
$("#size6").on("click", function() {
    if(size6==0)
    {
    $("#size6").css("background-color", "#be4d66");
    size6=1;
    size.push('XL');
    }
    else
    {
    $("#size6").css("background-color", "#1d1f21");
    size6=0;
    var itemtoRemove = 'XL';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size7
$("#size7").on("click", function() {
    if(size7==0)
    {
    $("#size7").css("background-color", "#be4d66");
    size7=1;
    size.push('2XL');
    }
    else
    {
        $("#size7").css("background-color", "#1d1f21");
    size7=0;
     var itemtoRemove = '2XL';

	    size.splice($.inArray(itemtoRemove, size),1);
    }
    
    
});

//size8
$("#size8").on("click", function() {
    if(size8==0)
    {
      size.splice(0,size.length);
    $("#size1").css("background-color", "#be4d66");
    $("#size2").css("background-color", "#be4d66");
    $("#size3").css("background-color", "#be4d66");
    $("#size4").css("background-color", "#be4d66");
    $("#size5").css("background-color", "#be4d66");
    $("#size6").css("background-color", "#be4d66");
    $("#size7").css("background-color", "#be4d66");
    
    size8=1;
    size1=1;
    size2=1;
    size3=1;
    size4=1;
    size5=1;
    size6=1;
    size7=1;
    
    size.push('2XS');
    size.push('XS');
    size.push('S');
    size.push('M');
    size.push('L');
    size.push('XL');
    size.push('2XL');
    
    }
    else
    {
        $("#size1").css("background-color", "#1d1f21");
        $("#size2").css("background-color", "#1d1f21");
        $("#size3").css("background-color", "#1d1f21");
        $("#size4").css("background-color", "#1d1f21");
        $("#size5").css("background-color", "#1d1f21");
        $("#size6").css("background-color", "#1d1f21");
        $("#size7").css("background-color", "#1d1f21");
        
    size8=0;
    size1=0;
    size2=0;
    size3=0;
    size4=0;
    size5=0;
    size6=0;
    size7=0;

	   size.splice(0,size.length);
    }
    
    
});

//reset
$("#reset").on("click", function() {
    
    $("#reset").css("background-color", "#dadada");
  $("#slider1").slider('value', 0);
    $("#slider").slider('values',[0,1000]);
     //size section
     $("#size1").css("background-color", "#1d1f21");
     $("#size2").css("background-color", "#1d1f21");
     $("#size3").css("background-color", "#1d1f21");
     $("#size4").css("background-color", "#1d1f21");
     $("#size5").css("background-color", "#1d1f21");
     $("#size6").css("background-color", "#1d1f21");
     $("#size7").css("background-color", "#1d1f21");
     $("#private").css("background-color", "#1d1f21");
     $("#shop").css("background-color", "#1d1f21");
    //length section
     $("#short").css("background-color", "#1d1f21");
     $("#long").css("background-color", "#1d1f21");
     $("#neither").css("background-color", "#1d1f21");
    //color section
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
    
    
    
    $("#reset").css("background-color", "#fff");
});




//select event on condition selection
/*$('#choose').on('change', function (e) {
    var optionSelected = $(this).find("option:selected");
     
     selectcondition   = optionSelected.text();
 alert(selectcondition);
 });*/

 
   
});
function slid(){

$("#slider").slider(
          {
             
              range: true,
              min: 0,
              max: 1000,
              step: 1,
              animate:true,
              values: [0, 1000],
              slide:  function showValue(event, ui) {
              $("#val").html('$'+ui.values[0] + " - " + '$'+ui.values[1]+'+');
              //alert(ui.values[0]
              localStorage.setItem("price_first",ui.values[0]);
              localStorage.setItem("price_second",ui.values[1]);
              
          }
          });
          $( "#slider1" ).slider({
      range: "max",
      min: 0,
      max: 100,
      value: 2,
      slide: function( event, ui ) {
        $("#valu").html(ui.value+'ml-100ml');
         
      }
    });
    
}
$(document).ready(function(){
	$(".search-box").keyup(function(){
		$.ajax({
		type: "POST",
		url: "http://52.74.70.40/lnd/readname.php",
		data:'keyword='+$(".search-box").val(),
		beforeSend: function(){
		
			$(".search-box").css("background","#FFF url(img/LoaderIcon.gif) no-repeat 90%");
		
		},
		success: function(data){
			
			
			$(".search-box").css("background","#FFF");
		
		var obj = jQuery.parseJSON(data);
		var i=0;
	
 var names=[];
 
$.each(obj.data, function(idx, obj) 
{
	
  names.push(obj.uname);
});
$( "#tags" ).autocomplete({
      source:names,
    
     select: function(e, ui) {  

                            
                             var selectedObj = ui.item;              
                           localStorage.setItem("profilename",selectedObj.value);
                           location.href = "../www/userprofileview.html"; 
                            },

                            change: function(e, ui) {  

                              // alert("changed!");
                            }
    
    });
		
		}
		});
	});
});

