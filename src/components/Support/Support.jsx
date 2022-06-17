// import { Link } from 'react-router-dom';

function Support (){
    console.log('Inside Support function')

    return(
        <>
            <h2>How well are you being supported?</h2>
            <form>
                <div>Support?</div>
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
export default Support;