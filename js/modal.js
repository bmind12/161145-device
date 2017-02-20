var btnMap = document.querySelector(".js-open-map");
var btnWriteUs = document.querySelector(".write-us");
var popupMap = document.querySelector(".modal-map");
var popupWriteUs = document.querySelector(".modal-write-us");
var body = document.querySelector("body");
var closeMap = popupMap.querySelector(".modal-close");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");
var writeUsName = popupWriteUs.querySelector("[name=name]");
var writeUsEmail = popupWriteUs.querySelector("[name=email]");
var writeUsText = popupWriteUs.querySelector("textarea");
var form = popupWriteUs.querySelector("form");

btnMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.toggle("modal-map-show");
  body.classList.toggle("modal-overlay");
});

btnWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.toggle("modal-write-us-show");
  body.classList.toggle("modal-overlay");
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
  body.classList.remove("modal-overlay");
});

closeWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.remove("modal-write-us-show");
  body.classList.remove("modal-overlay");
  popupWriteUs.classList.remove("modal-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popupWriteUs.classList.remove("modal-write-us-show");
  popupMap.classList.remove("modal-map-show");
  body.classList.remove("modal-overlay");
  popupWriteUs.classList.remove("modal-error");
});
