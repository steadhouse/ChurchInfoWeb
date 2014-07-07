
$(function() {
// Handler for .ready() called.

$( "#LoginForm" ).submit(function( event ) {
//Prevent default behaviour
event.preventDefault();
//Ajax event to send.
  //alert( $( this ).text() );
  var username = $("#User").val();
  var password = $("#Password").val();
  var path = $("#sURLPath").val();
  
  $.post( "Default.php", { User: username, Password: password,  sURLPath: path }, function( data ) { 
  var error = data.mensaje;
  var errorid = data.id;
//error 1 wrong usernam or password
  if(errorid==1){
  $( "#errornotification" ).addClass( "alert-danger" );
  $("#errornotification").show("slow");  
  $("#errornotification").html( " " );
  $("#errornotification").append( "<p>"+error+"</p>" );  
  }
  //Error = 2 Too many failed logins your account has been locked.
   if(errorid==2){
  $( "#errornotification" ).addClass( "alert-danger" );
  $("#errornotification").show("slow");  
  $("#errornotification").html( " " );
  $("#errornotification").append( "<p>"+error+"</p>" );  
  }
  //Login successfull
   if(errorid==3){
   //alert("Ingreso exisoto");
   var redirectpatch = $("#sURLPath").val();
   //window.location.replace(redirectpatch+"/Menu.php"); 
    window.location.replace(redirectpatch+"/CheckVersion.php");   
  }
   
  
  },"json" );

//
});
//



});