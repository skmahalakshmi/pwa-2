var indexedDB=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

indexedDB ? console.log("Success") : console.log("Sorry"); 

var open;
var store;

var tx;


function add(){
	var name=document.querySelector("#name").value;
	var email=document.querySelector("#email").value;
	var ph=document.querySelector("#mobile").value;

	if(name=="" && email=="" && ph==""){
		alert("Fields r required");
	}
	else {
	var idb=indexedDB.open("details",1);

	idb.onupgradeneeded=function(e){
	open=e.target.result;
	store=open.createObjectStore("biodata",{keyPath:"name"});
	}

	idb.onerror=function(){
		console.log("Error");
	}

	idb.onsuccess=function(e){
	open=e.target.result;
	tx=open.transaction("biodata","readwrite");
	store=tx.objectStore("biodata");
	store.put(
		{
			name:name,
			email:email,
			mobile:ph
		}
		);

	}
	window.open("index.html");
}
}