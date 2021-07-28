import { Link } from 'react-router-dom'

function Landing(){
    return(
        <div className='landing-container'>
            <h1 className='landing-header'>Find Your Representatives</h1>
            <h2 className='landing-subheader'>Our search features allow you to find offices and representatives by adress</h2>
            <div className='cta'>
                <Link to='search'>
                    Search Now
                </Link>
            </div>
        </div>
    )
}

export default Landing