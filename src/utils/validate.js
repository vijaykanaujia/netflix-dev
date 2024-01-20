export const checkValidSignInForm = (email, password) => {
  const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password
    );
  if (!validEmail) return "Invalid email";
  if (!validPassword) return "Invalid password";
  return null;
};
export const checkValidSignUpForm = (username, email, password) => {
  const validUsername = username.length;
  const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      password
    );
  if (!validUsername) return "Invalid username";
  if (!validEmail) return "Invalid email";
  if (!validPassword) return "Invalid password";
  return null;
};
