import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icon/google.png'
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorMassage;
    if (errorGoogle || errorGit) {
        errorMassage = <p>Error: {errorGoogle?.message} {errorGit?.message}</p>
    }
    if (loadingGoogle || loadingGit) {
        return <Loading></Loading>
    }
    if (userGoogle || userGit) {
        navigate(from, { replace: true });
    }

    const handleFacebookLogin = () => {
        toast.error("Sorry Facebook Login System is not Applied!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    return (
        <div>
            {errorMassage}
            <p>--------------------- or --------------------- </p>
            <Button onClick={() => signInWithGoogle()} className='fw-bold' variant="outline-warning"><img width='30px' src={googleIcon} alt="" /> Google</Button>
            <Button onClick={handleFacebookLogin} className='mx-4 fw-bold' variant="outline-primary "><img width='30px' src={googleIcon} alt="" />Facebook</Button>
            <Button onClick={() => signInWithGithub()} className='fw-bold' variant="outline-dark "><img width='30px' src={googleIcon} alt="" />GitHub</Button><br />
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;