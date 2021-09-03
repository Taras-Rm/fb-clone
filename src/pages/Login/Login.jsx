import { Button } from '@material-ui/core'
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import './Login.css'
import { setUser } from '../../redux/appReducer';

function Login() {
    
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
               console.log(result.user)
               dispatch(setUser(result.user))
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo"/>
            <img className="login__title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="logo title"/>
            <Button className="login__btn" 
                onClick={signIn} 
                type="submit" 
                style={{color: "#4d85ff"}} 
                size="large" 
                variant="contained">Log in</Button>
        </div>
    )
}

export default Login
