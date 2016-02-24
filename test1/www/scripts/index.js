// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

        //var notificationOpenedCallback = function (jsonData) {
        //    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        //};

        //window.plugins.OneSignal.init("6da61808-4692-454b-8adc-4f8711a0a1d9",
        //                               { googleProjectNumber: "158503055866" },
        //                               notificationOpenedCallback);

        //// Show an alert box if a notification comes in when the user is in your app.
        //window.plugins.OneSignal.enableInAppAlertNotification(true);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };


})();

// ------------
function onch() {
    var dprop = document.getElementById('ptm');
    // document.getElementById('nnn').innerHTML = dprop.style.display ;
    if (dprop.style.display == "none" || dprop.style.display == "") dprop.style.display = "block"
    else dprop.style.display = "none";
}
function onch2()
{
  
}

function punkt1() {
    document.location.href = "mainhtml/undermenu/listven.html";
}

function punkt2() {
    document.location.href = "mainhtml/undermenu/krupnomer.html";
}

function punkt3() {
    document.location.href = "mainhtml/undermenu/fruit.html";
}

function punkt4() {
    document.location.href = "mainhtml/undermenu/thuja.html";
}

function punkt5() {
    document.location.href = "mainhtml/undermenu/shrubs.html";
}