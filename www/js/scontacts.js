
  var app = {
    sendSms: function(num) {
        
        var number = num;//document.getElementById('numberTxt').value;
        var message = 'write your message here ...';//document.getElementById('messageTxt').value;
       // alert(number);
        //alert(message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};
jQuery(document).ready(function() {
    $('#pageLoader').hide();
$( "#st" ).click(function() {
  
  set();
});
 //event to go back
   $("#back").on("click", function() {
    $("#back").css('background-color','#be4d66');
  
       history.go(0);
    navigator.app.backHistory(); 

});   
});
function set(){
    findcontact();
}


function findcontact()
{
      $('#pageLoader').show();
    var name =document.getElementById("cn").value;
   $("#dynamictable").empty();
 
/*    var options = new ContactFindOptions();
                options.filter = "Prerna";
                var fields = ["displayName", "name","phoneNumbers"];
                navigator.contacts.find(fields, onSuccess, onError, options);*/
                
                navigator.contacts.find(
    ['displayName', 'name','phoneNumbers'],
    function(contacts){
      
        var contact_name;
        var contact_phone;
        for( i = 0; i < contacts.length; i++) {
            if(contacts[i].name.formatted != null && contacts[i].name.formatted != undefined ) {
                contact_name = contacts[i].name.formatted;
                contact_name = contact_name.replace(/'/g,"''");
               // alert(contact_name);
                if(contacts[i].phoneNumbers != null && contacts[i].phoneNumbers.length > 0 && contacts[i].phoneNumbers[0].value != null && contacts[i].phoneNumbers[0].value != undefined ) {
                  // alert( contacts[i].phoneNumbers[0].value );
                    contact_phone = contacts[i].phoneNumbers[0].value;
                } else {
                    console.log( "--No Number-" );
                    contact_phone = "";
                }
            }
       showcontact(contact_name,contact_phone,i);
        }
        $('#pageLoader').hide();
    },function(error){
        $('#pageLoader').hide();
        alert(error);
    },{ filter:name, multiple:true }
);
                
}
function showcontact(conname,conphone,i)
{
 if(conphone!='' && conname!='')
 {
$("#dynamictable").append($('<div>',{class:'mycont'+i,id:conphone,style:'margin-top:0px;'}));
$(".mycont"+i).append($('<label>',{id:conphone,class:'test'+i,style:'color:#be4d66;font-size:16px;text-decoration:none;float:left;padding-top:10px;width:100%;padding-left:10px'}));
$(".test"+i).text(conname);



$(".mycont"+i).append($('<label>',{id:i,style:'color:#be4d66;font-size:16px;text-decoration:none;float:left;padding-top:10px;width:100%;padding-left:10px'}));
$("#"+i).text(conphone);
$("#dynamictable").append($('<hr>',{size:'1',style:'width:97%'}));

 $("body").on("click", ".test"+i, function (e) 
    {
	  app.sendSms(e.target.id);
//    /alert(e.target.id);
	
	});
  
}

}


