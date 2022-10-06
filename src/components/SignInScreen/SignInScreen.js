import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './signInScreen.css'

function SignInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

  return (
    <div className="signinscreen" >
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={signIn} type="submit">Sign In</button>

            <h4> 
                <span className="signinscreen__gray" >New To Netflix?</span>
                <span onClick={register} className="signinscreen__link" >Sign Up Now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen