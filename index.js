const form = document.querySelector(".container form");
const email = document.querySelector(".container form input[type=email]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value;

  if (validateEmail(emailValue)) {
    document.location.reload();
  } else {
    document.querySelector(".small").style.visibility = "visible";
    document.querySelector(".icon").style.visibility = "visible";
    document.querySelector(".email").style.border =
      "2px solid hsl(0, 93%, 68%)";
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
