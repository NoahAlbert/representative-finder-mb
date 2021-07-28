import {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import {firebaseConfig} from '../config'

function SignUp({ setUser }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signUpUser = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log('signing up...')
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user)
                setLoading(false)
            })
            .catch(err => {
                alert(err.message)
                setLoading(false)
            })
    }

    return(
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={(e) => signUpUser(e)} >
                <label className='form-label'>
                    Email:&nbsp;
                    <input
                        className='form-input'
                        name='email'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label className='form-label'>
                    Password:&nbsp;
                    <input
                        className='form-input'
                        name='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button 
                className='submit-btn'
                type='submit'
                disabled={loading}>
                    {loading ? 'Signing Up' : 'SIGN UP'}
                </button>
            </form>
        </div>
    )
}


export default SignUp