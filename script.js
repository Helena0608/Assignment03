"use strict";

// Thông tin cá nhân
const submitControl = document.querySelector(".submit-email");

function handleSubmit(event) {
  event.preventDefault()
  // giá trị input in thường
  const emailValue = document
    .getElementById("inputEmail")
    .value.toLocaleLowerCase();

  // error
  const errorEmail = document.getElementById("emailHelp");

  // điều kiện
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // kiểm tra email vừa nhập
  const checkMail = emailValue.match(regex);

  // thông tin user
  const sectionContent = document.querySelector(".showInfo");

  // Submit
  if (checkMail) {
    document.querySelector(".form").classList.add("hidden");
    sectionContent.style.display = "inline-block";
  } else {
    errorEmail.textContent = "Sai định dạng email";
    errorEmail.style.color = "red";
  }
}

submitControl.addEventListener("click", handleSubmit);

// Job-info
const viewMore = document.querySelectorAll(".view-more");
const lessMore = document.querySelectorAll(".less-more");
const sectionContent = document.querySelectorAll(".jobInfo");
const heightView = document.querySelectorAll(".view");

for (let a = 0; a < heightView.length; a++) {
  heightView[a].style.height = "170px";

  for (let i = 0; i < sectionContent.length; i++) {
    function handleViewMore(element) {
      viewMore[i].style.display = "none";
      lessMore[i].style.display = "inline-block";
      sectionContent[i].style.display = "inline-block";
      heightView[a].style.height = "auto";
    }

    function handleLessMore(element) {
      lessMore[i].style.display = "none";
      viewMore[i].style.display = "inline-block";
      sectionContent[i].style.display = "none";
    }

    viewMore[i].addEventListener("click", handleViewMore);
    lessMore[i].addEventListener("click", handleLessMore);
  }
}
