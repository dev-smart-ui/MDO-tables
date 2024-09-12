let keepSigned = false;

const signInSubmit = (event) => {
 // event?.stopPropagation();
  const email = $("#signIn-email").val();
  const password = $("#signIn-password").val();
  
  $("#Login_UserName").val(email);
  $("#Login_Password").val(password);  
  
  $('#header_nav').addClass('authorized-user');
  $('#header_nav').removeClass('not-authorized-user');
  
  document.getElementById("form1").submit();
};

const checkBoxHandler = () => {
  const checkBox = $(".signIn-modal-options-check-input");
  const checked = checkBox.hasClass("checked");
  keepSigned = !checked;
  checkBox[checked ? "removeClass" : "addClass"]("checked");
};
