import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { resetPasswordSchema } from '../validations/validation';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await resetPassword(token, values.password);
//       // Handle successful password reset (e.g., notify user, redirect)
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
      <h2>Reset Password</h2>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={resetPasswordSchema}
        // onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>New Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label>Confirm Password:</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Reset Password</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
