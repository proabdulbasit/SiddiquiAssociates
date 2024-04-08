import React, { useState, useEffect } from 'react'
import Styles from "./review.module.scss"
import * as yup from 'yup';
import Button from '../button';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from '../../firebase/firebase-config';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    review: yup
        .string('Enter your review')
        .required('Review is required'),
});

const Review = () => {

    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "userReview")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [])

    const createUser = async (values) => {
        await addDoc(userCollectionRef,
            { name: values.name, review: values.review })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            review: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Form Values", values.name)
            console.log("Firebase Values", users)
            resetForm();
            createUser(values)
        },
    });

    return (
        <>
            <div className={Styles.formContainer}>

                <div className={Styles.contactForm}>
                    <h1>Please Rate Us</h1>
                    <p className='mb-4'>Your Feedback Matters.</p>

                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <TextField id="name" name='name' helperText={formik.touched.name && formik.errors.name} error={formik.touched.name && Boolean(formik.errors.name)} value={formik.values.name} onChange={formik.handleChange} label="Your Name" variant="outlined" fullWidth />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <TextField
                                    id="review"
                                    name='review'
                                    value={formik.values.review}
                                    onChange={formik.handleChange}
                                    label="Give your thoughts on our services..."
                                    multiline
                                    rows={4}
                                    fullWidth
                                    helperText={formik.touched.review && formik.errors.review} error={formik.touched.review && Boolean(formik.errors.review)}
                                />
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                {/* <button className="btn btn-primary btn-3b" type="submit">Submit</button> */}
                                <Button type={"submit"} msg={"Submit"} />
                            </div>

                        </form>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Review