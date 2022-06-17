import { Link } from 'react-router-dom';

function Understanding (){
    console.log('Inside Understanding function')

    return(
        <>
            <h2>How well are you understanding the content?</h2>
            <form>
                <div>Understanding?</div>
                <input 
                type="number" 
                required
                />
                <Link to='/api/support'>
                <span><button>NEXT</button></span>
                </Link>
            </form>
        </>
    )
}
export default Understanding;