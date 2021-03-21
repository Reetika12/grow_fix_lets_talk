// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { withFormik } from "formik";
// import Yup from "yup";

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
                Email
      </label>

            <label>
                <input
                    type="radio"
                    name="test"
                    value="a"
                    checked={values.test === "a"}
                    onChange={() => setFieldValue("test", "a")}
                />a
      </label>
            <label>
                <input
                    type="radio"
                    name="test"
                    value="b"
                    checked={values.test === "b"}
                    onChange={() => setFieldValue("test", "b")}
                />b
      </label>

            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
      </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
      </button>

            <DisplayFormikState {...props} />
        </form>
    );
};

const EnhancedForm = withFormik({
    mapPropsToValues: () => ({ email: "", test: "" }),
    // validationSchema: Yup.object().shape({
    //     email: Yup.string()
    //         .email("Invalid email address")
    //         .required("Email is required!")
    // }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);

export default EnhancedForm;

