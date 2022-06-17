// import { Link } from 'react-router-dom';

function Review(){
    console.log('Inside Review function')

    return(
        <>
            <h2>Review Your Feedback</h2>
            <form>
                <ul>
                    <li>
                        Feelings: 
                    </li>
                    <li>
                        Understanding:
                    </li>
                    <li>
                        Support:
                    </li>
                    <li>
                        Comments:
                    </li>
                </ul>
                
                {/* <Link> */}
                <button>SUBMIT</button>{/* Create a teneiry? */}
                <button>INCOMPLETE</button>
                {/* </Link> */}
            </form>
        </>
    )
}
export default Review;