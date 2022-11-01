import * as Yup from "yup"

export const loginValidateSchema = Yup.object({
    username: Yup.string()
      .email("must be email format")
      .required("cannot be empty"),
    password: Yup.string()
      .min(6, "the password must have at least 6 characters")
      .matches(
        /[$&+,:;=?@#|'<>.^\-*()%!"¨{}€ß¤÷[\]_]/,
        "the password must have at least one special character"
      )
      .matches(/[0-9]/, "the password must have at least one number")
      .required("cannot be empty"),
  })

  export const contactValidateSchema = Yup.object({
    name: Yup.string()
      .max(100, "Last name can have up to 100 characters")
      .required("cannot be empty"),
    lastName: Yup.string()
      .max(300, "Last name can have up to 300 characters")
      .required("cannot be empty"),
    contact: Yup.string()
      .oneOf(["mobilePhone", "phone", "email", "pager"])
      .required("cannot be empty"),
    mobilePhone: Yup.number().when("contact", {
      is: "mobilePhone",
      then: Yup.number().required("cannot be empty"),
    }),
    phone: Yup.number().when("contact", {
      is: "phone",
      then: Yup.number().required("cannot be empty"),
    }),
    email: Yup.string()
      .email("must be email format")
      .when("contact", {
        is: "email",
        then: Yup.string().required("cannot be empty"),
      }),
    pager: Yup.number().when("contact", {
      is: "pager",
      then: Yup.number().required("cannot be empty"),
    }),
  })