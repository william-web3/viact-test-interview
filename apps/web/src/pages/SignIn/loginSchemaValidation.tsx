import * as yup from 'yup';

const loginSchemaValidation = {
  username: yup
    .string()
    .required('Username is required')
    .min(8, 'Username must be longer than or equal to 8 characters'),
    // .max(50, 'Username must be less than or equal to 50 characters')
    // .matches(
    //   /^(?=[a-zA-Z0-9._]{8,50}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
    //   'Username only contains Latin letters and symbols (. or _)'
    // ),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(255, 'Username must be less than or equal to 255 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,255}$/,
      'Password must has a number a capital letter and a specification character.'
    ),
};

export default loginSchemaValidation;
