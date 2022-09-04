const patterns = {
  name: /^[a-z]+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/i,
};

const inputs = document.querySelectorAll("input");

function Validates(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    Validates(e.target, patterns[e.target.attributes.name.value]);
  });
});
