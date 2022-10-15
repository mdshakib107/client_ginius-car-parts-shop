import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMassage;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const handleResetPssword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Email Sent  !", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            toast.error("Plase Give Your email to reset password!", {
                position: toast.POSITION.TOP_RIGHT
            });


        }
    };
    if (error || errorReset) {
        errorMassage = <div>  <p>Error: {error?.message} {errorReset?.message}</p> </div>;
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }



    return (
        <div className='container w-50 mx-auto '>
            <h1>Please Login </h1>
            <Form onSubmit={handleSubmit} className='text-start'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorMassage}
                <div className="text-center "><Button className='fw-bolder px-5' variant="primary" type="submit">
                    Submit
                </Button></div>
            </Form>
            <p >Forget Password?<button onClick={handleResetPssword} type="button" className="btn btn-link">Reset Password</button></p>
            <p >New in Ginius Car? <Link to='/register' className='text-primary' >Please Register</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />


        </div>
    );
};

export default Login;