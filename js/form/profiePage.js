/*
 * This function add classes to form elements
 * @ author:
 */
function addClasses(input, label, p) {
  input.classList.add("input-form-error");
  label.classList.add("label-form-error");
  p.classList.remove("hide");
  return false;
}

/*
 * This function removes classes to form elements
 * @ author:
 */
function removeClasses(input, label, p) {
  input.classList.remove("input-form-error");
  label.classList.remove("label-form-error");
  p.classList.add("hide");
  return false;
}

/*
 * This function validates username input
 * from profile page
 * @ author:
 */
export function validaUsername() {
  // get DOM elements
  const x = document.getElementById("Uname");
  const xLabel = document.querySelector('label[for="Uname"]');
  const xp = document.querySelector(".p-Uname");
  // toggle classes
  if (x.value == "") {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
  return false;
}

/*
 * This function validates Email input
 * from profile page
 * @ author:
 */

export function validateEmail() {
  // get DOM elements
  const email = document.getElementById("email");
  const elabel = document.querySelector('label[for="email"]');
  const ep = document.queryselector(".p-email");
  //regular expresion
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value.trim())) {
    removeClasses(email, elabel, ep);
  } else {
    addClases(email, elabel, ep);
  }
}
