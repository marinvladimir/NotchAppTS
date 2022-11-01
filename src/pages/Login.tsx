// main imports
import { Dispatch, useCallback, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

// redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// validations
import { loginValidateSchema } from "../validations/loginSchema";
import { initialValues, loginFormValidations } from "../data/formData";

// styles
import InputField from "../base/InputField";
import Button from "../base/Button";
import {
  ErrorBox,
  FieldsWrapper,
  FormBorder,
  FormWrapper,
  Spacer,
} from "../styles/UI";
import { changeAuth } from "../store/actionCreators";

const Login = () => {
  const [formErrors, setFormErrors] =
    useState<loginFormValidations>(initialValues);
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const editAuth = useCallback(
    (auth: boolean) => dispatch(changeAuth(auth)),
    [dispatch]
  );

  const authed: boolean = useSelector(
    (state: ContactState) => state.authed,
    shallowEqual
  );

  const handleFormSubmit = (val: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, val.username, val.password)
      .then((res) => {
        editAuth(true);
        navigate("/adresar");
      })
      .catch((error) => {
        setFormErrors({ auth: error.code, username: "", password: "" });
      });
  };

  useEffect(() => {
    if (authed) setTimeout(() => navigate("/adresar"), 700);
  }, [authed, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => handleFormSubmit(values)}
      validationSchema={loginValidateSchema}
    >
      {({ values, resetForm, validateForm, errors }) => (
        <Form>
          <FormWrapper>
            <FormBorder>
              <FieldsWrapper>
                <InputField
                  fieldName="username"
                  type="text"
                  errors={formErrors.username}
                  label="Username"
                />
                <InputField
                  fieldName="password"
                  type="text"
                  errors={formErrors.password}
                  label="Password"
                />
                <Spacer />
                <Button
                  type="submit"
                  action={() => {
                    validateForm(values).then((err: any) => {
                      setFormErrors(err);
                      if (Object.keys(err).length !== 0) resetForm();
                    });
                  }}
                  text="Login"
                />
                <Spacer />
                {formErrors.auth && <ErrorBox>{formErrors.auth}</ErrorBox>}
              </FieldsWrapper>
            </FormBorder>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
