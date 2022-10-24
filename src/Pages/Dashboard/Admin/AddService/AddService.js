import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5001/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.insertedId) {
                    toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
        reset()
        // console.log(data);
    }

    return (
        <div className='container w-50 mx-auto p-3 '>

            <Form onSubmit={handleSubmit(onSubmit)} className='text-start shadow p-3 mb-5 bg-white rounded'>

                <Form.Group className="mb-3">
                    <Form.Control  {...register("name", { required: true })} type="text" placeholder="Enter Service Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control  {...register("price", { required: true })} type="number" placeholder=" Enter Service Price" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control as="textarea" {...register("description", { required: true })} placeholder="Enter Description" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control type='url' {...register("img", { required: true })} placeholder="Enter Photo Url" />
                </Form.Group>

                {errors.exampleRequired && <span className='text-denger'>This field is required</span>}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddService;