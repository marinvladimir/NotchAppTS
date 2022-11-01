import InputField from "../InputField";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Form, Formik } from "formik";
import { initialValues } from "../../data/formData";
import { loginValidateSchema } from "../../validations/loginSchema";

describe("inputfield component tests", () => {
  test("renders the inputfield component", () => {
    render(
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleFormSubmit(values)}
      >
        {() => (
          <Form>
            <InputField type="text" fieldName="test" errors="test" label="" />
          </Form>
        )}
      </Formik>
    );
  });

  test("show the inputfield errors when they exist", () => {
    const { getByTestId } = render(
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleFormSubmit(values)}
      >
        {() => (
          <Form>
            <InputField
              type="text"
              fieldName="test"
              errors={"blakbalsb"}
              label=""
            />
          </Form>
        )}
      </Formik>
    );
    const errors = getByTestId("errors");
    expect(errors).toBeInTheDocument();
  });
});

function handleFormSubmit(values: {
  username: string;
  password: string;
  auth: string;
}): any {
  throw new Error("");
}
