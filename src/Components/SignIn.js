import {useState} from 'react'

function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInUser = (e) => {
        e.preventDefault()
        console.log('signing in...')
    }

    return(
        <div className='form-container'>
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
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


export default SignIn