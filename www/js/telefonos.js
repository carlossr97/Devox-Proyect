document.addEventListener('deviceready', onDeviceReady, false);
var inAppBrowserRef2;
var num = 0;
var URLlogin = "https://devox.me";
var isShow = false;
function onDeviceReady() {
	document.addEventListener("online", show, false);
	document.addEventListener("backbutton", function (e) {
		console.log("BACKBUTTON////// telefonos.js")
		navigator.app.exitApp();
	}, false );
   

	// inAppBrowserRef2.addEventListener('loadstop',
	// 	function(event){
	// 		num = num + 1;
	
	// 		if( (num > 2) && (event.url === URLlogin) ){
	// 		 inAppBrowserRef2.close();
	// 		 navigator.app.exitApp();
	// 		}
	// 		console.log("loadStop device ready: ",event.url);
	// 		console.log("loadStop num ",num);
	// });


}

function showBrowser() {
	var target = "_blank";
	var options = "location=no,hidden=yes,hardwareback=yes,zoom=no";
	inAppBrowserRef2 = cordova.InAppBrowser.open(URLlogin, target, options);	
    inAppBrowserRef2.hide();
}

function show(){
	var target = "_blank";
	var options = "location=no,hidden=yes,hardwareback=yes,zoom=no";
	inAppBrowserRef3 = cordova.InAppBrowser.open(URLlogin, target, options);	
    inAppBrowserRef3.hide();
	inAppBrowserRef3.addEventListener('loadstop',
	function(){
		inAppBrowserRef3.show();
	});
	inAppBrowserRef3.addEventListener('exit',
	function(event){
		console.log("EventListener('exit', EXIITTTTT ");
		
		  navigator.app.exitApp();
	});

	isShow = true;
	const element = document.querySelector('.dispositivoSinConexion');
	element.setAttribute('style', 'display:none !important');
	const element2 = document.querySelector('.spinnerDisplay');
	element2.setAttribute('style', 'display:flex !important');
}


function back(){
	window.location = "telefonos.html";
}


