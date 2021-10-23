import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required'),
    password: Yup.string() 
      .min(2, 'password is too short!')
      .required('Password is Required'),
});


export const RegenerateTokenSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required'),
});

export const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'username is too short!')
      .required('Username is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required'),
    password: Yup.string()
      .min(2, 'password is too short!')
      .required('Password is Required'),
    confirm_password: Yup.string()
      .min(2, 'confirm password is too short!')
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('Confirm password is Required'),
});


const contactFormat = Yup.object({
  code:Yup.string(),
  number:Yup.number()
  .positive('number cannot be less than zero')
  .integer('number cannot be less than zero'),
  whatsapp:Yup.boolean()
});

export const UpdateUserSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'username is too short!')
      .required('Username is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required'),
    first_name: Yup.string()
      .min(2, 'username is too short!'),
    last_name: Yup.string()
      .min(2, 'username is too short!'),
    contacts: Yup.array().of(contactFormat)
});

/* address: Yup.object({
  code:Yup.string().required('Required'),
  city:Yup.string().required('Required'),
  country:Yup.string().required('Required'),
  number:Yup.number().positive('zipcode cannot be less than zero').integer('zipcode cannot be less than zero').required('Required'),
  whatsapp:Yup.string().required('Required'),
  lng:Yup.string().required('Required'),
}), */


export const ChangePasswordSchema = Yup.object().shape({
    old_password: Yup.string()
      .min(2, 'password is too short!')
      .required('Password is Required'),
    password: Yup.string()
      .min(2, 'password is too short!')
      .required('Password is Required'),
    confirm_password: Yup.string()
      .min(2, 'confirm password is too short!')
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('Confirm password is Required'),
});


export const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'password is too short!')
      .required('Password is Required'),
    confirm_password: Yup.string()
      .min(2, 'confirm password is too short!')
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('Confirm password is Required'),
});


