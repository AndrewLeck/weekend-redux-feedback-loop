import { Link } from 'react-router-dom';

function Submit (){
    console.log('Inside Submit function')

    return(
        <>
            <div>
                <h2>Thank You!</h2>
                <Link to='/'>
                    <button type='click'>Leave New FeedBack</button>
                </Link>
            </div>
        </>
    )
}
export default Submit;