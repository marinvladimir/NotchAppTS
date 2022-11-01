import { Field } from "formik";
import styled from "styled-components";

const CustomLabel = styled.label`
  font-size: 1rem;
  font-family: serif;
  align-self: self-start;
  color: #8e5572;
`;
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 16rem;

  input,
  select {
    border-color: #e8dcf5;
    background-color: #f2f7f2;
    min-height: 1.6rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    color: #443850;
  }
`;
const ErrorBox = styled.div`
  color: #e83151;
`;

const InputField = ({
  fieldName,
  errors,
  label,
  type,
  options,
}: IFieldProps) => {
  return (
    <>
      <FieldWrapper>
        <CustomLabel htmlFor={fieldName}>{label}</CustomLabel>
        <Field type={type} name={fieldName} as={options && type}>
          {options && (
            <>
              <option value="" disabled hidden>
                Choose a {fieldName}
              </option>
              {options?.map((opt: any, key: any) => (
                <option key={key} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </>
          )}
        </Field>
        {errors && <ErrorBox data-testid="errors">{errors}</ErrorBox>}
      </FieldWrapper>
    </>
  );
};

export default InputField;
