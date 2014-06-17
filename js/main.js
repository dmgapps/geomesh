document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady()
{
  	//
}

$(document).on( "mobileinit", function() {
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    $.mobile.buttonMarkup.hoverDelay = 0;
    $.mobile.pushStateEnabled = false;
    $.mobile.defaultPageTransition = "none";
});


/*
function uploadVideo() {
	console.log('upload video');
	var options = {

				quality: 100,
				destinationType: Camera.photoDestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				mediaType: Camera.MediaType.VIDEO
		};

	navigator.camera.getPicture(success, error, options);

}

function success(fileURI) {

	var ft = new FileTransfer();
	var options = new FileUploadOptions();
	    options.fileKey="document";
	    options.mimeType="application/octet-stream";
	    options.params={};
	    options.fileName =  fileName;
	    options.params.fileName = options.fileName ;
	    options.chunkedMode = true;
	ft.upload(fileURI, 'http://dmgdemos.com/geomesh/upload.php', successFn, errorFn, options);
}



function error(message) {
    alert(message);
}

*/

function uploadVideo() {

	var options = {
	                    quality : 100,
	                    destinationType : Camera.DestinationType.FILE_URI,
	                    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
	                    mediaType: Camera.MediaType.VIDEO
	                    targetWidth: 500,
	                    targetHeight: 500,
	            };


	navigator.camera.getPicture(success, fail, options);

}


function success(fileURI) {

	     
	        var options = new FileUploadOptions();
	        options.fileKey = "file";
	        options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
	        options.mimeType = "application/octet-stream";
	        var ft = new FileTransfer();
	        ft.upload(fileURI, encodeURI('http://dmgdemos.com/geomesh/upload.php'), uploadSuccess, uploadFail, options);
	}

function fail(message) {
	    console.log(message);
}



/* Upload callbacks */

function uploadSuccess(data) {

	console.log(data);

}

function uploadFail(data) {

	console.log(data);

}