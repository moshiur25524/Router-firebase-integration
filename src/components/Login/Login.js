import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';




const Login = () => {

    const auth = getAuth(app)
    const location = useLocation();
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from , {replace: true});
        })
    }

    const [signInWithGoogle , user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={handleGoogleSignIn} style={{margin:"20px"}} >Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" placeholder='Your Email' />
                <br />
                <input type="password" name="" placeholder='Your Password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;