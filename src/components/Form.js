import React from "react";
import { useFormik}  from "formik";
import * as Yup from 'yup'


export default function Form(){

    function format(n){
        return n > 9 ? "" + n: "0" + n;
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            baddress: "",
            daddress: "",
            date: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(20, "Must be 20 Characters or less").required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            baddress: Yup.string().max(20).required("Required"),
            daddress: Yup.string().max(20).required("Required"),
        }),
        onSubmit: (values) => {
            alert(`Hello ${values.name}\nThank You! For Shopping With Us`)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2> Billing Form </h2>
            <div className="input-container">
                <input 
                    id="name"
                    type='text'
                    name="name"
                    placeholder="Your Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                { formik.touched.name && formik.errors.name ? <p className="error"> { formik.errors.name } </p> : null }
            </div>
            <div className="input-container">
                <input 
                    id="email"
                    type='email'
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                { formik.touched.email && formik.errors.email ? <p className="error"> { formik.errors.email } </p> : null }
            </div>
            <div className="input-container">
                <input 
                    id="baddress"
                    type='text'
                    name="baddress"
                    placeholder="Billing Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.baddress}
                />
                { formik.touched.baddress && formik.errors.baddress ? <p className="error"> { formik.errors.baddress } </p> : null }
            </div>
            <div className="input-container">
                <input 
                    id="daddress"
                    type='text'
                    name="daddress"
                    placeholder="Delivery Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.daddress}
                />
                { formik.touched.daddress && formik.errors.daddress ? <p className="error"> { formik.errors.daddress } </p> : null }
            </div>
            <div className="input-container">
                <input 
                    id="date"
                    type='date'
                    name="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={new Date().toISOString().split('T')[0]}
                    disabled
                />
                { formik.touched.date && formik.errors.date ? <p className="error"> { formik.errors.date } </p> : null }
            </div>
            <button type="submit" className="btn"> Submit </button>
        </form>
    )
}