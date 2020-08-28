export const invalidUsername = (vUsername) => (
  vUsername.$dirty && !vUsername.required
);

export const invalidEmail = (vEmail) => (
  (vEmail.$dirty && !vEmail.required) || (vEmail.$dirty && !vEmail.email)
);

export const invalidPassword = (vPassword) => (
  (vPassword.$dirty && !vPassword.required) || (vPassword.$dirty && !vPassword.minLength)
);

export const invalidSecondPassword = (vSecondPassword) => (
  (vSecondPassword.$dirty && !vSecondPassword.required)
    || (vSecondPassword.$dirty && !vSecondPassword.sameAsPassword)
);
