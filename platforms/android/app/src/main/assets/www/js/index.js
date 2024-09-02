/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);
var networkState = "";
var states = {};
var inAppBrowserRef;
var URLlogin = "https://afhc-desa.hospitalaleman.com";
var exit = false;
var open = false;

function onDeviceReady() {
	showBrowser();
	document.addEventListener("online", show, false);
	document.addEventListener("message", message, false);

	inAppBrowserRef.addEventListener('loadstart',
	function(event){
		console.log("Load START in  device ready: ",event.url);
	});

	document.addEventListener("backbutton", function (e) {
		console.log("BACKBUTTON////// index.js");
		console.log("Window.location:  ",window.location);
		
	}, false );

	
	checkConnection();

	if(Connection.NONE === networkState){
				inAppBrowserRef.close();
				exit = true;
		 		callHtml();
	}

	inAppBrowserRef.addEventListener('exit',
		function(event){
			console.log("EventListener('exit', EXIITTTTT ");
			if( !exit ){
				navigator.app.exitApp();
			}
		});

	console.log("entro en onDeviceReady() {} ");
}

function showBrowser() {
		if (!open || exit){
			
			var target = "_blank";
			var options = "location=no,hidden=no,hardwareback=yes,zoom=no";
			inAppBrowserRef = cordova.InAppBrowser.open(URLlogin, target, options);
			console.log("showBrowser() ");
		}
		
		
		
		// inAppBrowserRef.addEventListener('loaderror', loadError);
		// inAppBrowserRef.addEventListener('message', message);
	// 	inAppBrowserRef.addEventListener('loadstop',
	// function(event){
		
	// 	// inAppBrowserRef.executeScript({ code: "localStorage.getItem('session_info')" }, function(values) {
	// 	// 	names = JSON.parse(values[0]);
	// 	// });
		
	// 	// if((names.tipoUsuario === 'socio') && (e.url === URLlogin)){
	// 	// 	console.log("paso por aca :v")
	// 	// 	 inAppBrowserRef.close();
	// 	// 	 navigator.app.exitApp();
	// 	// };
	// 	// if (names.tipoUsuario === undefined){
	// 	// 	console.log("es '' true, ")
	// 	// };
	// 	num = num + 1;
		
	
	// 	if( (num > 2) && (event.url === URLlogin) ){
	// 	//  inAppBrowserRef.close();
	// 	//  navigator.app.exitApp();
	// 	}
	// 	console.log("loadStop device ready: ",event.url);
	// 	console.log("loadStop num ",num);
	// 	// console.log("data setinterval names:  ",names);
	// 	// console.log("data setinterval names:  ",names.tipoUsuario);
	// });
}

function checkConnection() {
	networkState = navigator.connection.type;

	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'No network connection';

	console.log('Connection type: ' + states[networkState]);
	console.log("states: ", states);
	console.log("networkState: ", networkState);
	// document.getElementById("miTexto").innerHTML = states[networkState];
}

function callHtml()
{
	
	window.location = "telefonos.html";
	//inAppBrowserRef.close();
	
	//inAppBrowserRef.hide();
	// console.log("show: ",show);
	console.log("inappbrowserRef",inAppBrowserRef);
	//inAppBrowserRef.hide();
	
	
	console.log("Se oculta! callhtml2");	
}

// function regresar()
// {
//    window.location = "index.html";
// }

// function tryConnection(){
// 	checkConnection();
	
	
// 	if(Connection.NONE === networkState){
// 		callHtml();
// 	}
// 	else{
// 		showBrowser();
// 	}
// }

function loadError(params){
	console.log("Hubo un error al cargar la pagina!!!!");
	console.log("El error es el: ",params.code);
	console.log("El mensaje de error es: ",params.message);
}

function message(params){
	console.log("La pagina obtubo una respuesta!!!!");
	console.log("La respuesta del mensaje de la pagina fue: ",params.data);
}

function show(){
	// inAppBrowserRef.addEventListener('loadstop',
	// function(e){
		
	// 	console.log("loadStop, show current URL: ",e.url);
	// });
	//inAppBrowserRef.show();
	open = true;
	showBrowser();
}
