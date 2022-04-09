import React from 'react';
import useFirebase from '../../Hooks/useFirebase';




const Login = () => {
    const {signInWithGoogle} = useFirebase() 
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={signInWithGoogle} style={{margin:"20px"}} >Google Sign In</button>
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