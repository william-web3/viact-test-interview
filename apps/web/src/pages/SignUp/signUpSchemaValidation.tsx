import * as yup from 'yup';

const loginSchemaValidation = {
  firstName: yup.string().required('First name is required'),

  lastName: yup.string().required('Last name is required'),

  username: yup
    .string()
    .required('Username is required')
    .min(8, 'Username must be longer than or equal to 8 characters')
    .max(50, 'Username must be less than or equal to 50 characters')
    .matches(
      /^(?=[a-zA-Z0-9._]{8,50}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      'Username only contains Latin letters and symbols (. or _)'
    ),

  email: yup.string().required('Email is required').email('Email is invalid'),

  phone: yup
    .string()
    .required('Phone is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(255, 'Username must be less than or equal to 255 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,255}$/,
      'Password must has a number a capital letter and a specification character.'
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Confirm password must equal to password')
    .required('Confirm password is required'),

  // yearOfBirth: yup
  //   .number()
  //   .required('Last name is required')
  //   .min(2023 - 100, 'Invalid year of birth')
  //   .max(2023 - 18, 'Can only sign up when you over 18'),
};

export default loginSchemaValidation;
