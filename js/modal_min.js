var btnMap=document.querySelector(".js-open-map"),btnWriteUs=document.querySelector(".write-us"),popupMap=document.querySelector(".modal-map"),popupWriteUs=document.querySelector(".modal-write-us"),overlay=document.querySelector(".modal-overlay"),closeMap=popupMap.querySelector(".modal-close"),closeWriteUs=popupWriteUs.querySelector(".modal-close"),writeUsName=popupWriteUs.querySelector("[name=name]"),writeUsEmail=popupWriteUs.querySelector("[name=email]"),writeUsText=popupWriteUs.querySelector("textarea"),form=popupWriteUs.querySelector("form");btnMap.addEventListener("click",function(a){a.preventDefault(),popupMap.classList.toggle("modal-map-show"),overlay.classList.toggle("modal-overlay-show")}),btnWriteUs.addEventListener("click",function(a){a.preventDefault(),popupWriteUs.classList.toggle("modal-write-us-show"),overlay.classList.toggle("modal-overlay-show"),writeUsName.focus()}),form.addEventListener("submit",function(a){popupWriteUs.classList.remove("modal-error"),popupWriteUs.offsetWidth=popupWriteUs.offsetWidth,writeUsName.value?writeUsName.classList.remove("invalid"):(a.preventDefault(),writeUsName.classList.add("invalid"),popupWriteUs.classList.add("modal-error")),writeUsEmail.value?writeUsEmail.classList.remove("invalid"):(a.preventDefault(),writeUsEmail.classList.add("invalid"),popupWriteUs.classList.add("modal-error")),writeUsText.value?writeUsText.classList.remove("invalid"):(a.preventDefault(),writeUsText.classList.add("invalid"),popupWriteUs.classList.add("modal-error"))}),closeMap.addEventListener("click",function(a){a.preventDefault(),popupMap.classList.remove("modal-map-show"),overlay.classList.remove("modal-overlay-show")}),closeWriteUs.addEventListener("click",function(a){a.preventDefault(),popupWriteUs.classList.remove("modal-write-us-show"),overlay.classList.remove("modal-overlay-show"),popupWriteUs.classList.remove("modal-error")}),overlay.addEventListener("click",function(a){a.preventDefault(),popupWriteUs.classList.remove("modal-write-us-show"),popupMap.classList.remove("modal-map-show"),overlay.classList.remove("modal-overlay-show"),popupWriteUs.classList.remove("modal-error")});
