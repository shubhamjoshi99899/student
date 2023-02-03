import * as Yup from "yup";

export const CreateStudentValidationSchema = Yup.object({
  first_name: Yup.string().required("Please enter your first name "),
  last_name: Yup.string().required("Please enter your lasts name "),
  city: Yup.string().required("Please enter your city "),
  class: Yup.string().required("Please select your class "),
  division: Yup.string().required("Please select your division "),
  roll_number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Must be exactly 2 digits")
    .max(2, "Must be exactly 2 digits"),
  pincode: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits"),
  address_one: Yup.string().required("Please enter your primary address "),
  city: Yup.string().required("Please enter your city "),
  landmark: Yup.string().required("Please enter your landmark "),
});
