var btnMap = document.querySelector(".js-open-map")
var btnWriteUs = document.querySelector(".write-us");
var popupMap = document.querySelector(".modal-map")
var popupWriteUs = document.querySelector(".modal-write-us");
var overlay = document.querySelector(".modal-overlay");
var closeMap = popupMap.querySelector(".modal-close");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");

btnMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.toggle("modal-map-show");
  overlay.classList.toggle("modal-overlay-show");
});

btnWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.toggle("modal-write-us-show");
  overlay.classList.toggle("modal-overlay-show");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

closeWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.remove("modal-write-us-show");
  overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.remove("modal-write-us-show");
  popupMap.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

//    TOFIX
window.addEventListener("pressdown", function(event) {
  console.log("ESC");
  if (event.keyCode === 27) {
    if (popupWriteUs.classList.contains("modal-write-us-show")) {
      popupWriteUs.classList.remove("modal-write-us-show");
    }
    if (popupMap.classList.contains("modal-map-show")) {
      popupMap.classList.remove("modal-map-show");
    }
  }
});
