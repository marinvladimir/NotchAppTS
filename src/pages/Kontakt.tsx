import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { contactFormValidations, initialContactValues } from "../data/formData";
import {
  FieldsWrapper,
  FormBorder,
  Spacer,
  SuccessBox,
  FormWrapper,
} from "../styles/UI";
import InputField from "../base/InputField";
import Button from "../base/Button";
import { contactValidateSchema } from "../validations/loginSchema";
import { db } from "../data/fbData";

const contactData = [
  { value: "mobilePhone", label: "Mobile Phone" },
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "pager", label: "Pager" },
];

const Kontakt = ({ saveContact, editContact }: KontaktProps): JSX.Element => {
  const [formErrors, setFormErrors] =
    React.useState<contactFormValidations>(initialContactValues);
  const [success, setSuccess] = React.useState(false);
  const [current, setCurrent] = React.useState(initialContactValues);
  const params = useParams();
  const usersCollectionRef = collection(db, "adresar");
  const navigate = useNavigate();

  const fetchDataById = async (id: any) => {
    const docRef = doc(db, "adresar", id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let currentData: any = docSnap.data();
        setCurrent(currentData);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (item: any, id: any) => {
    const updtDoc = doc(db, "adresar", id);
    await updateDoc(updtDoc, item)
      .then(() => {
        editContact(item);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (params["*"]) fetchDataById(params["*"]);
    //eslint-disable-next-line
  }, []);

  const addNewContact = async (contact: any) => {
    await addDoc(usersCollectionRef, { ...contact })
      .then(() => saveContact(contact))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormSubmit = async (val: any) => {
    if (!params["*"]) addNewContact(val);
    else updateContact(val, params["*"]);
    setSuccess(true);
    setTimeout(() => navigate("/adresar"), 2000);
  };

  return (
    <div>
      <Formik
        initialValues={current}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        onSubmit={(values) => handleFormSubmit(values)}
        validationSchema={contactValidateSchema}
      >
        {({ values, resetForm, validateForm }) => (
          <Form>
            <FormWrapper>
              <FormBorder>
                <FieldsWrapper>
                  <InputField
                    fieldName="name"
                    type="text"
                    errors={formErrors.name}
                    label="Name"
                  />
                  <InputField
                    fieldName="lastName"
                    errors={formErrors.lastName}
                    label="Last Name"
                    type="text"
                  />
                  <InputField
                    fieldName="date"
                    type="date"
                    errors={formErrors.date}
                    label="Date"
                  />
                  <InputField
                    fieldName="contact"
                    type="select"
                    errors={formErrors.contact}
                    label="Contact"
                    options={contactData}
                  />
                  {values.contact === "mobilePhone" && (
                    <InputField
                      type="number"
                      fieldName="mobilePhone"
                      errors={formErrors.mobilePhone}
                      label="Mobile Phone"
                    />
                  )}
                  {values.contact === "phone" && (
                    <InputField
                      type="number"
                      fieldName="phone"
                      errors={formErrors.phone}
                      label="Phone"
                    />
                  )}
                  {values.contact === "email" && (
                    <InputField
                      type="text"
                      fieldName="email"
                      errors={formErrors.email}
                      label="Email"
                    />
                  )}
                  {values.contact === "pager" && (
                    <InputField
                      type="number"
                      fieldName="pager"
                      errors={formErrors.pager}
                      label="Pager"
                    />
                  )}
                  <Spacer />
                  <Button
                    type="submit"
                    action={() => {
                      validateForm(values).then((err: any) => {
                        console.log(err);
                        setFormErrors(err);
                        if (Object.keys(err).length !== 0) resetForm();
                      });
                    }}
                    text="Submit"
                  />
                  {success && (
                    <SuccessBox>
                      CONTACT ADDED SUCCESSFULLY! Redirecting to the list in a
                      few seconds...
                    </SuccessBox>
                  )}
                </FieldsWrapper>
              </FormBorder>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Kontakt;
