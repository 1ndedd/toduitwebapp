import React from "react";
import { useFormik } from "formik";

function CreateTask() {
    const formik = useFormik({
        initialValues: {
            id:"",
            task: ""
        },
        onSubmit: (values) => {
            console.log("onSubmit", values);
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="field">
                <input 
                    name="id"
                    placeholder="Insert ID (integer number)"
                    id = "id"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                />
            </div>
            
            <div className="field">  
                <input 
                    name="task;"
                    placeholder="What Task Is On Your Mind?"
                    task = "task"
                    value={formik.values.task}
                    onChange={formik.handleChange}
                />
            </div>

            <button type="submit">submit</button>
        </form>
    )
}

export default CreateTask;