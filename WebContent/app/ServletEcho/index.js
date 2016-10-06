$(onWindowLoad);


function onWindowLoad(){
	console.log('jquery started');
	$("a[name=getecho]").on("click",SimpleRequest);
}

function SimpleRequest(){
	console.log("click");
	$.ajax({
		  url: "/sandbox/ServletEcho",
		  data: {
		    timestamp: new Date()
		  },
		  success: function( result ) {
		    console.log('returned soemthing',result);
		  }
		});
}

