import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreateTask() {
    const initialValues = {
            id: '',
            task: "",
        };
        
    const validationSchema =  Yup.object().shape({
            id: Yup.number()
            .required('Required'),
            
            task: Yup.string()
            .required("Required"),
        });
        
    const onSubmit = (values) => {
            axios.post("http://localhost:3001/Task", values).then((res) => {
                console.log("onSubmit", values);
            });
        };

    return (
    <div className= "TaskLayout">
        <Formik
            initialValues = {initialValues} 
            onSubmit={onSubmit} 
            validationSchema = {validationSchema}
        >
            {({values, errors, touched }) => (
            <Form>
                <div className="idInput">
                    <label>Input ID number:</label>
                    <Field 
                        name="id"
                        placeholder="Insert ID (integer number)"
                    />
                        {touched.id && errors.id ? (
                            <div>{errors.id}</div>
                        ) : null}
                </div>

                <div className="taskInput">
                    <label>Input task:</label>
                    <Field 
                        name="task"
                        placeholder="What Task Is On Your Mind?"
                        task ="task"
                        // value={values.task}
                        // onChange={Formik.handleChange}
                    />
                        {touched.task && errors.task ? (
                            <div>{errors.task}</div>
                        ) : null}
                </div>
                <button type="submit">Submit</button>
            </Form>
            )}
        </Formik>
    </div>
    )
}

export default CreateTask;