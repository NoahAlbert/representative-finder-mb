import {useState} from 'react'
import firebase from 'firebase/app'
import'firebase/auth'
import {firebaseConfig} from '../config'

function SignIn({ setUser }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signInUser = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log('signing in...')
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
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
            <h2>Sign In</h2>
            <form onSubmit={(e) => signInUser(e)} >
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
                    {loading ? 'Signing In' : 'SIGN IN'}
                </button>
            </form>
        </div>
    )
}


export default SignIn