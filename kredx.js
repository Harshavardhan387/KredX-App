var login1 = document.getElementById("first-login");
var login2 = document.getElementById("secondlogin");
function myClick(login) {
  if (login === "login1") {
    login1.style.display = "block";
    login2.style.display = "none";
  } else {
    login1.style.display = "none";
    login2.style.display = "block";
  }
}
var industryName = document.forms["form"]["industry"];
var individualName = document.forms["form"]["individual-name"];
var email = document.forms["form"]["email"];
var phoneNumber = document.forms["form"]["phone-number"];
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var industry_error = document.getElementById("err-4");
var name_error = document.getElementById("err-5");
var email_error = document.getElementById("err-6");
var number_error = document.getElementById("err-7");

industryName.addEventListener("textInput", industryName_verify);
individualName.addEventListener("textInput", individualName_verify);
email.addEventListener("textInput", email_verify);
phoneNumber.addEventListener("textInput", phoneNumber_verify);

function validate1() {
  //TODO valiation.
  next = true;
}

function validate2() {
  if (industryName.value.length <= 10) {
    industryName.style.border = "1px solid red";
    industry_error.style.display = "block";
    industryName.focus();
    return false;
  }
  if (individualName.value.length <= 8) {
    individualName.style.border = "1px solid red";
    name_error.style.display = "block";
    individualName.focus();
    return false;
  }
  if (email.value.match(!regex)) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (phoneNumber.value.length < 10) {
    phoneNumber.style.border = "1px solid red";
    number_error.style.display = "block";
    phoneNumber.focus();
    return false;
  }
  login2.style.display = "none";
  alert("Successfully Submitted");
}

function industryName_verify() {
  if (industryName.value.length >= 10) {
    industryName.style.border = "1px solid grey";
    industry_error.style.display = "none";
    return true;
  }
}

function individualName_verify() {
  if (individualName.value.length >= 8) {
    individualName.style.border = "1px solid grey";
    name_error.style.display = "none";
    return true;
  }
}
function email_verify() {
  if (email.value.match(regex)) {
    email.style.border = "1px solid grey";
    email_error.style.display = "none";
    return true;
  }
}
function phoneNumber_verify() {
  if ((phoneNumber.value.length = 10)) {
    phoneNumber.style.border = "1px solid grey";
    number_error.style.display = "none";
    return true;
  }
}
