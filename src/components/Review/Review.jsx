import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';





function Review(){

 const feeling = useSelector(store => store.feeling)
 const understanding = useSelector(store => store.understanding)
 const support = useSelector(store => store.support)
 const comments = useSelector(store => store.comments)
 
    const history = useHistory();
    const sendToSubmit= () => {
        history.push('/api/submit')
    }
    console.log('Inside Review function')

    return(
        <>
            <h2>Review Your Feedback</h2>
            <form>
                <ul>
                    <li>
                        Feelings:{feeling}
                    </li>
                    <li>
                        Understanding:{understanding}
                    </li>
                    <li>
                        Support:{support}
                    </li>
                    <li>
                        Comments:{comments}
                    </li>
                </ul>
                
                
                <button onClick={sendToSubmit}>SUBMIT</button>{/* Create a teneiry? When Review Not complete print Incomplete and grey out/ complete print Submit*/}
                {/* <button>INCOMPLETE</button> */}
                
            </form>
        </>
    )
}
export default Review;