function validationPassword(pass) {
    if (pass.length >= 8) {
        if (pass.match(/[A-Z]/) && pass.match(/[a-z]/) && pass.match(/[0-9]/)  && !(pass.match(/[^a-z-0-9]/i)) ){
            return true;
          }
          return false;
        }
    return false;
  }


module.exports = { validationPassword };


/* function password(pass) {
  if (pass.length >= 8) {
    return true;
  }
  return false;
}

function upperCase(pass) {
  if (pass.match(/[A-Z]/)) {
    return true;
  }
  return false;
}

function lowerCase(pass) {
    if (pass.match(/[a-z]/)) {
      return true;
    }
    return false;
  }

  function number(pass) {
    if (pass.match(/[0-9]/)) {
      return true;
    }
    return false;
  }
  function alphaNum(pass) {
    if (pass.match(/[^a-z-0-9]/i)) {
      return true;
    }
    return false;
  }

module.exports = { password, upperCase, lowerCase, number, alphaNum }; */

