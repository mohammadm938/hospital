function error_border(id) {
  element = document.getElementById(id);
  element.style.borderColor = "red";
}
function success_border(id) {
  element = document.getElementById(id);
  element.style.borderColor = "green";
}

function check_code_meli(code) {
  var L = code.length;

  if (L < 8 || parseInt(code, 10) == 0) return false;
  code = ("0000" + code).substr(L + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) == 0) return false;
  var c = parseInt(code.substr(9, 1), 10);
  var s = 0;
  for (var i = 0; i < 9; i++) s += parseInt(code.substr(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
  return true;
}

function validate_code_meli(id) {
  var c = document.getElementById(id).value;
  if (!check_code_meli(c)) {
    error_border(id);
    return false;
  } else {
    success_border(id);
    return true;
  }
}

function just_persian(str) {
  var p = /^[\u0600-\u06FF\s]+$/;

  if (!p.test(str)) return false;
  return true;
}

function validate_name(id) {
  let string = document.getElementById(id).value;
  result = just_persian(string);
  if (result && string.length > 2) {
    success_border(id);
  } else {
    error_border(id);
  }
  return result;
}

function validate_phone_number(id) {
  let phone = document.getElementById(id).value;
  var regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  if (regex.test(phone) && phone.length == 11) {
    success_border(id);
    return true;
  } else {
    error_border(id);
    return false;
  }
}

function validate_form() {
  var all_validate = 5;
  inputs_id = document.querySelectorAll("input");
  inputs_id.forEach((element) => {
    if (element.style.borderColor == "red" || element.value.length == 0) {
      all_validate = all_validate - 1;
    }
  });
  if (all_validate == 5) {
    alert("اطلاعت برای ثبت ارسال شد....");
  } else {
    alert("لطفا فیلد ها را با دقت پر کنید....");
  }
}