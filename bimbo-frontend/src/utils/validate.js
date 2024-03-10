const validate = (formData) => {
  const errors = {};

  if (!formData.firstName) {
    errors.firstName = "Please add your first name.";
  }

  if (!formData.lastName) {
    errors.lastName = "Please add your last name.";
  }

  if (!formData.email) {
    errors.email = "Please add your email.";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Email format is invalid.";
  }

  if (!formData.phoneNumber) {
    errors.phoneNumber = "Please add your phone number.";
  } else if (!validatePhoneNumber(formData.phoneNumber)) {
    errors.phoneNumber = "Phone number is incomplete";
  }

  if (!formData.assessment1) {
    errors.assessment1 = "Please select an option.";
  }

  if (!formData.assessment2) {
    errors.assessment2 = "Please select an option.";
  }

  if (!formData.assessment3) {
    errors.assessment3 = "Please select an option.";
  }

  if (!formData.assessment4) {
    errors.assessment4 = "Please select an option.";
  }

  if (!formData.assessment5) {
    errors.assessment5 = "Please select an option.";
  }

  if (!formData.eventName) {
    errors.eventName = "Please enter an event name.";
  }

  if (!formData.date) {
    errors.date = "Required";
  }

  if (!formData.duration) {
    errors.duration = "Please enter event duration.";
  }

  if (!formData.overview) {
    errors.overview = "Please type an overview.";
  }

  return errors;
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

export default validate;
