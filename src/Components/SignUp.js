import {useState} from 'react'

function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpUser = (e) => {
        e.preventDefault()
        console.log('signing up...')
    }

    return(
        <div className='form-container'>
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
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


export default SignUp