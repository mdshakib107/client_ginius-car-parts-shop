import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const SingUp = () => {
    const [agree, setAgree] = useState(false);
    const emailregRef = useRef('');
    const passwordregRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [
        updateProfile,
        updating,
        updateError] = useUpdateProfile(auth);

    let errorMassage;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailregRef.current.value;
        const password = passwordregRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    };

    if (error) {
        errorMassage = <div>  <p>Error: {error.message}</p> </div>;
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='container w-50 mx-auto '>
            <h1>Please SingUp </h1>
            <Form onSubmit={handleSubmit} className='text-start'>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control ref={nameRef} placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control ref={emailregRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control ref={passwordregRef} type="password" placeholder="Password" required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control placeholder="Adress" />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                {errorMassage}
                <div className="text-center "><Button className='fw-bolder px-5' variant="primary" type="submit" disabled={!agree}>
                    Submit
                </Button></div>

            </Form>
            <p className='p-4'>Alrady Have an Account? <Link to='/login' className='text-danger' >Please LogIn</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SingUp;