// Naive way of maintaining state but without knowing anything about how the rest of the website is constructed it's the best I can do.
var popupMadeAlready = false;

// If you want to actually add the divs manually with JavaScript...

// $("html").mousemove(function(e) {
//   popupMadeAlready = !!document.querySelector('.popup-custom');
//   if (!popupMadeAlready && e.pageY <= 3) {
//     var popupCustom = document.createElement('div');
//     popupCustom.className = 'popup-custom';
//     document.querySelector('.outer-div').appendChild(popupCustom);
//     var popupInnards = document.createElement('div');
//     popupInnards.className = 'popup-innards';
//     popupInnards.innerHTML = 'SUSHI'
//     document.querySelector('.popup-custom').appendChild(popupInnards);
//   }
// })

// If you're okay leaving the divs hiden with 0 z-index then this should work well.


(function() {
  document.querySelector('html').addEventListener('mousemove', function (e) {
  if (shouldShowPopup(e)) {
    // This could annoy them 🤣
    // window.addEventListener("beforeunload", function(event) {
    //   console.log('bakayarou!!')
    //   event.preventDefault();
    //   event.returnValue = 'Stop'
    //   return 'Stop';
    // });
    setPopup(e);
  }
});

// This is just used to be more declarative.
function shouldShowPopup(e) {
  if (popupMadeAlready) {
    return false;
  }
  if (e.pageY > 3) {
    return false;
  }
  // Not going to recreate an actual served web page, but if we change this to anything but index.html we can see that it doesn't work.
  // This proves the match functionality is working.
  if (window.location.href.match(/index.html/g)) {
    return true;
  }
}

function setPopup(e) {
  popupMadeAlready = true;
  document.querySelector('.popup-custom').style.visibility = 'visible';
  document.querySelector('.popup-innards').style.visibility = 'visible';
  document.querySelector('.popup-custom').style.zIndex = 998;
  document.querySelector('.popup-innards').style.zIndex = 999;
  document.querySelector('.popup-custom').addEventListener('click', destroyPopup);
  document.querySelector('.popup-innards').addEventListener('click', destroyPopup);
}

function destroyPopup() {
  if (document.querySelector('.popup-custom')) {
    document.querySelector('.popup-custom').remove();
  }
}

// Alternative to deleting, if you want them to go back to hiding.
function hidePopup() {
  document.querySelector('.popup-custom').style.visibility = 'hidden';
  document.querySelector('.popup-innards').style.visibility = 'hidden';
  document.querySelector('.popup-custom').style.zIndex = 0;
  document.querySelector('.popup-innards').style.zIndex = 0;
  document.querySelector('.popup-custom').removeEventListener('click', destroyPopup);
  document.querySelector('.popup-innards').removeEventListener('click', destroyPopup);
}})()