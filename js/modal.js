var btnMap = document.querySelector(".js-open-map");
var btnWriteUs = document.querySelector(".write-us");
var popupMap = document.querySelector(".modal-map");
var popupWriteUs = document.querySelector(".modal-write-us");
var overlay = document.querySelector(".modal-overlay");
var closeMap = popupMap.querySelector(".modal-close");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");
var writeUsName = popupWriteUs.querySelector("[name=name]");
var writeUsEmail = popupWriteUs.querySelector("[name=email]");
var writeUsText = popupWriteUs.querySelector("textarea");
var form = popupWriteUs.querySelector("form");

btnMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.toggle("modal-map-show");
  overlay.classList.toggle("modal-overlay-show");
});

btnWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.toggle("modal-write-us-show");
  overlay.classList.toggle("modal-overlay-show");
  writeUsName.focus();
});

form.addEventListener("submit", function(event) {
  popupWriteUs.classList.remove("modal-error");
  popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;

  if (!writeUsName.value) {
    event.preventDefault();
    writeUsName.classList.add("invalid");
    popupWriteUs.classList.add("modal-error");
  } else {
    writeUsName.classList.remove("invalid");
  }

  if (!writeUsEmail.value) {
    event.preventDefault();
    writeUsEmail.classList.add("invalid");
    popupWriteUs.classList.add("modal-error");
  } else {
    writeUsEmail.classList.remove("invalid");
  }

  if (!writeUsText.value) {
    event.preventDefault();
    writeUsText.classList.add("invalid");
    popupWriteUs.classList.add("modal-error");
  } else {
    writeUsText.classList.remove("invalid");
  }

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
  popupWriteUs.classList.remove("modal-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.remove("modal-write-us-show");
  popupMap.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
  popupWriteUs.classList.remove("modal-error");
});
