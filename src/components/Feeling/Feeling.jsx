// import { Link } from 'react-router-dom';

function Feelings (){
    console.log('Inside feelings function')

    return(
        <>
            <h2>How are you feeling today?</h2>
            <form>
                <div>Feeling?</div>
                <input 
                type="number" 
                required
                />
                {/* <Link> */}
                <span><button>NEXT</button></span>
                {/* </Link> */}
            </form>
        </>
    )
}
export default Feelings;