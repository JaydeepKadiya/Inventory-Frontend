import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { forgetPasswordSchema } from '../validations/validation';

const ForgetPassword = () => {
//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await forgetPassword(values.email);
//       // Handle successful request (e.g., notify user)
//       console.log(response.data);
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

  return (
    <div>
      <h2>Forget Password</h2>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgetPasswordSchema}
        // onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassword;
