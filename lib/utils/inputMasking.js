const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

/*   import MaskedInput from "react-text-mask"; */

{/* <Field
  name="phone"
  render={({ field }) => (
    <MaskedInput
      {...field}
      mask={phoneNumberMask}
      id="phone"
      placeholder="Enter your phone number"
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      className={
        errors.phone && touched.phone
          ? "text-input error"
          : "text-input"
      }
    />
  )}
/> */}